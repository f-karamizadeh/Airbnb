import React from "react";
import * as Unicons from "@iconscout/react-unicons";

const Footer = () => {
  return (
    <div className="font-poppins w- h-auto flex justify-between items-center px-12 text-sm ">
      <div id="footer-left" className="flex gap-4 font-light">
        <p>© 2024 Airbnb, Inc. </p>
        <ul className="flex list-disc gap-5 list-disc-smaller">
          <li className="list-disc-smaller">
            <a href="">Datenschutz</a>
          </li>
          <li className="list-disc-smaller">
            <a href="">Nutzungsbedingungen</a>
          </li>
          <li className="list-disc-smaller">
            <a href="">Sitemap</a>
          </li>
          <li className="list-disc-smaller">
            <a href="">Angaben zum Unternehmen</a>
          </li>
          <li className="list-disc-smaller">
            <a href="">Cookie-Richtlinie</a>
          </li>
        </ul>
      </div>
      <div
        id="footer-right"
        className="flex gap-4 font-semibold justify-center items-center"
      >
        <div id="language" className="flex flex-row items-center">
          <Unicons.UilGlobe size={24} />
          <a href="">Deutsch (DE)</a>
        </div>
        <div id="currency" className="flex items-center">
          <p>€ EUR</p>
        </div>
        <div className="flex items-center gap-3">
          <Unicons.UilFacebook size={24} />
          <Unicons.UilTwitter className="bg-black text-white" size={20} />
          <Unicons.UilInstagram className="bg-black text-white" size={20} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
