import { Routes, Route } from "react-router-dom"
import './App.css'
import HomePage from "./pages/HomePage"
import AdminPage from "./pages/AdminPage"
function App() {
 

  return (
    <>
      <Routes>
            <Route path="/" element={<HomePage/>}></Route>
            <Route path="/admin" element={<AdminPage/>}></Route>
            {/* <Route path="*" element={<NotFound/>}></Route> */}
       </Routes>
    </>
  )
}

export default App
