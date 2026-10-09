import { Route, Routes, useLocation, Link } from 'react-router-dom'
import { defaultRoutes, hiddenRoutes } from '../../routes'

import Logo from "../../assets/chc-logo.png";

const routeElements = (defaultRoutes as any).concat(hiddenRoutes as any).map((route: any, index: number) => {
  return route.component ? (
    <Route
      key={index}
      path={route.path}
      element={<route.component />}
    />
  ) : null;
});

function Header(props: any) {
  const location = useLocation();
  return (<header>
    <div className="header-color-bar bg-orange w-100" />
    <div className="d-flex w-100 header-container">
      <img className="menu-image" alt={"Logo"} src={Logo} />
      <nav className="navbar navbar-expand-lg navbar-light w-100 px-lg-5 px-2 justify-content-end">
        <button className="navbar-toggler mr-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavMobile" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="d-none d-lg-flex w-100" id="navbarNav">
          <ul className="navbar-nav d-flex w-100 justify-content-around" id="navbarList">
            {props.routes.map((route: any) => {
              const isActive = location.pathname === route.path;
              return (
                <li className={`nav-item menu-item`} key={route.path}>
                  <Link 
                    className={`nav-link ${isActive ? "active" : ""}`} 
                    to={route.path}
                  >
                    {route.name}
                    {isActive && <span className="sr-only">(current)</span>}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </div>
    <nav className="navbar d-lg-none p-0">
      <div className="navbar-collapse collapse mb-4" id="navbarNavMobile">
        <ul className="navbar-nav d-flex w-100 align-items-center" id="navbarList">
          {props.routes.map((route: any) => {
            const isActive = location.pathname === route.path;
            return (
              <li className={"nav-item menu-item p-1"} key={route.path}>
                <Link 
                  className={`nav-link ${isActive ? "active" : ""}`} 
                  to={route.path}
                >
                  {route.name}
                  {isActive && <span className="sr-only">(current)</span>}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  </header>);
}

function Footer() {
  return (<footer>
    <div className="footer-container bg-orange-darkest d-flex justify-content-center align-items-center flex-wrap">
      <span className="footer-colored-text text-orange text-center fw-bold text-uppercase w-100">COOPER HERITAGE CENTER</span>
      <span className="text-white text-center w-100 align-items-center">6632 James Street  • Cooper's Rock, WV 26525</span>
      <span className="text-white text-center footer-copyright-text w-100 align-items-center">©2018 Cooper Heritage Center </span>
    </div>
  </footer>);
}

export default function Layout() {
  return (
    <div className="layout">
      <Header routes={defaultRoutes} />
      <div className="d-flex h-100 w-100">
        <main className="d-flex h-100 w-100">
          <Routes>
            {routeElements}
          </Routes>
        </main>
      </div>
      <Footer />
    </div>
  );
}
