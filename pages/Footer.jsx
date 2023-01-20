function Footer() {
  return (
    <div>
      <footer id="footer" className="footer">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-5 col-md-12 footer-info">
              <a
                href="/"
                className="logo d-flex align-items-center"
              >
                <span>TicketNFTs</span>
              </a>
              <div className="social-links d-flex mt-4">
                <a href="#" className="twitter">
                  <i className="bi bi-twitter" />
                </a>
                <a href="#" className="facebook">
                  <i className="bi bi-facebook" />
                </a>
                <a href="#" className="instagram">
                  <i className="bi bi-instagram" />
                </a>
                <a href="#" className="linkedin">
                  <i className="bi bi-linkedin" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-4">
          <div className="copyright">
            © Copyright 2023{" "}
            <strong>
              <span>TicketNFTs</span>
            </strong>
            . All Rights Reserved
          </div>
        </div>
      </footer>
      
    </div>
  );
}
export default Footer;
