import axios from "axios";
import { useState } from "react";

const Login = () => {
  const [form, setForm] = useState({ mobile: "", password: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const login = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/user/login", form);
      alert(res.data.message);
      console.log(res.data.user);
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input name="mobile" placeholder="Mobile" onChange={handleChange} />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} />
      <button onClick={login}>Login</button>
    </div>
  );
};

export default Login;
