import React, { useRef } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import "./contact.css";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_83dqhwo",
      "template_dscdw06",
      form.current,
      "JlT_vdqsKDg4wshSj"
    );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail />
            <h4>Email</h4>
            <h5>ghanemamn1929@gmail.com</h5>
            <a
              href="mailto:ghanemamn1929@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a Message
            </a>
          </article>

          <article className="contact__option">
            <RiMessengerLine />
            <h4>Messanger</h4>
            <h5>Gha Nem</h5>
            <a href="https://m.me/ghanem19" target="_blank" rel="noreferrer">
              Send a Message{" "}
            </a>
          </article>

          <article className="contact__option">
            <BsWhatsapp />
            <h4>Whatsapp</h4>
            <h5>+216 54 060 728</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+21654060728"
              target="_blank"
              rel="noreferrer"
            >
              Send a Message
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="Name"
            placeholder="Your Full Name"
            required
          />
          <input type="text" name="Email" placeholder="Your Email" required />
          <input type="text" name="Subject" placeholder="Subject" required />
          <textarea name="Message" rows="10" required></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
