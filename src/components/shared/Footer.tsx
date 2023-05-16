import {FormEventHandler, useRef, useState} from "react";
import emailjs from "@emailjs/browser";
import {toaster} from "evergreen-ui";
import {NewtonsCradle, RaceBy} from "@uiball/loaders";

const SERVICE_ID = "service_tbj15i6";
const TEMPLATE_ID = "template_88h24q3";
const PUBLIC_KEY = "3dHvsZtymyU0yIj5q";

export const Footer = () => {
  const [sending, setSending] = useState(false);

  const formRef = useRef<any>();

  const sendEmail = async (e: any) => {
    e.preventDefault();
    const data: any = Object.fromEntries(new FormData(e.target));
    if (
      data.user_name.trim().length === 0 ||
      data.user_email.trim().length === 0 ||
      data.message.trim().length === 0
    ) {
      toaster.warning("Please fill all fields");
      return;
    }
    setSending(true);
    try {
      const result = await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        PUBLIC_KEY
      );
      toaster.success("Email sent successfully");
      alert("Email sent successfully");
      setSending(false);
    } catch (e) {
      setSending(false);
      toaster.danger("Failure sending email");
      alert("Failure sending email");
    }
  };

  return (
    <section className="section-contact" id="section-contact">
      <div className="waves waves-up"></div>
      <div className="waves waves-down"></div>
      <div className="waves waves-middle"></div>
      <article className="aritcle-contact">
        <div className="article-title contact-title">
          <h1>Contáctame</h1>
        </div>
        <div className="article-cont contact-cont">
          <div className="article-des contact-des">
            <div className="contact-des-quickly">
              <h4>Get in touch</h4>
              <ul className="contact__ul">
                <li className="contact__ul__li">
                  <div className="contact-icon-cont">
                    <i className="bi bi-person-fill key-icon"></i>
                  </div>
                  <div className="contact__li-des">
                    <h5>Name</h5>
                    <p>Marlon Ruiz</p>
                  </div>
                </li>
                <li className="contact__ul__li">
                  <div className="contact-icon-cont">
                    <i className="fas fa-map-marker-alt key-icon"></i>
                  </div>
                  <div className="contact__li-des">
                    <h5>Address</h5>
                    <p>Ibarra - Ecuador</p>
                  </div>
                </li>
                <li className="contact__ul__li">
                  <div className="contact-icon-cont">
                    <i className="fas fa-envelope key-icon"></i>
                  </div>
                  <div className="contact__li-des">
                    <h5>E-mail</h5>
                    <p>mjavierrt14@gmail.com</p>
                  </div>
                </li>
                <li className="contact__ul__li">
                  <div className="contact-icon-cont">
                    <i className="fas fa-phone-alt key-icon"></i>
                  </div>
                  <div className="contact__li-des">
                    <h5>Phone</h5>
                    <p>+593 992623321</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="contact-des-form">
              <h4>Send me a message</h4>
              <form
                ref={formRef}
                className="contact-form"
                id="contact-form"
                onSubmit={sendEmail}
              >
                {/* <input type="hidden" name="contact_number" /> */}
                <input
                  type="hidden"
                  name="from_name"
                  defaultValue={"Marlon Ruiz"}
                />
                <div className="mb-3">
                  <input
                    type="text"
                    placeholder="Enter your name"
                    name="user_name"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    placeholder="Enter your e-mail"
                    name="user_email"
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    name="message"
                    placeholder="Leave your message..."
                  ></textarea>
                </div>
                <button type="submit" className="cont-sending">
                  {sending && (
                    <div className="d-flex justify-content-center ">
                      <RaceBy size={50} color="#fff" />
                    </div>
                  )}
                  {!sending && "Send"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};
