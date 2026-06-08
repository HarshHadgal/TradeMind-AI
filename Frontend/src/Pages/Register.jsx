import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          name,
          email,
          password,
        }
      );

      alert("Registration Successful");

      navigate("/login");

    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Registration Failed"
      );
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center">
      <form
        onSubmit={handleRegister}
        className="bg-slate-800 p-8 rounded-xl w-96"
      >
        <h2 className="text-white text-3xl font-bold mb-6">
          Register
        </h2>

        <input
          type="text"
          placeholder="Name"
          className="w-full p-3 mb-4 rounded bg-slate-700 text-white"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />

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
          className="w-full bg-green-600 p-3 rounded"
        >
          Register
        </button>

        <p className="text-white mt-4">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-400"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Register;