import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:4000" });

export const getPlaces = () => api.get("/api/places").then((res) => res.data);
