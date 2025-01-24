import React, { useContext } from 'react'
import Login from './pages/Login.jsx'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/ReactToastify.css'
import { AdminContext } from './context/adminContext.jsx';


const App = () => {

  const {aToken} = useContext(AdminContext)

  return aToken ? (
    <div >

      <ToastContainer/>

    </div>
  ) : (
    <>
      <Login />
      <ToastContainer/>
    </>
  )
}

export default App