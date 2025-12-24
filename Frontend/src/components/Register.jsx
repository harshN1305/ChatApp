import axios from "axios";
import { useState } from "react";

const Register = () => {
  const [form, setForm] = useState({
    username: "",
    mobile: "",
    password: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const register = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/user/register", form);
      alert(res.data.message);
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <input name="username" placeholder="Username" onChange={handleChange} />
      <input name="mobile" placeholder="Mobile" onChange={handleChange} />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} />
      <button onClick={register}>Register</button>
    </div>
  );
};

export default Register;
