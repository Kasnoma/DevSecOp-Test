import axios from "axios";
import Manager from "../lib/encryption";

const manager = new Manager(process.env.KEY, process.env.VECTOR);

const baseURL = process.env.BASE_URL;

const token = localStorage.getItem("comx_token");

const client = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    Authorization: `Bearer ${token}`,
  },
});

export const requestHandle = async (
  method: string,
  url: string,
  data?: any
) => {
  const form_data = manager.encrypt(data);
  const response = await client.request({
    method,
    url,
    data: form_data,
  });

  const data_decrypt = manager.decrypt(response.data);

  return data_decrypt;
};

