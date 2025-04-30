import { useEffect, useState } from "react";
import { Candidate } from "../interfaces/Candidate.interface";
import { searchGithubUser, searchGithub } from "../api/API";
import '../index.css'; // Import the CSS file


const CandidateSearch = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [candidate, setCandidate] = useState<Candidate | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch list of candidate logins
  useEffect(() => {
    const fetchCandidates = async () => {
      setLoading(true);
      setError(null); // Reset error state
      try {
        const result = await searchGithub();
        console.log("Fetched candidate list:", result);
        const users = Array.isArray(result) ? result : result.items;
        setCandidates(users);
      } catch (error) {
        console.error("Error fetching candidates:", error);
        setError("Failed to fetch candidates. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchCandidates();
  }, []);

  // Fetch full candidate data from login
  useEffect(() => {
    if (candidates.length > 0 && currentIndex >= 0 && currentIndex < candidates.length) {
      fetchCandidate(candidates[currentIndex]);
    }
  }, [candidates, currentIndex]);

  const fetchCandidate = async (candidate: Candidate) => {
    setLoading(true);
    try {
      const result = await searchGithubUser(candidate.login);
      console.log("Fetched detailed candidate:", result);
      setCandidate(result);
    } catch (error) {
      console.error("Error fetching candidate:", error);
      setError("Failed to fetch candidate details. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleAccept = () => {
    const saved: Candidate[] = JSON.parse(localStorage.getItem("savedCandidates") || "[]");
    if (!saved) {
      localStorage.setItem("savedCandidates", JSON.stringify([]));
    }

    if (candidate && !saved.find((c) => c.login === candidate.login)) {
      localStorage.setItem("savedCandidates", JSON.stringify([...saved, candidate]));
    }

    handleNext();
  };

  const handleNext = () => {
    if (currentIndex + 1 < candidates.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(-1); // No more candidates
    }
  };

  if (loading) return (<h2>Loading...</h2>);
  if (error) return <h2>{error}</h2>;
  if (currentIndex === -1 || candidates.length === 0) return <h2>No more candidates to review</h2>;

  return (
    <div className="container">
      <h1>Candidate Search</h1>
      <div className="card">

        <img
          src={candidate?.avatar_url}
          alt={candidate?.login}
        />
        <div className="card-body">
          <h2>{candidate?.name}({candidate?.login})</h2>
          <p>Location: {candidate?.location || "N/A"}</p>
          <p>Email: <a href={candidate?.html_url} target="_blank" rel="noopener noreferrer">{candidate?.html_url}</a></p>
          <p>Company: {candidate?.company || "N/A"}</p>
          <p>Bio: {candidate?.bio || "N/A"}</p>
        </div>

        <div className="card-actions">
          <button onClick={handleNext}>-</button>
          <button onClick={handleAccept}>+</button>
        </div>
      </div>
    </div>
  );
};

export default CandidateSearch;