import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    gender: '',
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
    // Handle form submission logic (e.g., send data to server)
    console.log('Form submitted:', formData);

    // Navigate to a different page after successful submission (e.g., a dashboard)
    navigate('/');
  };

  return (
    <div className="max-w-md mx-auto my-8 p-6 border-2 shadow-xl rounded-lg bg-slate-50 text-darkBlue">
      <h2 className="text-3xl font-bold mb-4">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block mb-1 font-bold ">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-4 py-2 border shadow-md rounded-lg border-gray-300"
              required
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block mb-1 font-bold ">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-4 py-2 border shadow-md rounded-lg border-gray-300"
              required
            />
          </div>
          <div>
            <label htmlFor="age" className="block mb-1 font-bold ">
              Age
            </label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="w-full px-4 py-2 border shadow-md rounded-lg border-gray-300"
              required
            />
          </div>
          <div>
            <label htmlFor="gender" className="block mb-1 font-bold ">
              Gender
            </label>
            <input
              type="text"
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full px-4 py-2 border shadow-md rounded-lg border-gray-300"
              required
            />
          </div>
        </div>
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
            className="w-full px-4 py-2 border shadow-md rounded-lg border-gray-300"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-1 font-bold">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border shadow-md rounded-lg border-gray-300"
            required
          />
        </div>
        <button type="submit" className="bg-lightBlue hover:opacity-80 shadow-md font-bold text-white py-2 px-4 rounded-full">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;