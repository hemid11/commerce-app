import axios from 'axios';
import { endpoints } from './constants';
export const getAllUsers = () => {
  return axios.get(endpoints.users);
};

export const createUser = (userData) => {
  return axios.post(endpoints.users, userData);
};

export const updateUser = (userId, userData) => {
  return axios.put(`${endpoints.users}/${userId}`, userData);
};

export const deleteUser = (userId) => {
  return axios.delete(`${endpoints.users}/${userId}`);
};
