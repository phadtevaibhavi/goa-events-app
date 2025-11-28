import React from 'react';

export default function Registration() {
  return (
    <main className="page page-registration">
      <div className="form-container">
        <h2>Event Registration</h2>
        <form className="reg-form" onSubmit={(e) => { e.preventDefault(); alert('Registration submitted! (demo)'); }}>
          <label>Full Name</label>
          <input type="text" name="name" required />

          <label>Email Address</label>
          <input type="email" name="email" required />

          <label>Phone Number</label>
          <input type="tel" name="phone" required />

          <label>Select Event Category</label>
          <select name="category" required>
            <option value="">Choose a category</option>
            <option>Music Festivals</option>
            <option>Cultural Events</option>
            <option>Nightlife</option>
            <option>Food & Drink</option>
            <option>Outdoor Activities</option>
          </select>

          <label>Additional Notes</label>
          <textarea name="notes" rows="4" />

          <button type="submit" className="btn-primary">Register Now</button>
        </form>
      </div>
    </main>
  );
}
