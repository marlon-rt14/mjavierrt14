export const Footer = () => {
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
              <form action="" className="contact-form" id="contact-form">
                <input type="hidden" name="contact_number" />
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
                <div className="">
                  <input type="submit" className="send-email" value="Send" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};
