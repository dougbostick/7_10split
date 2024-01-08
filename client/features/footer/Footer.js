import React from 'react';

export default function Footer() {
  return (
    <div className="footer">
      <div className="footerText">
        <p>Engineer: Doug Bostick</p>
        <p>Follow links to learn more!</p>
      </div>
      <div className="footerImages">
        <a href="https://www.linkedin.com/in/doug-bostick/" target="_blank">
          <img src="/images/linkedin.png" className="footerImg" />
        </a>
        <a href="https://github.com/dougbostick" target="_blank">
          <img src="/images/github.png" className="footerImg" />
        </a>
        <a href="https://dougbostick.github.io/react_halfway/" target="_blank">
          <img src="/images/halfwayCircle.png" className="footerImg" />
        </a>
      </div>
    </div>
  );
}
