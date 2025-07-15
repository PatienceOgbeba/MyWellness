import React from 'react';

const EntryList = ({ entries, onDelete }) => (
  <div>
    <h2>History</h2>
    {entries.length === 0 ? (
      <p>No entries yet</p>
    ) : (
      <ul>
        {entries.map(entry => (
          <li key={entry.id}>
            <strong>{new Date(entry.date).toLocaleString()}</strong><br />
            BP: {entry.systolic}/{entry.diastolic} mmHg | Sugar: {entry.sugar} mg/dL<br />
            {entry.note && <em>Note: {entry.note}</em>}<br />
            <button onClick={() => onDelete(entry.id)}>Delete</button>
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default EntryList;
