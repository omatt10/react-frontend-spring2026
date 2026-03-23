import "../css/Contact.css";

const Contact = () => {
  return (
    <main id="contact">
      <section className="page-header">
        <h1>Contact Us</h1>
        <p>Have a question or feedback? We&apos;d love to hear from you.</p>
      </section>

      <section className="contact-section">
        <div className="contact-wrapper">
          <div className="contact-form-box">
            <h2>Send a Message</h2>
            <p>
              Fill out the form and we&apos;ll get back to you within 24 hours.
            </p>

            <div className="contact-form-row">
              <div className="contact-field">
                <label>
                  Full Name <span className="required-star">*</span>
                </label>
                <input type="text" placeholder="Jane Doe" />
              </div>
              <div className="contact-field">
                <label>
                  Email Address <span className="required-star">*</span>
                </label>
                <input type="email" placeholder="janedoe@email.com" />
              </div>
            </div>
            <div className="contact-field">
              <label>
                Subject <span className="required-star">*</span>
              </label>
              <input type="text" placeholder="What's this about?" />
            </div>
            <div className="contact-field">
              <label>
                Message <span className="required-star">*</span>
              </label>
              <textarea
                rows="6"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            <div className="contact-form-footer">
              <button className="contact-submit-btn">Send Message</button>
            </div>
          </div>

          <div className="contact-info-box">
            <h2>Get In Touch</h2>
            <p>We&apos;re here to help you reach your fitness goals.</p>

            <div className="contact-info-item">
              <span className="contact-info-icon">📧</span>
              <div>
                <strong>Email</strong>
                <p>support@coremetrics.com</p>
              </div>
            </div>
            <div className="contact-info-item">
              <span className="contact-info-icon">📍</span>
              <div>
                <strong>Location</strong>
                <p>San Diego, California</p>
              </div>
            </div>
            <div className="contact-info-item">
              <span className="contact-info-icon">🕐</span>
              <div>
                <strong>Response Time</strong>
                <p>Within 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
