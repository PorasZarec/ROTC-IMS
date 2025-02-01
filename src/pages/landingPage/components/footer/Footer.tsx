import '../../../../styles/global.scss';
import './footer.scss';

const Footer = () => {
  return (
    <div>
      <footer className="footer">
            <div className="section__container footer__container">
              <div className="footer__col">
                <div className="header_logo_container">
                  <a href="https://www.facebook.com/SVCCROTCU" target="_blank"
                    ><img src="public/svcc-rotc-logo.png" alt="logo"
                  /></a>
                  <h3>SVCC ROTC</h3>
                </div>
                <p className="section__description" id='footer-description'>
                  "To Lead Is To Serve. We train to be peace and nation builders"<br />
                  <br />ROTC Cadets Today Leaders of Tomorrow.
                </p>
              </div>
              <div className="footer__col">
                <h4>MISSION</h4>
                <p className="section__description" id='footer-description'>
                  To produce patriotic graduates ready for the knowledge-based global
                  economy.
                </p>
              </div>
              <div className="footer__col">
                <h4>VISION</h4>
                <p className="section__description" id='footer-description' >
                  To be the leading privately managed integrated community college in
                  Laguna recognized for its adherence to academic excellence,
                  environmental sustainability, responsible citizenship, and overall
                  national development by 2030.
                </p>
              </div>
              <div className="footer__col">
                <h4>CONTACT US</h4>
                <ul className="footer__links">
                  <li>
                    <a href="https://www.facebook.com/SVCCROTCU" target="_blank"
                      >Facebook/SVCCROTCU</a
                    >
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/svcccabuyaoofficial"
                      target="_blank"
                      >Facebook/SVCC</a
                    >
                  </li>
                  <li>
                    <a href="https://mail.google.com">svccregistrar@gmail.com</a>
                  </li>
                </ul>
                <div className="footer__socials">
                  <a href="https://www.facebook.com/SVCCROTCU"
                    ><img src="/public/facebook.png" alt="facebook"
                  /></a>
                  <a href="https://mail.google.com"
                    ><img src="/public/gmail.png" alt="gmail"
                  /></a>
                </div>
              </div>
            </div>
      </footer>      
    </div>
  )
}

export default Footer

