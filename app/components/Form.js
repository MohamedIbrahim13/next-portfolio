"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import Link from "next/link";

export default function Form({ main, resume }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMsg] = useState("");
  const router = useRouter();
  const templateParams = {
    from_name: email,
    to_name: "Mohamed Ibrahim",
    message_html: message,
  };
  const handleSubmit = e => {
    e.preventDefault();
    //database stuff
    emailjs
      .send(
        "default_service",
        "template_GNYkfLRE",
        templateParams,
        "user_ADgeo37MieFpzK391rWex"
      )
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        }
      );
    router.push("/");
  };
  return (
    <main>
      <section className="section sec5 contact" id="contact">
        <div className="contact-container">
          <div className="main-title">
            <h2>
              Contact <span>Me</span>
              <span className="bg-text">Contact</span>
            </h2>
          </div>
          <div className="contact-content-con">
            <div className="left-contact">
              <h4>Contact me here</h4>
              <div className="contact-info">
                <div className="contact-item">
                  <div className="icon">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>Location</span>
                  </div>
                  <p>
                    : {main.address.city}, {main.address.country}
                  </p>
                </div>
                <div className="contact-item">
                  <div className="icon">
                    <i className="fas fa-envelope"></i>
                    <span>Email</span>
                  </div>
                  <p>
                    <span>: {main.contactmail.url}</span>
                  </p>
                </div>
                <div className="contact-item">
                  <div className="icon">
                    <i className="fas fa-user-graduate"></i>
                    <span>Education</span>
                  </div>
                  <p>
                    <span>: {resume.education.school}</span>
                  </p>
                </div>
                <div className="contact-item">
                  <div className="icon">
                    <i className="fas fa-user-graduate"></i>
                    <span>Mobile Number</span>
                  </div>
                  <p>
                    <span>: {main.contactphone.url}</span>
                  </p>
                </div>
                <div className="contact-item">
                  <div className="icon">
                    <i className="fas fa-globe-africa"></i>
                    <span>Languages</span>
                  </div>
                  <p>
                    <span>: Arabic, English</span>
                  </p>
                </div>
              </div>
              <div className="contact-icons">
                <div className="contact-icon">
                  {main.social?.map(item => {
                    return (
                      <Link
                        href={`${item.url}`}
                        target="_blank"
                        key={item.name}
                        rel="noreferrer"
                      >
                        <i className={item.className}></i>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="right-contact">
              <form action="" className="contact-form" onSubmit={handleSubmit}>
                <div className="input-control i-c-2">
                  <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                    placeholder="YOUR NAME"
                  />
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                    placeholder="YOUR EMAIL"
                  />
                </div>
                <div className="input-control">
                  <textarea
                    name=""
                    value={message}
                    onChange={e => setMsg(e.target.value)}
                    id=""
                    cols="15"
                    rows="8"
                    placeholder="Message Here..."
                  ></textarea>
                </div>
                <div className="submit-btn">
                  <button className="main-btn">
                    <span className="btn-text">Send</span>
                    <span className="btn-icon">
                      <i className="fas fa-paper-plane"></i>
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
