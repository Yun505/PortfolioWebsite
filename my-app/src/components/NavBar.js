import { Link, useMatch, useResolvedPath } from "react-router-dom";
import '../App.css';

export default function NavBar() {
  return (
    <div>
      <nav className="nav flex items-center justify-center space-x-2">
        <CustomLink to="/home">
          <p className="nav-item text-2xl font-semibold py-2 px-4 tab-style hover:bg-gradient-to-r hover:from-sky-300 hover:to-sky-400 hover:border-sky-300 border-yellow-50 hover:text-white">Hayun Jung</p>
        </CustomLink>
        <CustomLink to="/portfolio">
          <p className="nav-item text-2xl font-semibold py-2 px-4 tab-style hover:bg-gradient-to-r hover:from-sky-300 hover:to-sky-400 hover:border-sky-300 border-yellow-50 hover:text-white">Portfolio</p>
        </CustomLink>
      </nav>
    </div>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <div className={isActive ? "tab-active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </div>
  );
}
