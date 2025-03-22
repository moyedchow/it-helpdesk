import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Adjust the URL as needed

// Function to get all assets
export const getAssets = async () => {
    const response = await axios.get(`${API_URL}/assets`);
    return response.data;
};

// Function to get a single asset by ID
export const getAssetById = async (id: string) => {
    const response = await axios.get(`${API_URL}/assets/${id}`);
    return response.data;
};

// Function to create a new asset
export const createAsset = async (assetData: any) => {
    const response = await axios.post(`${API_URL}/assets`, assetData);
    return response.data;
};

// Function to update an existing asset
export const updateAsset = async (id: string, assetData: any) => {
    const response = await axios.put(`${API_URL}/assets/${id}`, assetData);
    return response.data;
};

// Function to delete an asset
export const deleteAsset = async (id: string) => {
    const response = await axios.delete(`${API_URL}/assets/${id}`);
    return response.data;
};

// Function to get all users
export const getUsers = async () => {
    const response = await axios.get(`${API_URL}/users`);
    return response.data;
};

// Function to get a single user by ID
export const getUserById = async (id: string) => {
    const response = await axios.get(`${API_URL}/users/${id}`);
    return response.data;
};

// Function to create a new user
export const createUser = async (userData: any) => {
    const response = await axios.post(`${API_URL}/users`, userData);
    return response.data;
};

// Function to update an existing user
export const updateUser = async (id: string, userData: any) => {
    const response = await axios.put(`${API_URL}/users/${id}`, userData);
    return response.data;
};

// Function to delete a user
export const deleteUser = async (id: string) => {
    const response = await axios.delete(`${API_URL}/users/${id}`);
    return response.data;
};

// Function to log in a user
export const loginUser = async (credentials: any) => {
    const response = await axios.post(`${API_URL}/auth/login`, credentials);
    return response.data;
};

// Function to register a new user
export const registerUser = async (userData: any) => {
    const response = await axios.post(`${API_URL}/auth/register`, userData);
    return response.data;
};