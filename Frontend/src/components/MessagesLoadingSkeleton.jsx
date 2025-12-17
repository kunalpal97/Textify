function MessagesLoadingSkeleton() {
  return (
    <div className="flex-1 overflow-y-auto px-4 py-6 space-y-6">
      {[...Array(8)].map((_, index) => (
        <div
          key={index}
          className={`chat ${
            index % 2 === 0 ? "chat-start" : "chat-end"
          }`}
        >
          <div className="chat-bubble bg-slate-800 w-40 h-10 animate-pulse"></div>
        </div>
      ))}
    </div>
  );
}

export default MessagesLoadingSkeleton;
