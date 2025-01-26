import { api } from "./Api"; // Import the api instance

export const signup = async (userData) => {
  try {
    const response = await api.post("/user/create", userData); // Ensure endpoint is correct
    return response.data;
  } catch (error) {
    console.error("Error during signup:", error);
    throw error;
  }
};

export const login = async (credentials) => {
  try {
    const response = await api.post("/user/login", credentials); // Changed to POST
    return response.data;
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }
};

export const logout = async () => {
  try {
    const response = await api.post("/user/logout"); // Ensure endpoint is correct
    localStorage.clear(); // Clear local storage
    return response.data;
  } catch (error) {
    console.error("Error during logout:", error);
    throw error;
  }
};

export const createShop = async (shopData) => {
  try {
    const response = await api.post("/shop/create", shopData);
    return response.data;
  } catch (error) {
    console.error("Error during shop creation:", error);
    throw error;
  }
};

export const getShop = async () => {
  try {
    const response = await api.get(`/shop`);
    return response.data;
  } catch (error) {
    console.error("Error fetching shop details:", error);
    throw error;
  }
};

export const getShopDetails = async (shopId) => {
  try {
    const response = await api.get(`/shop/${shopId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching shop details by ID:", error);
    throw error;
  }
};

export const updateShop = async (shopId, shopData) => {
  try {
    const response = await api.put(`/shop/update/${shopId}`, shopData);
    return response.data;
  } catch (error) {
    console.error("Error updating shop details:", error);
    throw error;
  }
};

export const deleteShop = async (shopId) => {
  try {
    const response = await api.delete(`/shop/delete/${shopId}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting shop:", error);
    throw error;
  }
};
