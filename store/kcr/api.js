import axios from "axios"
import { KCR33_USERNAME, KCR33_PASSWORD } from "react-native-dotenv"
const kcr = axios.create({
  baseURL: "https://devstringx.com",
  auth: { username: KCR33_USERNAME, password: KCR33_PASSWORD },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
