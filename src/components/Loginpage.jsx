import { useState } from 'react';

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    console.log('Login');
  };

  const handleSignup = () => {
    console.log('Signup');
  };

  return (


    <div className="h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white shadow-2xl rounded-lg p-8 w-96">
        <div className="flex justify-center mb-4">
          <button
            className={`text-lg font-bold ${isLogin ? 'text-blue-500' : 'text-gray-400'} mr-4`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={`text-lg font-bold ${isLogin ? 'text-gray-400' : 'text-blue-500'} ml-4`}
            onClick={() => setIsLogin(false)}
          >
            Signup
          </button>
        </div>
        {isLogin ? (
          <div>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="bg-gray-200 border-2 border-blue-500 rounded py-2 px-4 mb-4 w-full"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-gray-200 border-2 border-blue-500 rounded py-2 px-4 mb-4 w-full"
            />
            <button
              className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded w-full"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
        ) : (
          <div>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="bg-gray-200 border-2 border-blue-500 rounded py-2 px-4 mb-4 w-full"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-200 border-2 border-blue-500 rounded py-2 px-4 mb-4 w-full"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-gray-200 border-2 border-blue-500 rounded py-2 px-4 mb-4 w-full"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="bg-gray-200 border-2 border-blue-500 rounded py-2 px-4 mb-4 w-full"
            />
            <button
              className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded w-full"
              onClick={handleSignup}
            >
              Signup
            </button>
          </div>
        )}
      </div>
    </div>

    
  );

};

export default LoginPage;



