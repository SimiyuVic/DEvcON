import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="container mt-5">
            <div className="row d-flex align-items-center justify-content-center">
                <div className="col-md-12 text-center">
                    <h1 className="text-muted">404</h1>
                    <h2 className="text-muted">
                        Page Not Found
                    </h2>
                    <p className="text-muted">
                        Sorry the Page you are looking for Cannot be found in our system !
                    </p>
                    <Link className="btn btn-warning" to="/">
                        Visit Home Page
                    </Link>
                </div>
            </div>
        </div>
     );
}
 
export default NotFound;