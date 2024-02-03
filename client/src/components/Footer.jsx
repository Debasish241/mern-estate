import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;

      // Adjust the threshold as needed
      const threshold = document.documentElement.scrollHeight - window.innerHeight - 50;

      setShowFooter(scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer className={`bg-slate-200 fixed bottom-0 w-full ${showFooter ? 'visible' : 'invisible'}`}>
      <div className="flex justify-center items-center max-w-6xl mx-auto p-3">
        {/* Social media icons */}
        <div>
          <FontAwesomeIcon
            icon={faFacebook}
            className="mr-4 text-slate-900 cursor-pointer"
            onClick={() => window.open("https://www.facebook.com/DebasishDebnath2001/", "_blank")}
          />
          <FontAwesomeIcon
            icon={faInstagram}
            className="mr-4 text-slate-900 cursor-pointer"
            onClick={() => window.open("https://www.instagram.com/__iamdebasishdebnath__/?hl=en", "_blank")}
          />
          <FontAwesomeIcon
            icon={faTwitter}
            className="text-slate-900 cursor-pointer"
            onClick={() => window.open("https://twitter.com/Debasis98285683", "_blank")}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
