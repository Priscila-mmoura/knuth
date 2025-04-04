import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3000";

export const api = axios.create({
  baseURL: API_URL,
  headers: { "Content-Type": "application/json" },
});

// Adiciona função para obter a árvore BST
export const getTreeData = async () => {
  const response = await api.get("/trees/bst");
  return response.data;
};

export const getLinkedListData = async () => {
  const response = await api.get("/linkedlists");
  return response.data;
};

export const getHashingData = async () => {
  const response = await api.get("/hashing");
  return response.data;
};

export const getBenchmarkData = async () => {
  const response = await api.get("/benchmark");
  return response.data;
};
export const getBTreeData = async () => {
  const response = await api.get("/trees/btree");
  return response.data;
};

