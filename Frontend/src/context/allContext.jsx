import {createContext,useState,useReducer, useCallback} from "react"
import { postRequest,baseUrl,getRequest } from "../../utils/services";
export const AllContext = createContext();
export const AllContextProvider = ({children}) =>{
    const initialNavUser = {// lưu dữ liệu cho việc chuyển hướng user
        isLogin:false,
        isSignUp:false,
        isProfile:false
 }
 const reducerNavUser = (state,action) => {//hàm  xử lí dữ liệu cho việc chuyển hướng user
        switch (action.type){
           case "Login": 
             return {
                 ...state,
                 isLogin:true,
                 isSignUp:false,
                 isProfile:false
             }
             case "SignUp": 
             return {
                 ...state,
                 isSignUp:true,
                 isLogin:false,
                 isProfile:false
 
             }
 
             case "Profile": 
             return {
                 ...state,
                 isProfile:state.isProfile ? false : true,
                 isLogin:false,
                 isSignUp:false
               
             }
             case "closeLogin":
                 return {
                 ...state,
                isLogin:false
             }
             case "closeSignUp":
                 return {
                 ...state,
                isSignUp:false
             }
             case "closeProfile":
                 return {
                 ...state,
                isProfile:false
             }
             case "closeAll":
                 return {
                     ...state,
                    isProfile:false,
                    isLogin:false,
                    isSignUp:false,
                }
        }
 }
 const dispatchReducerNavUserMain = (info) =>{
    reducerNavUserMain({type:info})
}
const [initialNavUserMain,reducerNavUserMain] = useReducer(reducerNavUser,initialNavUser)
const navInProfile = {
    IsProfileMain:false,
    isCart:false,
    isBuyNow:false,
}
const reducerNavProfile = (state,action) => {
    switch (action.type){
        case "ProfileMain":
             return {
                ...state,
                isProfileMain:true,
                isCart:false,
                isBuyNow:false
             }
        case "Cart":
            return {
                ...state,
                isCart:true,
                isProfileMain:false,
                isBuyNow:false
            }
        case "BuyNow":
            return {
                ...state,
                isBuyNow:true,
                isProfileMain:false,
                isCart:false,
             }
        case "closeCart":
            return {
                ...state,
                isBuyNow:false,
                isProfileMain:true,
                isCart:false,
            }
            case "closeBuyNow":
                return {
                    ...state,
                    isBuyNow:false,
                    isProfileMain:false,
                    isCart:true,
                }
    }
}

const [navInProfileMain,reducerNavProfileMain] = useReducer(reducerNavProfile,navInProfile)
const dispatchReducerNavProfileMain = (info) =>{
    reducerNavProfileMain({type:info})
}
const [user,setUser] = useState(null)
//------------------register start----------//
const [infoRegister,setInfoRegister] = useState({
    name:"",
    email:"",
    password:""
})
const handleChangeInfoRegister = (info) => {
    setInfoRegister(info)
}
const [registerError,setRegisterError] = useState(null)
const [registerLoading,setRegisterLoading] = useState(false)
const Register = useCallback(async()=> {
    setRegisterLoading(true)
    const response = await postRequest(`${baseUrl}/user/register`,JSON.stringify(infoRegister))
    setRegisterLoading(false)
    if(response.error){
        setRegisterError(response)
    }
    dispatchReducerNavUserMain("closeSignUp")
    setInfoRegister({
        name:"",
        email:"",
        password:""
    })
    setUser(response)
    localStorage.setItem("token",JSON.stringify(response.token))
},[infoRegister])
//------------------register end----------//
//----------------login start------------//
const [infoLogin,setInfoLogin] = useState({
      email:"",
      password:""
})
const handleChangeInfoLogin = (info) => {
    setInfoLogin(info)
}

const [loginError,setLoginError] = useState(null)
const [loginLoading,setLoginLoading] = useState(false)
const Login = useCallback(async()=> {
      setLoginLoading(true)
      const response = await postRequest(`${baseUrl}/user/login`,JSON.stringify(infoLogin))
      setLoginLoading(false)
      if(response.error){
         setLoginError(response)
      }
      dispatchReducerNavUserMain("closeLogin")
      setInfoLogin({
        email:"",
        password:""
      })
      setUser(response)
      localStorage.setItem("token",JSON.stringify(response.token))

},[infoLogin])
const Logout = () => {
    setUser(null)
    localStorage.removeItem("token")
    dispatchReducerNavUserMain("closeProfile")
}
//----------------login end------------//
//----------------upload product start------------//
const [infoUploadProduct,setInfoUploadProduct] = useState({
      imageProduct:"",
      nameProduct:"",
      price:"",
      rating:"",
      commend:""
})
const handleChangeInfoUploadProduct = (info) => {
    setInfoUploadProduct(info)
}
const [uploadError,setUploadError] = useState(null)
const [uploadLoading,setUploadLoading] = useState(false)
const handlePressUploadProduct = useCallback(async()=> {
    setUploadLoading(true)
    setUploadError(null)
    const response = await postRequest(`${baseUrl}/upload/uploadProduct`,JSON.stringify(infoUploadProduct))
    setUploadLoading(false)
    if(response.error){
        setUploadError(response)
    }
    
},[infoUploadProduct])
//----------------upload product end------------//
    return ( 
        <AllContext.Provider value={{
            user,
            dispatchReducerNavUserMain,
            initialNavUserMain,
            dispatchReducerNavProfileMain,
            navInProfileMain,
            infoRegister,
            Register,
            registerError,
            registerLoading,
            handleChangeInfoRegister,
            infoLogin,
            handleChangeInfoLogin ,
            Login,
            loginError,
            loginLoading,
            Logout,
            infoUploadProduct,
            handleChangeInfoUploadProduct,
            handlePressUploadProduct


        }}>
            {children}
        </AllContext.Provider>
        )
}