import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password,
        }
      );

      localStorage.setItem(
        "token",
        response.data.token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );

      navigate("/");
    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Login Failed"
      );
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center">
      <form
        onSubmit={handleLogin}
        className="bg-slate-800 p-8 rounded-xl w-96"
      >
        <h2 className="text-white text-3xl font-bold mb-6">
          Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 rounded bg-slate-700 text-white"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 rounded bg-slate-700 text-white"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button
          className="w-full bg-blue-600 p-3 rounded"
        >
          Login
        </button>

        <p className="text-white mt-4">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-blue-400"
          >
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;