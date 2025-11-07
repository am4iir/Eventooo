import EventList from './component/EventList';
import EventForm from './component/EventForm';
import { useState, useEffect } from 'react';

function App() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch events from backend on component mount
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const res = await fetch('http://localhost:5000/api/events');
        if (!res.ok) {
          throw new Error('فشل في جلب البيانات');
        }
        const data = await res.json();
        setEvents(data);
        setError(null);
      } catch (error) {
        console.error('Error fetching events:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  const handleAddEvent = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  const handleDeleteEvent = async (eventId) => {
    try {
      const res = await fetch(`http://localhost:5000/api/events/${eventId}`, {
        method: 'DELETE'
      });

      if (!res.ok) {
        throw new Error('فشل في حذف الفعالية');
      }

      // Remove event from state
      setEvents(events.filter(event => event.id !== eventId));
    } catch (error) {
      console.error('Error deleting event:', error);
      alert('حدث خطأ أثناء حذف الفعالية');
    }
  };

  if (loading) {
    return <div><h1>منصة Eventoo</h1><p>جاري التحميل...</p></div>;
  }

  if (error) {
    return <div><h1>منصة Eventoo</h1><p style={{color: 'red'}}>خطأ: {error}</p></div>;
  }

  return (
    <div>
      <h1>منصة Eventoo</h1>
      <EventForm onAdd={handleAddEvent} />
      <EventList events={events} onDelete={handleDeleteEvent} />
    </div>
  );
}

export default App;