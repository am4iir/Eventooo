// src/components/EventList.jsx
import { useEffect, useState } from 'react';

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/events');
        if (!response.ok) {
          throw new Error('فشل في تحميل الفعاليات');
        }
        const data = await response.json();
        setEvents(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) return <p>جارٍ تحميل الفعاليات...</p>;
  if (error) return <p style={{ color: 'red' }}>خطأ: {error}</p>;

  return (
    <div>
      <h2>الفعاليات الجامعية</h2>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <strong>{event.title}</strong> — {event.date} في {event.location}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;