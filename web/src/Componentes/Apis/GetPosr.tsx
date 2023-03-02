import axios from "axios";

const API = process.env.REACT_APP_API  || "http://localhost:8000/"

export const getPostById = async () => {
 const {data} = await axios.get(`${API}api/usuarios`)
}