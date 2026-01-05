import React from 'react'
import { useEffect } from 'react';

import axiosInstance from '../../axiosinstance.js';

const Dashboad = () => {

  useEffect(() => {
    const fetchProtectedData = async () => {
      try {
        const response = await axiosInstance.get('/protected-view/')
        console.log('Protected data:', response.data);
      } catch (error) {
        console.error('Error fetching protected data:', error);
      }
    };

    fetchProtectedData();
  }, []);

  return (
    <div className='dashboard text-light'> Dashboard content goes here.</div>
  )
}
export default Dashboad
