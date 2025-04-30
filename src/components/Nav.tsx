import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) =>
    currentPath === path ? 'text-blue-600 font-bold underline' : 'text-black';

  return (
    <nav className="p-4 border-b border-gray-300">
      <div className="flex gap-4 justify-center">
        <Link to="/" className={isActive('/')}>
          Home
        </Link>
        <Link to="/CandidateSearch" className={isActive('/CandidateSearch')}>
          Candidate Search
        </Link>
        <Link to="/SavedCandidates" className={isActive('/SavedCandidates')}>
          Saved Candidates
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
