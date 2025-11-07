import { useState } from 'react';

const EventForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    location: '',
    description: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/events', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!res.ok) {
        throw new Error('فشل في إضافة الفعالية');
      }

      const newEvent = await res.json();
      onAdd(newEvent);
      setFormData({ title: '', date: '', location: '', description: '' });
    } catch (error) {
      console.error('Error adding event:', error);
      alert('حدث خطأ أثناء إضافة الفعالية');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" value={formData.title} onChange={handleChange} placeholder="العنوان" required />
      <input name="date" type="date" value={formData.date} onChange={handleChange} required />
      <input name="location" value={formData.location} onChange={handleChange} placeholder="الموقع" required />
      <textarea name="description" value={formData.description} onChange={handleChange} placeholder="الوصف" />
      <button type="submit">إضافة فعالية</button>
    </form>
  );
};

export default EventForm;