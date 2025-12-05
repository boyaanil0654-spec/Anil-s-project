import axios from 'axios';

const api = axios.create({ baseURL: 'http://localhost:5000/api' });

export const saveWheel = (wheel) => api.post('/wheels', wheel);
export const loadWheels = () => api.get('/wheels');
export const exportWheel = (id) => api.get(`/wheels/${id}/export`);
export const shareWheel = (id) => `http://localhost:3000/share/${id}`;

export default api;
