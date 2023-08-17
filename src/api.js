import axios from 'axios';

const API_URL = 'https://dummyjson.com';

export const fetchUsers = (page, pageSize, search) => {
  const params = {
    page,
    limit: pageSize,
    search,
  };

  return axios.get(`${API_URL}/users`, { params });
};

export const fetchProducts = (page, pageSize, search, filter) => {
  const params = {
    page,
    limit: pageSize,
    search,
    ...filter,
  };

  return axios.get(`${API_URL}/products`, { params });
};
