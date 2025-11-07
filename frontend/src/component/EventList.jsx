const EventList = ({ events, onDelete }) => {
  const handleDelete = (eventId, eventTitle) => {
    if (window.confirm(`هل أنت متأكد من إلغاء الفعالية "${eventTitle}"؟`)) {
      onDelete(eventId);
    }
  };

  return (
    <div>
      <h2>الفعاليات</h2>
      {events.length === 0 ? (
        <p>لا توجد فعاليات حالياً</p>
      ) : (
        events.map(event => (
          <div key={event.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0', borderRadius: '5px' }}>
            <h3>{event.title}</h3>
            <p>📅 {event.date} | 📍 {event.location}</p>
            {event.description && <p>{event.description}</p>}
            <button
              onClick={() => handleDelete(event.id, event.title)}
              style={{
                backgroundColor: '#dc3545',
                color: 'white',
                border: 'none',
                padding: '5px 15px',
                borderRadius: '3px',
                cursor: 'pointer',
                marginTop: '10px'
              }}
            >
              ❌ إلغاء الفعالية
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default EventList;