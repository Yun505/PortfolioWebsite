import { Link, useMatch, useResolvedPath } from "react-router-dom"
import '../App.css'
export default function NavBar() {
  return (
    <div>
      <nav className="nav">
        <Link to="/home">
          <p className="nav-item text-2xl font-semibold border rounded py-2 px-2  hover:bg-gradient-to-r hover:from-sky-300 hover:to-sky-400 hover:border-sky-300 border-yellow-50 hover:text-white">Hayun Jung</p>
        </Link>
        <ul>
          {/* <CustomLink to="/misc">
            <p className="nav-item text-2xl font-semibold border rounded py-2 px-2  hover:bg-gradient-to-r hover:from-sky-300 hover:to-sky-400 hover:border-sky-300 border-yellow-50 hover:text-white">Misc</p>
          </CustomLink> */}
          <CustomLink to="/portfolio">
            <p className="nav-item text-2xl font-semibold border rounded py-2 px-2  hover:bg-gradient-to-r hover:from-sky-300 hover:to-sky-400 hover:border-sky-300 border-yellow-50 hover:text-white">Portfolio</p>
          </CustomLink>
        </ul>
      </nav>
    </div>

  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}