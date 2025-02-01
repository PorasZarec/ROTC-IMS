import { useState } from 'react';
import './aboutSection.scss'

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="section__container">
    <section className="about__container" id="about">
      <div className="about__image">
        <img src="public\about_camouflage.png" alt="about" />
      </div>
      
      <div className="about__content">
        <p className="section__subheader">ABOUT US</p>
        <h2 className="section__header">What is ROTC?</h2>
        <p className={`section__description ${isExpanded ? 'show-more' : ''}`}>
          ROTC (Reserve Officers' Training Corps) is a program designed to
          provide military education and training to college students in the
          Philippines, preparing them for national defense and emergency
          service.
          <br /><br />
          <span className="about__more-content">
            Established under various laws like the National Defense Act of 1935
            and Republic Act No. 7077, ROTC's goal is to train students to
            become reservists and potential officers in the Armed Forces of the
            Philippines (AFP).
            <br /><br />
            The program is a component of the National Service Training Program
            (NSTP), which focuses on military preparedness by equipping students
            with fundamental skills like leadership, marksmanship, movement,
            navigation, and communication.
            <br /><br />
            These skills are taught through lectures and training in two  
            courses, Military Science 1 and 2, under Basic ROTC. ROTC involves
            regular instruction during the school year, with Basic ROTC lasting
            one year for student-cadets, and Advanced ROTC lasting three years
            for cadet officers. Additionally, there are extended training
            activities during the summer, such as ROTC Summer Camp Training
            (RSCT) and Advanced ROTC Academic Phase Training (ARAPT).
          </span>
        </p>
        <div className="about__btn">
          <button className="btn_read_more" onClick={toggleReadMore}>
            {isExpanded ? 'Read Less' : 'Read More'}
          </button>
        </div>
      </div>
    </section>
    <section className="section__container room__container">
            <p className="section__subheader">OUR ROTC PROGRAM</p>
            <h2 className="section__header">Cadet Training Programs</h2>
            <div className="room__grid">
              <div className="room__card">
                <div className="room__card__image">
                  <img src="/public/600x400_NSTP.png" alt="room" />
                </div>
                <div className="room__card__details">
                  <h4>NSTP (National Service Training Program)</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Reiciendis officiis labore ad eos omnis at nulla accusantium est
                    similique libero. Modi doloremque iusto alias possimus velit nemo
                    magni nostrum officia.
                  </p>
                  <h5>Training days :<span> 15 weeks</span></h5>
                </div>
              </div>
              <div className="room__card">
                <div className="room__card__image">
                  <img src="/public/600x400_ROTC.png" alt="room" />
                </div>
                <div className="room__card__details">
                  <h4>ROTC (Reserve Officers' Training Corps)</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Reiciendis officiis labore ad eos omnis at nulla accusantium est
                    similique libero. Modi doloremque iusto alias possimus velit nemo
                    magni nostrum officia.
                  </p>
                  <h5>Training days :<span> 15 weeks</span></h5>
                </div>
              </div>
              <div className="room__card">
                <div className="room__card__image">
                  <img src="/public/600x400_AD-ROTC.png" alt="room" />
                </div>
                <div className="room__card__details">
                  <h4>Advance ROTC (Advanced Reserve Officers' Training Corps)</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Reiciendis officiis labore ad eos omnis at nulla accusantium est
                    similique libero. Modi doloremque iusto alias possimus velit nemo
                    magni nostrum officia.
                  </p>
                  <h5>Training days :<span> ??? weeks</span></h5>
                </div>
              </div>
            </div>
          </section>  
    </div>
  )
}

export default About
