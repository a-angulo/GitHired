import { useEffect, useState } from 'react';
import { Candidate } from '../interfaces/Candidate.interface';
import React from 'react';

const SavedCandidates = () => {
  const [saved, setSaved] = useState<Candidate[]>([]);
  const [filtered, setFiltered] = useState<Candidate[]>([]);
  const [sortBy, setSortBy] = useState('');
  const [filterByCompany, setFilterByCompany] = useState('');

  useEffect(() => {
    const data = localStorage.getItem('savedCandidates');
    if (data) {
      const parsed = JSON.parse(data);
      setSaved(parsed);
      setFiltered(parsed);
    }
  }, []);

  useEffect(() => {
    let result = [...saved];

    if (filterByCompany !== '') {
      result = result.filter(c =>
        c.company?.toLowerCase().includes(filterByCompany.toLowerCase())
      );
    }

    if (sortBy === 'name') {
      result.sort((a, b) => (a.name || '').localeCompare(b.name || ''));
    } else if (sortBy === 'location') {
      result.sort((a, b) => (a.location || '').localeCompare(b.location || ''));
    }

    setFiltered(result);
  }, [sortBy, filterByCompany, saved]);

  const handleReject = (index: number) => {
    const updatedSaved = saved.filter((_, idx) => idx !== index);
    setSaved(updatedSaved);
    localStorage.setItem('savedCandidates', JSON.stringify(updatedSaved));
  };

  if (filtered.length === 0) {
    return <h2>No candidates have been accepted yet or match your filters.</h2>;
  }

  return (
    <div>
      <h1>Potential Candidates</h1>

      {/* 🔽 Filter/Sort Controls */}
      <div style={{ marginBottom: '1rem' }}>
        <label>
          Filter by Company:{' '}
          <input
            type="text"
            placeholder="e.g. Google"
            value={filterByCompany}
            onChange={(e) => setFilterByCompany(e.target.value)}
          />
        </label>
        <label style={{ marginLeft: '1rem' }}>
          Sort by:{' '}
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="">-- None --</option>
            <option value="name">Name</option>
            <option value="location">Location</option>
          </select>
        </label>
      </div>

      <table className='table'>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Location</th>
            <th>Email</th>
            <th>Company</th>
            <th>Bio</th>
            <th>Reject</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((candidate, idx) => (
            <tr key={idx}>
              <td><img src={candidate.avatar_url} alt={candidate.login} width="50" /></td>
              <td>{candidate.name || 'No Name Provided'}</td>
              <td>{candidate.location || 'N/A'}</td>
              <td>{candidate.email || 'N/A'}</td>
              <td>{candidate.company || 'N/A'}</td>
              <td>{(candidate as any).bio || 'N/A'}</td>
              <td><button onClick={() => handleReject(idx)}>Reject</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SavedCandidates;