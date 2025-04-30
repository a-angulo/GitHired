import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) =>
    currentPath === path ? 'nav-link active' : 'nav-link';

  return (
    <nav className="nav">
         <div className="nav-item">
        <Link to="/" className={isActive('/')}>
          Candidate Search
        </Link>
        </div>
        <div className="nav-item">
        <Link to="/SavedCandidates" className={isActive('/SavedCandidates')}>
          Saved Candidates
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
