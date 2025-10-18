import React, { useState, useRef, useEffect } from 'react';
import { Shield, Send, Paperclip, X, Image, FileText, Video, Download, Menu, Search, MoreVertical } from 'lucide-react';
import PublicLayout from '../components/layout/PublicLayout';

export default function ChatPage() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Welcome to SafeWhistle secure messaging. All messages are encrypted end-to-end.",
      sender: 'system',
      timestamp: new Date(Date.now() - 3600000)
    },
    {
      id: 2,
      text: "Hello, I need to report an incident that occurred last week.",
      sender: 'user',
      timestamp: new Date(Date.now() - 1800000)
    },
    {
      id: 3,
      text: "Thank you for reaching out. Your identity is protected. Please share the details when you're ready.",
      sender: 'admin',
      timestamp: new Date(Date.now() - 1500000)
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [showSidebar, setShowSidebar] = useState(false);
  const fileInputRef = useRef(null);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    const newFiles = files.map(file => ({
      id: Date.now() + Math.random(),
      name: file.name,
      size: file.size,
      type: file.type,
      url: URL.createObjectURL(file)
    }));
    setUploadedFiles([...uploadedFiles, ...newFiles]);
  };

  const removeFile = (fileId) => {
    setUploadedFiles(uploadedFiles.filter(f => f.id !== fileId));
  };

  const sendMessage = () => {
    if (inputText.trim() || uploadedFiles.length > 0) {
      const newMessage = {
        id: Date.now(),
        text: inputText,
        sender: 'user',
        timestamp: new Date(),
        files: uploadedFiles
      };
      setMessages([...messages, newMessage]);
      setInputText('');
      setUploadedFiles([]);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  };

  const getFileIcon = (fileType) => {
    if (fileType.startsWith('image/')) return <Image className="w-5 h-5" />;
    if (fileType.startsWith('video/')) return <Video className="w-5 h-5" />;
    return <FileText className="w-5 h-5" />;
  };

  const formatFileSize = (bytes) => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / 1048576).toFixed(1) + ' MB';
  };

  return (
        <div className="h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Sidebar */}
      <div className={`${showSidebar ? 'block' : 'hidden'} md:block w-full md:w-80 bg-slate-800/50 backdrop-blur-xl border-r border-slate-700/50 relative z-10`}>
        <div className="h-full flex flex-col">
          {/* Sidebar Header */}
          <div className="p-4 border-b border-slate-700/50">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <Shield className="w-8 h-8 text-cyan-400" />
                <h1 className="text-xl font-bold text-white ml-2">SafeWhistle</h1>
              </div>
              <button onClick={() => setShowSidebar(false)} className="md:hidden text-gray-400 hover:text-white">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search conversations..."
                className="w-full bg-slate-900/50 border border-slate-700 rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
          </div>

          {/* Conversations List */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-2 space-y-1">
              <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-3 cursor-pointer hover:bg-cyan-500/20 transition">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-white font-medium text-sm">Report #2847</h3>
                    <p className="text-gray-400 text-xs mt-1 line-clamp-1">Thank you for reaching out...</p>
                  </div>
                  <span className="text-xs text-cyan-400 ml-2">Active</span>
                </div>
                <div className="text-xs text-gray-500 mt-2">2 hours ago</div>
              </div>

              <div className="bg-slate-900/30 rounded-lg p-3 cursor-pointer hover:bg-slate-900/50 transition">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-white font-medium text-sm">Report #2831</h3>
                    <p className="text-gray-400 text-xs mt-1 line-clamp-1">Your report has been received</p>
                  </div>
                  <span className="text-xs text-gray-400 ml-2">Closed</span>
                </div>
                <div className="text-xs text-gray-500 mt-2">3 days ago</div>
              </div>

              <div className="bg-slate-900/30 rounded-lg p-3 cursor-pointer hover:bg-slate-900/50 transition">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-white font-medium text-sm">Report #2819</h3>
                    <p className="text-gray-400 text-xs mt-1 line-clamp-1">Investigation completed</p>
                  </div>
                  <span className="text-xs text-gray-400 ml-2">Closed</span>
                </div>
                <div className="text-xs text-gray-500 mt-2">1 week ago</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col relative">
        {/* Chat Header */}
        <div className="bg-slate-800/50 backdrop-blur-xl border-b border-slate-700/50 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <button onClick={() => setShowSidebar(true)} className="md:hidden mr-3 text-gray-400 hover:text-white">
                <Menu className="w-6 h-6" />
              </button>
              <div>
                <h2 className="text-white font-semibold">Report #2847</h2>
                <p className="text-xs text-gray-400 flex items-center mt-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Secure Connection
                </p>
              </div>
            </div>
            <button className="text-gray-400 hover:text-white transition">
              <MoreVertical className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-lg ${message.sender === 'user' ? 'order-2' : 'order-1'}`}>
                <div
                  className={`rounded-2xl px-4 py-3 ${
                    message.sender === 'system'
                      ? 'bg-slate-700/50 text-gray-300 text-sm text-center'
                      : message.sender === 'user'
                      ? 'bg-gradient-to-r from-cyan-500 to-cyan-600 text-white'
                      : 'bg-slate-800/50 text-white border border-slate-700/50'
                  }`}
                >
                  {message.text && <p className="break-words">{message.text}</p>}
                  
                  {message.files && message.files.length > 0 && (
                    <div className="mt-2 space-y-2">
                      {message.files.map((file) => (
                        <div key={file.id} className="bg-black/20 rounded-lg p-2 flex items-center">
                          <div className="text-white/80">
                            {getFileIcon(file.type)}
                          </div>
                          <div className="ml-2 flex-1 min-w-0">
                            <p className="text-sm truncate">{file.name}</p>
                            <p className="text-xs opacity-70">{formatFileSize(file.size)}</p>
                          </div>
                          <button className="ml-2 p-1 hover:bg-white/10 rounded">
                            <Download className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                {message.sender !== 'system' && (
                  <div className={`text-xs text-gray-500 mt-1 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
                    {formatTime(message.timestamp)}
                  </div>
                )}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* File Preview Area */}
        {uploadedFiles.length > 0 && (
          <div className="px-4 pb-2">
            <div className="bg-slate-800/50 backdrop-blur-xl rounded-lg p-3 border border-slate-700/50">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-300 font-medium">Attached Files ({uploadedFiles.length})</span>
                <button onClick={() => setUploadedFiles([])} className="text-gray-400 hover:text-white text-xs">
                  Clear All
                </button>
              </div>
              <div className="space-y-2">
                {uploadedFiles.map((file) => (
                  <div key={file.id} className="bg-slate-900/50 rounded-lg p-2 flex items-center">
                    <div className="text-cyan-400">
                      {getFileIcon(file.type)}
                    </div>
                    <div className="ml-2 flex-1 min-w-0">
                      <p className="text-sm text-white truncate">{file.name}</p>
                      <p className="text-xs text-gray-400">{formatFileSize(file.size)}</p>
                    </div>
                    <button
                      onClick={() => removeFile(file.id)}
                      className="ml-2 p-1 text-gray-400 hover:text-red-400 transition"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Input Area */}
        <div className="bg-slate-800/50 backdrop-blur-xl border-t border-slate-700/50 p-4">
          <div className="flex items-end space-x-2">
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileUpload}
              multiple
              className="hidden"
              accept="image/*,video/*,.pdf,.doc,.docx,.txt"
            />
            <button
              onClick={() => fileInputRef.current?.click()}
              className="p-3 text-gray-400 hover:text-cyan-400 hover:bg-slate-700/50 rounded-lg transition"
            >
              <Paperclip className="w-5 h-5" />
            </button>
            
            <div className="flex-1 bg-slate-900/50 border border-slate-700 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-cyan-500 transition">
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message... (Shift + Enter for new line)"
                className="w-full bg-transparent px-4 py-3 text-white placeholder-gray-500 focus:outline-none resize-none"
                rows="1"
                style={{ maxHeight: '120px' }}
              />
            </div>
            
            <button
              onClick={sendMessage}
              className="p-3 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white rounded-lg shadow-lg shadow-cyan-500/30 transition-all transform hover:scale-105 active:scale-95"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
          <div className="mt-2 text-xs text-gray-500 text-center">
            <Shield className="w-3 h-3 inline-block mr-1" />
            End-to-end encrypted
          </div>
        </div>
      </div>
    </div>

  );
}