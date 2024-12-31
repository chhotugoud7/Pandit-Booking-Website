import React from 'react'
import { useState } from 'react';

const Login = () => {
  // const [isLogin, setIsLogin] = useState(true);
  //  const [username, setUsername] = useState('');
  //  const [password, setPassword] = useState('');
  //  const [confirmPassword, setConfirmPassword] = useState('');
  //  const [email, setEmail] = useState('');
 
  //  const handleLogin = () => {
  //    console.log('Login');
  //  };
 
  //  const handleSignup = () => {
  //    console.log('Signup');
  //  };
 

  const [state, setState] = useState('Sign UP')

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')


  const onSubmitHandler = async (event) => {
    event.preventDefault()






  }
   return (
 
    <form className='min-h-[80vh] flex items-center'>
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-x1 text-zinc-600 text-sm shadow-lg'>
        <p className='text-2xl font-semibold'>{state === 'Sign Up' ? "Create Account " : "Log In" }</p>
        <p>Please {state === 'Sign Up' ? "Sign Up" : "Log In" } to book a pooja</p>
        {
          state === "Sign Up" && 
        <div className='w-full'>
          <p>Full Name</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1 hover:border-primary' type="text" onChange={(e)=> setName(e.target.name)} value={name} required  />
        </div>
        }
        <div className='w-full'>
          <p>Email</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1 hover:border-primary' type="email" onChange={(e)=> setEmail(e.target.name)} value={email} required/>
        </div>
        <div className='w-full'>
          <p>Password</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1 hover:border-primary' type="password" onChange={(e)=> setPassword(e.target.name)} value={password} required/>
        </div>
        <button className='bg-primary text-white font-bold w-full py-2 rounded-md text-base'>{state === 'Sign Up' ? "Create Account" : "Login" }</button>
        {
          state === 'Sign Up'
          ? <p>Already have an account? <span onClick={()=> setState('Login')} className='text-primary underline cursor-pointer'>Login here</span></p>
          : <p>Create an new account? <span onClick={()=> setState('Sign Up')} className='text-primary underline cursor-pointer'>click here</span></p>
        }
      </div>


    </form>
 
    //  <div className="h-screen flex justify-center items-center bg-gray-100">
    //    <div className="bg-white shadow-2xl rounded-lg p-8 w-96">
    //      <div className="flex justify-center mb-4">
    //        <button
    //          className={`text-lg font-bold ${isLogin ? 'text-orange-500' : 'text-gray-400'} mr-4`}
    //          onClick={() => setIsLogin(true)}
    //        >
    //          Login
    //        </button>
    //        <button
    //          className={`text-lg font-bold ${isLogin ? 'text-gray-400' : 'text-orange-500'} ml-4`}
    //          onClick={() => setIsLogin(false)}
    //        >
    //          Signup
    //        </button>
    //      </div>
    //      {isLogin ? (
    //        <div>
    //          <input
    //            type="text"
    //            placeholder="Username"
    //            value={username}
    //            onChange={(e) => setUsername(e.target.value)}
    //            className="bg-gray-200 border-2 border-orange-500 rounded py-2 px-4 mb-4 w-full"
    //          />
    //          <input
    //            type="password"
    //            placeholder="Password"
    //            value={password}
    //            onChange={(e) => setPassword(e.target.value)}
    //            className="bg-gray-200 border-2 border-orange-500 rounded py-2 px-4 mb-4 w-full"
    //          />
    //          <button
    //            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded w-full"
    //            onClick={handleLogin}
    //          >
    //            Login
    //          </button>
    //        </div>
    //      ) : (
    //        <div>
    //          <input
    //            type="text"
    //            placeholder="Username"
    //            value={username}
    //            onChange={(e) => setUsername(e.target.value)}
    //            className="bg-gray-200 border-2 border-orange-500 rounded py-2 px-4 mb-4 w-full"
    //          />
    //          <input
    //            type="email"
    //            placeholder="Email"
    //            value={email}
    //            onChange={(e) => setEmail(e.target.value)}
    //            className="bg-gray-200 border-2 border-orange-500 rounded py-2 px-4 mb-4 w-full"
    //          />
    //          <input
    //            type="password"
    //            placeholder="Password"
    //            value={password}
    //            onChange={(e) => setPassword(e.target.value)}
    //            className="bg-gray-200 border-2 border-orange-500 rounded py-2 px-4 mb-4 w-full"
    //          />
    //          <input
    //            type="password"
    //            placeholder="Confirm Password"
    //            value={confirmPassword}
    //            onChange={(e) => setConfirmPassword(e.target.value)}
    //            className="bg-gray-200 border-2 border-orange-500 rounded py-2 px-4 mb-4 w-full"
    //          />
    //          <button
    //            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded w-full"
    //            onClick={handleSignup}
    //          >
    //            Signup
    //          </button>
    //        </div>
    //      )}
    //    </div>
    //  </div>
 
     
   )
}

export default Login