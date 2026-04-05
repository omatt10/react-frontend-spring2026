import { useState } from "react";
import "../css/Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(false);
    setError(false);
    setLoading(true);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/mattheo@email.sc.edu",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({ name, email, subject, message }),
        },
      );
      const data = await response.json();
      if (data.success === "true" || response.ok) {
        setSuccess(true);
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        throw new Error("Failed");
      }
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

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

            <form onSubmit={handleSubmit}>
              <div className="contact-form-row">
                <div className="contact-field">
                  <label>
                    Full Name <span className="required-star">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Jane Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    minLength={2}
                  />
                </div>
                <div className="contact-field">
                  <label>
                    Email Address <span className="required-star">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="janedoe@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="contact-field">
                <label>
                  Subject <span className="required-star">*</span>
                </label>
                <input
                  type="text"
                  placeholder="What's this about?"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                  minLength={3}
                />
              </div>

              <div className="contact-field">
                <label>
                  Message <span className="required-star">*</span>
                </label>
                <textarea
                  rows="6"
                  placeholder="Write your message here..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  minLength={10}
                ></textarea>
              </div>

              <div className="contact-form-footer">
                <button
                  type="submit"
                  className="contact-submit-btn"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>

                {success && (
                  <div className="form-message form-success">
                    ✅ Your message was sent! We&apos;ll be in touch soon.
                  </div>
                )}
                {error && (
                  <div className="form-message form-error">
                    ❌ Something went wrong. Please try again.
                  </div>
                )}
              </div>
            </form>
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
