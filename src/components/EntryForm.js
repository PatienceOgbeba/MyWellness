import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const EntryForm = ({ onAdd }) => {
  const [form, setForm] = useState({
    systolic: '',
    diastolic: '',
    sugar: '',
    note: '',
    date: new Date().toISOString().slice(0, 16),
  });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.systolic || !form.diastolic || !form.sugar) return;
    onAdd({ ...form, id: uuidv4() });
    setForm({ systolic: '', diastolic: '', sugar: '', note: '', date: new Date().toISOString().slice(0, 16) });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="date" type="datetime-local" value={form.date} onChange={handleChange} />
      <input name="systolic" placeholder="Systolic BP" value={form.systolic} onChange={handleChange} required />
      <input name="diastolic" placeholder="Diastolic BP" value={form.diastolic} onChange={handleChange} required />
      <input name="sugar" placeholder="Sugar Level (mg/dL)" value={form.sugar} onChange={handleChange} required />
      <input name="note" placeholder="Note (optional)" value={form.note} onChange={handleChange} />
      <button type="submit">Add Entry</button>
    </form>
  );
};

export default EntryForm;
