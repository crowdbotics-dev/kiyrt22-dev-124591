import axios from "axios"
import { NEW657_USERNAME, NEW657_PASSWORD } from "react-native-dotenv"
const new = axios.create({
  baseURL: "https://crowdbotics.com",
  auth: { username: NEW657_USERNAME, password: NEW657_PASSWORD },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
