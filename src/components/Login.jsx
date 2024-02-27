import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let valid = true;
    const newErrors = {};

    if (!formData.email) {
      valid = false;
      newErrors.email = 'Email is required';
    }

    if (!formData.password) {
      valid = false;
      newErrors.password = 'Password is required';
    }

    if (valid) {
      console.log('Form submitted:', formData);
      navigate('/app');
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="max-w-md mx-auto my-8 p-6 border-2 shadow-xl bg-slate-50 rounded-lg text-darkBlue">
      <h2 className="text-3xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1 font-bold ">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-2 border shadow-md rounded-lg ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.email && <p className="text-red-500 mt-1">{errors.email}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-1 font-bold ">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={`w-full px-4 py-2 border shadow-md rounded-lg ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.password && <p className="text-red-500 mt-1">{errors.password}</p>}
        </div>
        <button type="submit" className="bg-lightBlue hover:opacity-80 shadow-md font-bold text-white py-2 px-4 rounded-full">
          Login
        </button>
        <Link to="/signup">
        <button type="" className="bg-lightBlue hover:opacity-80 shadow-md font-bold text-white py-2 px-4 rounded-full ml-6">
          Sign Up
        </button></Link>
      </form>
    </div>
  );
};

export default Login;
