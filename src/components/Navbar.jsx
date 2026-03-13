import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold fs-4" to="/">
          <i className="bi bi-lightning-charge-fill me-1"></i> DEvcON
        </Link>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon rounded"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav mx-auto">
            <Link
              className="nav-link active position-relative"
              to="/"
            >
              <i className="bi bi-house-door-fill me-1"></i> Home
              <span className="nav-underline"></span>
            </Link>
            <Link
              className="nav-link position-relative"
              to="/AddBlog"
            >
              <i className="bi bi-plus-circle-fill me-1"></i> Add Blog
              <span className="nav-underline"></span>
            </Link>
            <Link
              className="nav-link position-relative"
              to="/BlogTable"
            >
              <i className="bi bi-journal-text me-1"></i> Blogs List
              <span className="nav-underline"></span>
            </Link>
          </div>
        </div>
      </div>

      {/* Inline CSS for hover underline */}
      <style jsx>{`
        .nav-link {
          font-weight: 500;
          transition: color 0.3s ease;
        }
        .nav-link:hover {
          color: #ffc107 !important; /* Amber highlight on hover */
        }
        .nav-underline {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0%;
          height: 2px;
          background-color: #ffc107;
          transition: width 0.3s ease;
        }
        .nav-link:hover .nav-underline {
          width: 100%;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;