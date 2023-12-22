import { Metadata } from "next";
import { ContactForm } from "../../../components/ContactForm";
import "../../../css/contact.css";

export const metadata: Metadata = {
  title: "Contact",
};

const Page = () => {
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
            <a href="mailto:amosmachora13@gmail.com" className="gmail">
              amosmachora13@gmail.com
            </a>
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
              LET&apos;S ARRANGE A CONVERSATION ABOUT THE PROJECT.
            </p>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Page;
