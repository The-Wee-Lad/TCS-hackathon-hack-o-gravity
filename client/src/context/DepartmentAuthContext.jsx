import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const DepartmentAuthContext = createContext();

export const DepartmentAuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const storedAdmin = localStorage.getItem('departmentAdmin');

    if (storedAdmin) {
      setAdmin(JSON.parse(storedAdmin));
      setLoading(false);
    } else {
      verifyAdmin();
    }
  }, []);

  const verifyAdmin = async () => {
    try {
      const { data } = await axios.get('/api/department/me', { withCredentials: true }); // replace with your API endpoint
      setAdmin(data);
      localStorage.setItem('departmentAdmin', JSON.stringify(data));
    } catch (error) {
      console.log('Department admin not logged in', error);
      setAdmin(null);
      localStorage.removeItem('departmentAdmin');
    } finally {
      setLoading(false);
    }
  };

  const login = async (credentials) => {
    try {
      const { data } = await axios.post('/api/department/login', credentials, { withCredentials: true }); // replace with your login API
      setAdmin(data);
      localStorage.setItem('departmentAdmin', JSON.stringify(data));
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await axios.post('/api/department/logout', {}, { withCredentials: true }); // replace with your logout API
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      setAdmin(null);
      localStorage.removeItem('departmentAdmin');
    }
  };

  return (
    <DepartmentAuthContext.Provider value={{ admin, login, logout, loading }}>
      {children}
    </DepartmentAuthContext.Provider>
  );
};

export const useDepartmentAuth = () => useContext(DepartmentAuthContext);
