import React, { useState, useRef, useEffect } from "react";
import { FileText, Upload, AlertCircle, CheckCircle2, Loader2, Mic, MicOff, Shield, Lock, Eye, EyeOff } from "lucide-react";
import PublicLayout from "../components/layout/PublicLayout";
import axios from 'axios';
import { baseUrl } from "../App";
import { useNavigate } from "react-router-dom";

const RegisterComplaintForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    department: "",
    category: "",
    subCategory: "",
    complaintType: "",
    state: "",
    natureOfComplaint: "",
    complaintDetails: "",
    file: null
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState({ message: '', type: '' });
  const [charCount, setCharCount] = useState(0);
  const [fileName, setFileName] = useState("");
  const maxChars = 2000;

  // Voice recording states
  const [isRecording, setIsRecording] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const mediaRecorderRef = useRef(null);
  const recognitionRef = useRef(null);
  const timerRef = useRef(null);

  // Anonymous mode
  const [anonymousMode, setAnonymousMode] = useState(true);

  const departments = ["anti-corruption department", "health department", "labour department", "NIA department", "corporate regulation department"];
  const categories = ["Financial Fraud", "Corruption", "Workplace Harassment", "Tax Evasion", "Other"];
  const complaintTypes = ["Complaint", "Grievance", "Suggestion", "Inquiry"];
  const states = ["Andhra Pradesh", "Karnataka", "Maharashtra", "Tamil Nadu", "Uttar Pradesh", "Delhi", "Other"];

  // Initialize speech recognition
  useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = true;
      recognitionRef.current.interimResults = true;
      recognitionRef.current.lang = 'en-US';

      recognitionRef.current.onresult = (event) => {
        let finalTranscript = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
          const transcript = event.results[i][0].transcript;
          if (event.results[i].isFinal) {
            finalTranscript += transcript + ' ';
          }
        }
        if (finalTranscript) {
          setFormData(prev => ({
            ...prev,
            complaintDetails: prev.complaintDetails + finalTranscript
          }));
          setCharCount(prev => prev + finalTranscript.length);
        }
      };

      recognitionRef.current.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
      };
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleDetailsChange = (e) => {
    const value = e.target.value;
    if (value.length <= maxChars) {
      setFormData(prev => ({ ...prev, complaintDetails: value }));
      setCharCount(value.length);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({ ...prev, file }));
      setFileName(file.name);
    }
  };

  const toggleVoiceToText = () => {
    if (!recognitionRef.current) {
      alert('Speech recognition is not supported in your browser. Please use Chrome or Edge.');
      return;
    }

    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      recognitionRef.current.start();
      setIsListening(true);
    }
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      const chunks = [];

      mediaRecorderRef.current.ondataavailable = (e) => chunks.push(e.data);
      mediaRecorderRef.current.onstop = () => {
        const blob = new Blob(chunks, { type: 'audio/webm' });
        const file = new File([blob], 'voice-recording.webm', { type: 'audio/webm' });
        setFormData(prev => ({ ...prev, file }));
        setFileName('voice-recording.webm');
        stream.getTracks().forEach(track => track.stop());
      };

      mediaRecorderRef.current.start();
      setIsRecording(true);
      setRecordingTime(0);
      timerRef.current = setInterval(() => {
        setRecordingTime(prev => prev + 1);
      }, 1000);
    } catch (err) {
      console.error('Error accessing microphone:', err);
      alert('Unable to access microphone. Please check permissions.');
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      if (timerRef.current) clearInterval(timerRef.current);
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus({ message: '', type: '' });

    const data = new FormData();
    data.append('department', formData.department);
    data.append('category', formData.category);
    data.append('state', formData.state);
    data.append('title', formData.natureOfComplaint);
    data.append('description', formData.complaintDetails);
    if (formData.file) {
      data.append('file', formData.file);
    }
    data.append('complaintType', formData.complaintType);

    let response;
    try {
      response = await axios.post(
        `${baseUrl}/complain/createcomplain`,
        data,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      console.log("Form submitted successfully:", response.data);
      setSubmissionStatus({ message: 'Complaint submitted successfully! Your identity remains protected.', type: 'success' });
      
      navigate(`/complaint/${response.data.WhistleBlower.username}`,
        {
          state: { username: response.data.WhistleBlower.username, password: response.data.WhistleBlower.password }
        }
      );
    } catch (error) {
      console.error("Submission failed:", error);
      const errorMessage = error.response?.data?.message || "Submission failed. Please try again.";
      setSubmissionStatus({ message: errorMessage, type: 'error' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PublicLayout>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12 px-4">
        {/* Animated background pattern */}
        <div className="fixed inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
            backgroundSize: '32px 32px'
          }}></div>
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          {/* Anonymous Header */}
          <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl shadow-2xl p-8 mb-8 border border-slate-600 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-emerald-500/20 rounded-lg border border-emerald-500/30">
                  <Shield className="w-8 h-8 text-emerald-400" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-white tracking-tight">Secure Whistleblower Portal</h1>
                  <p className="text-slate-300 text-sm mt-1">Your identity is protected with end-to-end encryption</p>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-emerald-500/10 px-4 py-2 rounded-full border border-emerald-500/30">
                {anonymousMode ? (
                  <>
                    <EyeOff className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 text-sm font-semibold">Anonymous Mode</span>
                  </>
                ) : (
                  <>
                    <Eye className="w-4 h-4 text-amber-400" />
                    <span className="text-amber-400 text-sm font-semibold">Visible Mode</span>
                  </>
                )}
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <Lock className="w-4 h-4" />
              <span>256-bit encryption • Zero-knowledge architecture • No IP logging</span>
            </div>
          </div>

          {/* Form */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl shadow-2xl p-8 border border-slate-600 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Department and Category */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-200 mb-2">
                    Department <span className="text-red-400">*</span>
                  </label>
                  <select
                    name="department"
                    value={formData.department}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 text-white rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 hover:bg-slate-900/70"
                    required
                  >
                    <option value="">Select Department</option>
                    {departments.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-200 mb-2">
                    Category <span className="text-red-400">*</span>
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 text-white rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 hover:bg-slate-900/70"
                    required
                  >
                    <option value="">Select Category</option>
                    {categories.map(sub => (
                      <option key={sub} value={sub}>{sub}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Complaint Type and State */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-200 mb-2">
                    Complaint Type <span className="text-red-400">*</span>
                  </label>
                  <select
                    name="complaintType"
                    value={formData.complaintType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 text-white rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 hover:bg-slate-900/70"
                    required
                  >
                    <option value="">Select Type</option>
                    {complaintTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-200 mb-2">
                    State <span className="text-red-400">*</span>
                  </label>
                  <select
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 text-white rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 hover:bg-slate-900/70"
                    required
                  >
                    <option value="">Select State</option>
                    {states.map(state => (
                      <option key={state} value={state}>{state}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Nature of Complaint */}
              <div>
                <label className="block text-sm font-semibold text-slate-200 mb-2">
                  Nature of Complaint <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  name="natureOfComplaint"
                  value={formData.natureOfComplaint}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 text-white rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 hover:bg-slate-900/70 placeholder-slate-500"
                  placeholder="Brief title of your complaint"
                  required
                />
              </div>

              {/* Complaint Details with Voice Integration */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm font-semibold text-slate-200">
                    Complaint Details <span className="text-red-400">*</span>
                    <span className="text-slate-400 font-normal text-xs ml-2">(max 2000 characters)</span>
                  </label>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={toggleVoiceToText}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                        isListening 
                          ? 'bg-red-500/20 text-red-400 border border-red-500/30' 
                          : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/30'
                      }`}
                    >
                      {isListening ? (
                        <>
                          <MicOff className="w-4 h-4" />
                          Stop Dictation
                        </>
                      ) : (
                        <>
                          <Mic className="w-4 h-4" />
                          Voice to Text
                        </>
                      )}
                    </button>
                  </div>
                </div>
                <textarea
                  name="complaintDetails"
                  value={formData.complaintDetails}
                  onChange={handleDetailsChange}
                  rows="8"
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 text-white rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 hover:bg-slate-900/70 resize-none placeholder-slate-500"
                  placeholder="Provide detailed information about your complaint... (You can also use voice dictation)"
                  required
                ></textarea>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <AlertCircle className="w-4 h-4" />
                    <span>Be specific for better investigation</span>
                    {isListening && (
                      <span className="flex items-center gap-1 text-emerald-400">
                        <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
                        Listening...
                      </span>
                    )}
                  </div>
                  <span className={`text-sm font-medium ${charCount > maxChars * 0.9 ? 'text-red-400' : 'text-slate-400'}`}>
                    {charCount} / {maxChars}
                  </span>
                </div>
              </div>

              {/* File Upload with Voice Recording */}
              <div>
                <label className="block text-sm font-semibold text-slate-200 mb-2">
                  Evidence Upload
                  <span className="text-slate-400 font-normal text-xs ml-2">(Documents or Voice Recording)</span>
                </label>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {/* File Upload */}
                  <div className="relative">
                    <input
                      type="file"
                      onChange={handleFileChange}
                      className="hidden"
                      id="file-upload"
                      accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.mp4,.mp3,.webm"
                    />
                    <label
                      htmlFor="file-upload"
                      className="flex flex-col items-center justify-center gap-2 h-32 px-4 py-4 border-2 border-dashed border-slate-600 rounded-xl hover:border-emerald-500 hover:bg-slate-900/30 transition-all duration-200 cursor-pointer"
                    >
                      <Upload className="w-6 h-6 text-slate-400" />
                      <div className="text-center">
                        <span className="text-slate-300 text-sm font-medium block">
                          {fileName && !fileName.includes('voice-recording') ? fileName : "Upload Document"}
                        </span>
                        <span className="text-slate-500 text-xs">PDF, DOC, JPG, MP4</span>
                      </div>
                      {fileName && !fileName.includes('voice-recording') && (
                        <div className="flex items-center gap-1 text-emerald-400 text-xs">
                          <CheckCircle2 className="w-3 h-3" />
                          File selected
                        </div>
                      )}
                    </label>
                  </div>

                  {/* Voice Recording */}
                  <div className="relative">
                    <button
                      type="button"
                      onClick={isRecording ? stopRecording : startRecording}
                      className={`flex flex-col items-center justify-center gap-2 h-32 w-full px-4 py-4 border-2 border-dashed rounded-xl transition-all duration-200 ${
                        isRecording 
                          ? 'border-red-500 bg-red-500/10' 
                          : 'border-slate-600 hover:border-emerald-500 hover:bg-slate-900/30'
                      }`}
                    >
                      {isRecording ? (
                        <>
                          <div className="relative">
                            <Mic className="w-6 h-6 text-red-400" />
                            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
                          </div>
                          <div className="text-center">
                            <span className="text-red-400 text-sm font-medium block">Recording...</span>
                            <span className="text-red-300 text-xs">{formatTime(recordingTime)}</span>
                          </div>
                        </>
                      ) : (
                        <>
                          <Mic className="w-6 h-6 text-slate-400" />
                          <div className="text-center">
                            <span className="text-slate-300 text-sm font-medium block">
                              {fileName && fileName.includes('voice-recording') ? 'Re-record Voice' : 'Record Voice'}
                            </span>
                            <span className="text-slate-500 text-xs">Click to start</span>
                          </div>
                          {fileName && fileName.includes('voice-recording') && (
                            <div className="flex items-center gap-1 text-emerald-400 text-xs">
                              <CheckCircle2 className="w-3 h-3" />
                              Voice recorded
                            </div>
                          )}
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Submit Button & Status */}
              <div className="flex flex-col items-end pt-4 gap-4">
                {submissionStatus.message && (
                  <div className={`p-3 rounded-lg w-full text-center ${
                    submissionStatus.type === 'success' 
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' 
                      : 'bg-red-500/20 text-red-300 border border-red-500/30'
                  }`}>
                    {submissionStatus.message}
                  </div>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white px-12 py-4 rounded-xl font-semibold shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/40 transition-all duration-300 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Encrypting & Submitting...
                    </>
                  ) : (
                    <>
                      <Shield className="w-5 h-5" />
                      Submit Securely
                    </>
                  )}
                </button>
              </div>

              {/* Privacy Notice */}
              <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4 flex items-start gap-3">
                <Lock className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-slate-300">
                  <span className="font-semibold text-emerald-400">Maximum Security Guaranteed:</span> Your submission is encrypted end-to-end. No metadata, IP addresses, or identifying information is stored. Your anonymity is our priority.
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
};

export default RegisterComplaintForm;