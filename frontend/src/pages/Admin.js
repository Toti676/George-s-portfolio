import React, { useState, useEffect } from 'react';
import '../styles/Admin.css';

const Admin = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await fetch('/api/contacts');
      if (response.ok) {
        const data = await response.json();
        setContacts(data);
      } else {
        setError('Failed to fetch contacts');
      }
    } catch (err) {
      setError('Network error');
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (contactId, newStatus) => {
    try {
      const response = await fetch(`/api/contacts/${contactId}/status`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: newStatus })
      });

      if (response.ok) {
        // Update local state
        setContacts(prev => prev.map(contact => 
          contact.id === contactId 
            ? { ...contact, status: newStatus }
            : contact
        ));
      }
    } catch (err) {
      console.error('Error updating status:', err);
    }
  };

  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleString();
  };

  if (loading) return <div className="admin-loading">Loading contacts...</div>;
  if (error) return <div className="admin-error">Error: {error}</div>;

  return (
    <div className="admin">
      <div className="container">
        <h1>Contact Messages</h1>
        <p>Manage incoming contact form submissions</p>
        
        {contacts.length === 0 ? (
          <div className="no-contacts">
            <p>No contact messages yet.</p>
          </div>
        ) : (
          <div className="contacts-list">
            {contacts.map((contact) => (
              <div key={contact.id} className={`contact-card ${contact.status}`}>
                <div className="contact-header">
                  <h3>{contact.name}</h3>
                  <span className={`status-badge ${contact.status}`}>
                    {contact.status}
                  </span>
                </div>
                
                <div className="contact-info">
                  <p><strong>Email:</strong> {contact.email}</p>
                  <p><strong>Date:</strong> {formatDate(contact.timestamp)}</p>
                  <p><strong>Message:</strong></p>
                  <div className="message-content">{contact.message}</div>
                </div>
                
                <div className="contact-actions">
                  {contact.status === 'new' && (
                    <button 
                      onClick={() => updateStatus(contact.id, 'read')}
                      className="btn-mark-read"
                    >
                      Mark as Read
                    </button>
                  )}
                  {contact.status === 'read' && (
                    <button 
                      onClick={() => updateStatus(contact.id, 'replied')}
                      className="btn-mark-replied"
                    >
                      Mark as Replied
                    </button>
                  )}
                  <button 
                    onClick={() => updateStatus(contact.id, 'archived')}
                    className="btn-archive"
                  >
                    Archive
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
