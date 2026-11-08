
import { Outlet, Link, NavLink } from 'react-router-dom'
import Footer from './Footer.jsx'

function Layout() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Galeria Podróży
          </Link>

          <div className="navbar-nav">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `nav-link ${isActive ? 'active' : ''}`
              }
            >
              Galeria
            </NavLink>

            <NavLink
              to="/dodaj"
              className={({ isActive }) =>
                `nav-link ${isActive ? 'active' : ''}`
              }
            >
              Dodaj zdjęcie
            </NavLink>
          </div>
        </div>
      </nav>

      <Outlet />

      <Footer />
    </>
  )
}

export default Layout
