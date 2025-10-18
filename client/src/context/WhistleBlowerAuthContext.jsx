import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const WhistleblowerAuthContext = createContext();

export const WhistleblowerAuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // optional for showing loader while checking

  useEffect(() => {
    const storedUser = localStorage.getItem('whistleblowerUser');

    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setLoading(false);
    } else {
      verifyUser();
    }
  }, []);

  const verifyUser = async () => {
    try {
      const { data } = await axios.get('/api/whistleblower/me', { withCredentials: true }); // replace with your API endpoint
      setUser(data);
      localStorage.setItem('whistleblowerUser', JSON.stringify(data));
    } catch (error) {
      console.log('User not logged in', error);
      setUser(null);
      localStorage.removeItem('whistleblowerUser');
    } finally {
      setLoading(false);
    }
  };

  const login = async (credentials) => {
    try {
      const { data } = await axios.post('/api/whistleblower/login', credentials, { withCredentials: true }); // replace with your login API
      setUser(data);
      localStorage.setItem('whistleblowerUser', JSON.stringify(data));
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await axios.post('/api/whistleblower/logout', {}, { withCredentials: true }); // replace with your logout API
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      setUser(null);
      localStorage.removeItem('whistleblowerUser');
    }
  };

  return (
    <WhistleblowerAuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </WhistleblowerAuthContext.Provider>
  );
};

export const useWhistleblowerAuth = () => useContext(WhistleblowerAuthContext);
