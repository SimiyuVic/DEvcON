import { Link } from "react-router-dom";

const BlogList = ({ blogs, title}) => {

  return (
    <div className="container mt-3 mb-5">
    <h5 className="text-muted text-center mb-3">{title}</h5>
      <div className="row">
        {blogs.map((blog) => (
          <div key={blog.id} className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100 shadow-lg border-0 blog-card">
              
              <img
                src={blog.imageUrl}
                className="card-img-top"
                alt={blog.title}
                style={{ height: "220px", objectFit: "cover" }}
              />

              <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-bold">
                  {blog.title}
                </h5>

                <p className="card-text text-muted small">
                  {blog.content.substring(0,70)}...
                </p>

                <div className="mt-auto">
                  <p className="small text-secondary mb-2">
                    Published: {blog.publishedAt}
                  </p>

                  <Link className="btn btn-outline-primary btn-sm w-100" to={`blogs/${blog.id}`}>
                    Read More
                  </Link>
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;