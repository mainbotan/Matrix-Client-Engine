import React, { createContext, useContext, useState } from 'react';
import { Message } from './message';

export type MessageStatus = 'success' | 'error' | 'problem' | 'default';

interface MessageContextType {
  showMessage: (title: string, status?: MessageStatus) => void;
  hideMessage: () => void;
}

const MessageContext = createContext<MessageContextType | undefined>(undefined);

export function MessageProvider({ children }: { children: React.ReactNode }) {
  const [currentMessage, setCurrentMessage] = useState<{title: string; status: MessageStatus} | null>(null);

  const showMessage = (title: string, status: MessageStatus = 'success') => {
    setCurrentMessage({ title, status });
    
    setTimeout(() => {
      hideMessage();
    }, 5000);
  };

  const hideMessage = () => {
    setCurrentMessage(null);
  };

  return (
    <MessageContext.Provider value={{ showMessage, hideMessage }}>
      {children}
      {currentMessage && (
        <Message 
          title={currentMessage.title} 
          status={currentMessage.status}
          isActive={true}
        />
      )}
    </MessageContext.Provider>
  );
}

export const useMessage = () => {
  const context = useContext(MessageContext);
  if (!context) {
    throw new Error('useMessage must be used within MessageProvider');
  }
  return context;
};