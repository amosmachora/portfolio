"use client";

import { assets } from "@/assets/assets";
import { useForm } from "@formspree/react";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { ReadMore } from "./ReadMore/ReadMore";
import Spinner from "./spinner/Spinner";

export const ContactForm = () => {
  const [state, handleSubmit, ResetFunction] = useForm("portfolio-form");
  return (
    <form className="contact-form flex" onSubmit={handleSubmit}>
      <div>
        <div className="flex space-between">
          <input type="hidden" name="_captcha" value="false" />
          <input type="text" placeholder="Your Name *" required name="Name" />
          <input
            type="email"
            placeholder="Email Address *"
            required
            name="Email"
          />
        </div>
        <textarea placeholder="Your message here *" required name="Message" />
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
          <FontAwesomeIcon icon={faCaretRight} />
        </div>
      </div>
      {state.succeeded && (
        <div
          className="background-transparent fixed top-0 right-0 left-0 h-screen w-screen opacity-100"
          onClick={() => ResetFunction()}
        >
          <div className="success-state">
            <div className="flex align-center">
              <Image
                src={assets.greenTick}
                alt="Green Tick"
                className="green-tick"
              />
              <p className="success-message">Message was sent successfully!</p>
            </div>
            <p className="greyish-2">
              Thanks for contacting me . I will reply as soon as possible.
              Guarantee a response in less than 12 hours!
            </p>
            <div className="link-wrapper cursor">
              <ReadMore text="Thank you !" link="portfolio" />
            </div>
          </div>
        </div>
      )}
    </form>
  );
};
