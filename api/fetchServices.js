import axios from 'axios';

const API_URL = 'https://directus-4profi.onrender.com/items/services';

export const fetchServices = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data.data;
  } catch (error) {
    console.error('Помилка при завантаженні services:', error);
    return [];
  }
};