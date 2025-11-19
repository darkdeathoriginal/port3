import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Ghost } from 'lucide-react';
import { generatePsychicResponse } from '../services/geminiService';
import { ChatMessage, ChatState } from '../types';

const PsychicChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "I'm listening. Make it quick." }
  ]);
  const [status, setStatus] = useState<ChatState>(ChatState.IDLE);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || status === ChatState.THINKING) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setStatus(ChatState.THINKING);

    try {
      const history = messages.slice(-10).map(m => ({ role: m.role, text: m.text }));
      const responseText = await generatePsychicResponse(history, userMsg);
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
      setStatus(ChatState.IDLE);
    } catch (e) {
      setMessages(prev => [...prev, { role: 'model', text: "Bad energy. Can't connect." }]);
      setStatus(ChatState.ERROR);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-scribble">
      {/* Chat Window - Speech Bubble Shape */}
      {isOpen && (
        <div className="mb-4 w-80 sm:w-96 bg-white border-[3px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col h-96 animate-boil relative">
          {/* Tail */}
          <div className="absolute -bottom-4 right-8 w-6 h-6 bg-white border-r-[3px] border-b-[3px] border-black transform rotate-45"></div>
          
          {/* Header */}
          <div className="bg-black text-white p-3 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Ghost className="w-5 h-5 animate-bounce" />
              <h3 className="font-comic text-xl tracking-wider uppercase">Spirit Talk</h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-300">
              <X size={24} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-[url('https://www.transparenttextures.com/patterns/paper.png')]">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-2 border-2 border-black text-lg leading-tight ${
                  msg.role === 'user' 
                    ? 'bg-black text-white rounded-tr-xl rounded-bl-xl' 
                    : 'bg-white text-black rounded-tl-xl rounded-br-xl'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {status === ChatState.THINKING && (
              <div className="text-sm text-gray-500 italic animate-pulse">
                Consulting spirits...
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t-[3px] border-black flex gap-2 bg-white z-10">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Ask me..."
              className="flex-1 bg-gray-100 border-b-2 border-black px-2 py-1 outline-none focus:bg-white font-scribble text-xl"
            />
            <button 
              onClick={handleSend}
              disabled={status === ChatState.THINKING}
              className="text-black hover:scale-110 transition-transform"
            >
              <Send size={24} strokeWidth={3} />
            </button>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`group relative flex items-center justify-center w-16 h-16 bg-white border-[3px] border-black shadow-[4px_4px_0px_0px_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all`}
      >
        <Ghost size={32} strokeWidth={2} className={`${isOpen ? 'hidden' : 'block'}`} />
        <X size={32} strokeWidth={2} className={`${isOpen ? 'block' : 'hidden'}`} />
        
        {!isOpen && (
            <div className="absolute right-full mr-4 bg-black text-white px-2 py-1 whitespace-nowrap font-comic text-sm border-2 border-black hidden group-hover:block">
                CONSULT?
            </div>
        )}
      </button>
    </div>
  );
};

export default PsychicChat;