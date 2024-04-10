import React from 'react';
import style from "../../styles/Style.module.scss"
const Accodien = () => {
  return (
    <div className={`${style.accordion} accordion`} id="accordionExample">
      <div className='d-none'>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            What is the trick to win fantasy cricket?
          </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            We provide various tips and strategies to improve your chances of winning in fantasy cricket. From analyzing player performance to understanding match dynamics, our expert advice can help you craft winning teams.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingTwo">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            How do you predict fantasy cricket team?
          </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
          <div className="accordion-body">
           
            Predicting a fantasy cricket team involves a combination of factors such as player form, past performance, pitch conditions, and team dynamics. Our platform offers insights and analysis to assist you in making informed decisions while selecting your team.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingThree">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            How to win Dream11 easily?
          </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
          <div className="accordion-body">
          
            It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It{"'"}s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.

          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingfour">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="false" aria-controls="collapseThree">
            How To Start Playing Fantasy Cricket?
          </button>
        </h2>
        <div id="collapsefour" className="accordion-collapse " aria-labelledby="headingfour" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            If you{"'"}re new to fantasy cricket, getting started is easy! Simply download a fantasy sports app, create your account, and start selecting your team for upcoming matches. Our platform provides step-by-step guides to help you kickstart your fantasy cricket journey.
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Accodien;