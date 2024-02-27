import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ContactUs = () => {
  const navigate = useNavigate();

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
    };

    let newErrors = {};

    if (!formData.name) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.message) {
      newErrors.message = 'Message is required';
    }

    if (Object.keys(newErrors).length === 0) {
      // Handle form submission logic (e.g., send data to server)
      console.log('Form submitted:', formData);

      // Navigate to a different page after successful submission (e.g., a thank you page)
      navigate('/app');
    }

    setErrors(newErrors);
  };

  return (
    <div className="max-w-md mx-auto my-8 p-6 border-2 bg-slate-50 rounded-lg shadow-xl text-darkBlue">
      <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-1 font-bold ">
            Name
          </label>
          <input
            type="text"
            id="name"
            ref={nameRef}
            className={`w-full px-4 py-2 border shadow-md rounded-lg border-gray-300 ${errors.name && 'border-red-500'}`}
          />
          {errors.name && <p className="text-red-500 mt-1">{errors.name}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1 font-bold ">
            Email
          </label>
          <input
            type="email"
            id="email"
            ref={emailRef}
            className={`w-full px-4 py-2 border shadow-md rounded-lg border-gray-300 ${errors.email && 'border-red-500'}`}
          />
          {errors.email && <p className="text-red-500 mt-1">{errors.email}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-1 font-bold ">
            Message
          </label>
          <textarea
            id="message"
            ref={messageRef}
            className={`w-full px-4 py-2 border shadow-md rounded-lg border-gray-300 ${errors.message && 'border-red-500'}`}
          />
          {errors.message && <p className="text-red-500 mt-1">{errors.message}</p>}
        </div>
        <button type="submit" className="bg-lightBlue hover:opacity-80 shadow-md font-bold text-white py-2 px-4 rounded-full">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
