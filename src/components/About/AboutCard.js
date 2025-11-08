import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Harsh Dubey </span>
            from <span className="purple"> Mirzapur.</span>
            <br />
          I am currently pursuing my Master of Computer Applications (MCA).
            <br />
            I have completed my Bachelor of Computer Applications (BCA).
            <br />
            Right now, I’m focused on building projects and improving my development skills.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Make it work, make it right, make it fast."{" "}
          </p>
          <footer className="blockquote-footer"> Kent Beck</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
