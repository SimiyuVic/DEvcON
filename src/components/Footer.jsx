const Footer = () => {
    return ( 
        <div>
            <footer className="bg-body-tertiary text-center mt-5">
                {/* Copyright */}
                <div
                    className="text-center p-3"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
                >
                    © 2026 Copyright:
                    <a className="text-body" href="https://devconnect.com/">
                    DEvcON
                    </a>
                </div>
                {/* Copyright */}
            </footer>

        </div>
     );
}
 
export default Footer;