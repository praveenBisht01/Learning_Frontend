import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="nav-wrapper">
      <nav className="navbar">

        <div className="logo">
          <span className="dot"></span>
          <h2>JobBoard</h2>
        </div>

        <ul className="nav-links">
          <li><a className="active" href="/">Home</a></li>
          <li><a href="/">Jobs</a></li>
          <li><a href="/">Companies</a></li>
          <li><a href="/">Employees</a></li>
          <li><a href="/">About</a></li>
        </ul>

        <div className="nav-btns">
          <button className="login">Login</button>
          <button className="signup">Post Job</button>
        </div>

      </nav>
    </header>
  );
};

export default Navbar;