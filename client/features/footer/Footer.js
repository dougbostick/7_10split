import React from 'react';

export default function Footer() {
  return (
    <div className="footer">
      <div className="footerText">
        <p>About this site:</p>
        <p>
          This site was built by Full Stack Software Engineer,
          <br />
          Doug Bostick.
        </p>
        <p>Check out these links to learn more!</p>
      </div>

      <div className="empty"></div>
      <div className="footerLinks">
        <a
          className="footerLink"
          href="https://dougbosticktech.com"
          target="_blank"
        >
          Portfolio
          {/* <img src="/images/halfwayCircle.png" className="footerImg" /> */}
        </a>
        <a
          className="footerLink"
          href="https://www.linkedin.com/in/doug-bostick/"
          target="_blank"
        >
          Linkedin
          {/* <img src="/images/linkedin.png" className="footerImg" /> */}
        </a>
        <a
          className="footerLink"
          href="https://github.com/dougbostick"
          target="_blank"
        >
          Github
          {/* <img src="/images/github.png" className="footerImg" /> */}
        </a>
        <a className="footerLink" href="https://usemise.com" target="_blank">
          Mise
          {/* <img src="/images/halfwayCircle.png" className="footerImg" /> */}
        </a>
        <a
          className="footerLink"
          href="https://dougbostick.github.io/react_halfway/"
          target="_blank"
        >
          Halfway
          {/* <img src="/images/halfwayCircle.png" className="footerImg" /> */}
        </a>

        <a
          className="footerLink"
          href="https://word-game-nu.vercel.app/"
          target="_blank"
        >
          Word Rush
          {/* <img src="/images/halfwayCircle.png" className="footerImg" /> */}
        </a>
      </div>
    </div>
  );
}
