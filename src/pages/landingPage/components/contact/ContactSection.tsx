import '../../../../styles/global.scss';
import './contactSection.scss';


const ContactSection = () => {
  return (
    <div>
          <section className="explore" id="explore">
            <p className="section__subheader">EXPLORE</p>
            <h2 className="section__header">School Location</h2>
      
            <div className="section__explore__container">
              <div className="container_google-maps-location">
                <div className="box text-content">
                  <h1>Our location</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laudantium accusantium explicabo dolores quae incidunt cum
                    praesentium nobis ut eveniet earum sed quam repellat ex quod,
                    deserunt illum ratione optio dicta?
                  </p>
                </div>
      
                <div className="box map-content">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1534.7594400086361!2d121.14799835834654!3d14.232721392433211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd623f86aed823%3A0x73d3008db710fa11!2sSt.%20Vincent%20College%20Of%20Cabuyao!5e0!3m2!1sen!2sph!4v1724400137562!5m2!1sen!2sph"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
      
            <p className="section__subheader" id="contact">CONTACT</p>
            <h2 className="section__header">Reach out to us</h2>
      
            <div className="explore__bg">
              <div className="explore__content">
                <p className="section__description">Contact us for more information.</p>
                <h4>SVCC-ROTC@gmail.com</h4>
                <button className="btn">
                  Send Email<i className="ri-mail-send-line"></i>
                </button>
              </div>
            </div>
          </section>
      
    </div>
  )
}

export default ContactSection
