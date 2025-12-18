import toast from "react-hot-toast";
import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import { useAuthStore } from "./useAuthStore";
import { use } from "react";



export const useChatStore = create((set, get) => ({
  allContacts: [],
  chats: [],
  messages: [],
  activeTab: "chats",
  selectedUser: null,
  isUsersLoading: false,
  isMessagesLoading: false,
  isSoundEnabled: JSON.parse(localStorage.getItem("isSoundEnabled")) === true,

  toggleSound: () => {
    localStorage.setItem("isSoundEnabled", !get().isSoundEnabled);
    set({ isSoundEnabled: !get().isSoundEnabled });
  },

  setActiveTab: (tab) => set({ activeTab: tab }),
  setSelectedUser: (selectedUser) => set({ selectedUser }),

  getAllContacts: async () => {
    set({ isUsersLoading: true });
    try {
      const res = await axiosInstance.get("/messages/contacts");
      set({ allContacts: res.data });
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isUsersLoading: false });
    }
  },

  getMyChatPartners: async () => {
    set({ isUsersLoading: true });

    try {
      const res = await axiosInstance.get("/messages/chats");
      set({ chats: res.data });
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isUsersLoading: false });
    }
  },

  getMessagesByUserId: async (userId) => {
    set({ isMessagesLoading: true });

    try {
      const res = await axiosInstance.get(`/messages/${userId}`);
      set({ messages: res.data });
    } catch (error) {
      toast.error(error.response?.data?.message || "Error fetching messages");
    } finally {
      set({ isMessagesLoading: false });
    }
  },

  sendMessage: async (messageData) => {
    const { selectedUser , messages } = get();
    const { authUser } = useAuthStore.getState();

    const tempId = `temp-${Date.now()}`;

    const optimisticMessage = {
        _id: tempId,
        senderId : authUser._id,
        recevierId : selectedUser._id,
        text : messageData.text,
        createAt : new Date().toISOString(),
        isOptimistic : true,  // this is the val which will tell weather the message is optimistic or not ?
    }
    // this what tell us that fresh the UI and show the Text turant fata fat 
    // imidiealty update the UI and show the user to that text here okay 
    set({messages : [...messages , optimisticMessage]})

    try {
      const res = await axiosInstance.post(
        `/messages/send/${selectedUser._id}`,
        messageData
      );

      set({ messages: messages.concat(res.data) });
    } catch (error) {
        // if that optimisticMessage gets failed so we will tell that pahle wale message pe switch kar do

        set({messages : messages});
      toast.error(
        error.response?.data?.message || "Something went Wrong with Message"
      );
    }
  },

  subscribeToMessages : () => {

    const {selectedUser , isSoundEnabled} = get();

    if(!selectedUser) return;


    const socket = useAuthStore.getState().socket;

    socket.on("newMessage" , (newMessage) => {

      const isMessageSentFromSelecetdUser = newMessage.senderId === selectedUser._id;

      if(!isMessageSentFromSelecetdUser) return;

        const currentMessage = get().messages;

        set({messages:  [...currentMessage , newMessage] });

        if(isSoundEnabled){
            const notificationSound = new Audio("/sounds/notification.mp3")
            notificationSound.currentTime = 0;
            notificationSound.play().catch((e) => console.log("Audio Play failed ", e));
        }
    })

  },

  unsubscribeFromMessage : () => {
    const socket = useAuthStore.getState().socket;
    socket.off("newMessage");
  }
}));
