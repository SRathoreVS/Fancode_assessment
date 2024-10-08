import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const getTodosByUserId = async (userId) => {
  const response = await axios.get(`${BASE_URL}/todos?userId=${userId}`);
  return response.data;
};
