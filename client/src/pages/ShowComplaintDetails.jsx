import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from "react-router-dom";
import { Shield, Eye, EyeOff, Copy } from 'lucide-react';

export default function ShowComplaintDetails() {
  const location = useLocation();
  const { username: datau, password: datap } = location.state || {};
  const [username] = useState(datau || 'anonymous_user_2847');
  const [password] = useState(datap || 'Sk9#mX7$pL2@qR8n');
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);
  const [timeRemaining, setTimeRemaining] = useState(10);
  const [copiedField, setCopiedField] = useState(null);
  const timerRef = useRef(null);

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  const startTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    setTimeRemaining(10);
    setIsPasswordVisible(true);

    timerRef.current = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          setIsPasswordVisible(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handlePasswordClick = () => {
    if (!isPasswordVisible) {
      startTimer();
    }
  };

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Main Content */}
      <div className="relative w-full max-w-4xl">
        {/* Logo and Title */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Shield className="w-12 h-12 text-cyan-400" />
            <h1 className="text-3xl font-bold text-white ml-3">SafeWhistle</h1>
          </div>
          <p className="text-gray-400 text-sm">Your Secure Credentials</p>
        </div>

        {/* Credentials Display */}
        <div className="flex flex-col items-center justify-center gap-8 mb-8">
          {/* Username */}
          <div className="flex items-center gap-4">
            <span className="text-gray-300 text-xl font-medium">Username :</span>
            <div className="flex items-center gap-3 group">
              <span className="text-white font-mono text-xl">{username}</span>
              <button
                onClick={() => copyToClipboard(username, 'username')}
                className="p-2 text-gray-400 hover:text-cyan-400 hover:bg-slate-700/50 rounded-lg transition opacity-0 group-hover:opacity-100"
              >
                <Copy className="w-5 h-5" />
              </button>
            </div>
          </div>
          {/* Password */}
          <div className="flex items-center gap-4">
            <span className="text-gray-300 text-xl font-medium">Password :</span>
            <div
              onClick={handlePasswordClick}
              className={`flex items-center gap-3 group ${!isPasswordVisible ? 'cursor-pointer' : ''
                }`}
            >
              {isPasswordVisible ? (
                <>
                  <span className="text-white font-mono text-xl">{password}</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      copyToClipboard(password, 'password');
                    }}
                    className="p-2 text-gray-400 hover:text-cyan-400 hover:bg-slate-700/50 rounded-lg transition opacity-0 group-hover:opacity-100"
                  >
                    <Copy className="w-5 h-5" />
                  </button>
                </>
              ) : (
                <div className="flex items-center gap-3 hover:text-cyan-400 transition">
                  <span className="text-gray-500 text-xl">••••••••••••••••</span>
                  <EyeOff className="w-5 h-5 text-cyan-400" />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Timer and Status */}
        <div className="text-center space-y-3">
          {isPasswordVisible && (
            <p className="text-cyan-400 text-sm animate-fade-in">
              Password hiding in {timeRemaining} seconds
            </p>
          )}
          {!isPasswordVisible && (
            <p className="text-gray-400 text-sm animate-fade-in">
              Click on password to reveal for 10 seconds
            </p>
          )}
          {copiedField && (
            <p className="text-cyan-400 text-sm animate-fade-in">
              {copiedField === 'username' ? 'Username' : 'Password'} copied to clipboard!
            </p>
          )}
        </div>

        {/* Security Notice */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center text-gray-500 text-xs">
            <Shield className="w-4 h-4 mr-2" />
            Keep these credentials safe and secure
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}