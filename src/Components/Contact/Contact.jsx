import React from "react";
import "./Contact.css";
import Arrow from "../../Assets/Arrow.svg";
import { useForm } from "@formspree/react";
import GreenTick from "../../Assets/tick-green.svg";
import { ReadMore } from "../Start/StartPage";
import ArrowWhite from "../../Assets/ArrowWhite.svg";
import Spinner from "../Spinner/Spinner";

const Contact = () => {
  const [state, handleSubmit, ResetFunction] = useForm("portfolio-form");

  // const testState = {
  //   submitting: true,
  //   succeeded: true,
  // };

  return (
    <div className="contact">
      <div className="contact-top">
        <h1 className="contact-heading">
          Quick <br /> Contact
        </h1>
        <div className="flex space-between contact-options">
          <div>
            <p className="option-number">01</p>
            <h3 className="contact-how">E-mail</h3>
            <p className="greyish-2">
              I will reply as soon as possible. Guarantee a response within
              hours!
            </p>
            <a href="mailto:amosmachora13@gmail.com">amosmachora13@gmail.com</a>
          </div>
          <div>
            <p className="option-number">02</p>
            <h3>Linked In</h3>
            <p className="greyish-2">
              You can get in touch with me on my LinkedIN profile. I will reply
              to you as soon as possible. The link to my profile is in the top
              right corner of this page.
            </p>
          </div>
          <div>
            <p className="option-number">03</p>
            <h3>Contact Form</h3>
            <p className="greyish-2">
              You can fill the simple contact form below and send me an email
              directly without you having to open your mail application.
            </p>
          </div>
        </div>
      </div>
      <div className="contact-bottom">
        <div className="flex align-center space-between">
          <h3>Contact Form</h3>
          <div className="contact-bottom-right flex align-center">
            <div>
              <h1>Start now!</h1>
              <p className="questions-advice-constructive">
                Questions ,advice , constructive criticism and comments are
                important to me, so please us the form below to contact me. I
                will reply as soon as possible. Guaranteed a response within 12
                hours!
              </p>
            </div>
            <p className="greyish capitalize">
              LET'S ARRANGE A CONVERSATION ABOUT THE PROJECT.
            </p>
          </div>
        </div>
        <form className="contact-form flex" onSubmit={handleSubmit}>
          <div>
            <div className="flex space-between">
              <input type="hidden" name="_captcha" value="false" />

              <input
                type="text"
                placeholder="Your Name *"
                required
                name="Name"
              />
              <input
                type="email"
                placeholder="Email Address *"
                required
                name="Email"
              />
            </div>
            <textarea
              placeholder="Your message here *"
              required
              name="Message"
            />
            <div className="flex checkbox greyish">
              <input type="checkbox" required name="privacy policy" />
              <p>
                I accept our{" "}
                <span className="privacy-policy cursor">Privacy Policy</span>
                <span className="tool-tip">joke 😜</span>
              </p>
            </div>
            <div className="flex align-center send-message space-between cursor">
              {state.submitting ? (
                <Spinner />
              ) : (
                <input
                  type="submit"
                  value="Send Message"
                  className="cursor"
                  disabled={state.submitting}
                />
              )}
              <img src={Arrow} alt="Arrow" />
            </div>
          </div>
        </form>
        {state.succeeded && (
          <>
            <div className="background-transparent" />
            <div className="success-state">
              <div className="flex align-center">
                <img src={GreenTick} alt="Green Tick" className="green-tick" />
                <p className="success-message">
                  Message was sent successfully!
                </p>
              </div>
              <p className="greyish-2">
                Thanks for contacting me . I will reply as soon as possible.
                Guarantee a response in less than 12 hours!
              </p>
              <div
                onClick={() => ResetFunction()}
                className="link-wrapper cursor"
              >
                <ReadMore Arrow={ArrowWhite} text="Thank you" />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Contact;
