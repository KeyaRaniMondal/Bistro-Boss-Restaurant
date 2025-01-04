import { useContext } from "react"
import { AuthContext } from "../providers/AuthProvider"

const useAuth=()=>{
    const Auth=useContext(AuthContext)
    return Auth
}
export default useAuth