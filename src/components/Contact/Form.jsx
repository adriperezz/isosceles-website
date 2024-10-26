import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const EmailForm = ({ templateID }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    age: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.age != '') {
      setFormData({ name: '', email: '', phone: '', message: '', age: '' });
      const form = document.getElementById('form');
      form.classList.add('hidden');
    }
    // Replace with your own EmailJS service ID, template ID, and user ID
    emailjs
      .send('service_xcdzwxc', templateID, formData, 'hW1DJw7GuHtrXIstX')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setStatus('✅ Email enviado correctamente');
        setFormData({ name: '', email: '', phone: '', message: '', age: '' }); // Clear the form
        setTimeout(() => {
          setStatus('');
        }, 6000);
      })
      .catch((err) => {
        console.error('FAILED...', err);
        setStatus('❌ Ha ocurrido un error. Intente de nuevo.');
      });
  };

  return (
    <div>
      {status && <p className="mb-4 text-gray-600">{status}</p>}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg border-2 border-stone-100"
        id="form"
      >
        <h3 className="text-xl font-semibold text-blue-900 mb-4">Datos</h3>
        <div className="mb-4">
          <label className="block text-gray-600 text-sm">Nombre completo</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border border-gray-300 p-1.5 w-full rounded text-blue-950"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 text-sm">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="border border-gray-300 p-1.5 w-full rounded text-blue-950"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 text-sm">Teléfono</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="border border-gray-300 p-1.5 w-full rounded text-blue-950"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 text-sm">Mensaje</label>
          <input
            type="text"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="border border-gray-300 p-1.5 w-full rounded text-blue-950"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="hidden"
            autoComplete="off"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-900 text-white py-2 px-4 rounded hover:bg-opacity-80 hover:font-bold transition-all duration-500 w-full"
        >
          🚀 Enviar mensaje
        </button>
      </form>
    </div>
  );
};

export default EmailForm;
