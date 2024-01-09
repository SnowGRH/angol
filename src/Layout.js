import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
    <div>
    <header className="App-header">Tanuljunk angolul</header>
      <nav>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <Link className="nav-link active" to="/">Gepel</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="Rendez">Rendez</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="Valaszto">Valaszto</Link>
          </li>
        </ul>
      </nav>
      <article>
      
        <Outlet />
      </article>
      </div>
    </>
  );
};

export default Layout;
