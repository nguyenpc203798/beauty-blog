import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

class HttpClient {
  private instance: AxiosInstance;
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config);
  }
  get axiosIntance(): AxiosInstance {
    return this.instance;
  }
}

// Get baseURL from environment variable or use default
// Vite environment variables must be prefixed with VITE_
const baseURL = import.meta.env.VITE_SERVER_DOMAIN || "http://localhost:8080";

// HTTP client for Blog API
const http = new HttpClient({
  baseURL: baseURL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
}).axiosIntance;

export default http;
