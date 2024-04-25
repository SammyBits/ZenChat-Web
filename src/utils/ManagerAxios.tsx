import axios, { AxiosInstance } from "axios";

const baseURL = "http://localhost:3001/api";
const timeout = 1000;
/**
 * Axios instance for the manager
 * @type {AxiosInstance} ManagerAxios - Axios instance for the manager
 */
export const ManagerAxios: AxiosInstance = axios.create({
  baseURL: baseURL,
  timeout: timeout,
});
