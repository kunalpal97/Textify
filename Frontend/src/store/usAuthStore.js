
import { create } from "zustand";

export const useAuthStore = create((set , get) => ({

    authUser : {
        name : "Amit" ,
        _id : 222,
        age : 52, 

    },
    isLoggedIn :false,

    login: () => {
        console.log("We just Logged In");
        set({isLoggedIn:true});

    }



}))