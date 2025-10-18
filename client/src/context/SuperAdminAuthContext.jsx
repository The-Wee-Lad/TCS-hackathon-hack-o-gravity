import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const SuperAdminAuthContext = createContext();

export const SuperAdminAuthProvider = ({ children }) => {
  const [superAdmin, setSuperAdmin] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedSuperAdmin = localStorage.getItem('superAdmin');

    if (storedSuperAdmin) {
      setSuperAdmin(JSON.parse(storedSuperAdmin));
      setLoading(false);
    } else {
      verifySuperAdmin();
    }
  }, []);

  const verifySuperAdmin = async () => {
    try {
      const { data } = await axios.get('/api/superadmin/me', { withCredentials: true }); // replace with your API endpoint
      setSuperAdmin(data);
      localStorage.setItem('superAdmin', JSON.stringify(data));
    } catch (error) {
      console.log('SuperAdmin not logged in', error);
      setSuperAdmin(null);
      localStorage.removeItem('superAdmin');
    } finally {
      setLoading(false);
    }
  };

  const login = async (credentials) => {
    try {
      const { data } = await axios.post('/api/superadmin/login', credentials, { withCredentials: true }); // replace with your login endpoint
      setSuperAdmin(data);
      localStorage.setItem('superAdmin', JSON.stringify(data));
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await axios.post('/api/superadmin/logout', {}, { withCredentials: true });
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      setSuperAdmin(null);
      localStorage.removeItem('superAdmin');
    }
  };

  return (
    <SuperAdminAuthContext.Provider value={{ superAdmin, login, logout, loading }}>
      {children}
    </SuperAdminAuthContext.Provider>
  );
};

export const useSuperAdminAuth = () => useContext(SuperAdminAuthContext);
