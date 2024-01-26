import React from "react";
import * as Unicons from "@iconscout/react-unicons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-slate-50 m-0 p-4 ">
      <div className="2xl:w-[80%] m-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:mx-12  pb-8 leading-8 text-sm border-b-2">
          <ul>
            <li className="font-semibold">Unterstützung</li>
            <li className="font-light">
              <Link to="/">Hilfe-Center</Link>
            </li>
            <li className="font-light">
              <Link to="/">AirCover</Link>
            </li>
            <li className="font-light">
              <Link to="/">Antidiskriminierung</Link>
            </li>
            <li className="font-light">
              <Link to="/">Barrierefreiheit</Link>
            </li>
            <li className="font-light">
              <Link to="/">Stornierungsmöglichkeiten</Link>
            </li>
            <li className="font-light">
              <Link to="/">Nachbarschaft: Problem melden</Link>
            </li>
          </ul>
          <ul>
            <li className="font-semibold">Gastgeben</li>
            <li className="font-light">
              <Link to="/">Als Gastgeber:in loslegen</Link>
            </li>
            <li className="font-light">
              <Link to="/">AirCorver für Gastgeber:innen</Link>
            </li>
            <li className="font-light">
              <Link to="/">Infos für Gastgeber:innen</Link>
            </li>
            <li className="font-light">
              <Link to="/">Community-Forum</Link>
            </li>
            <li className="font-light">
              <Link to="/">Verantwortungsvolles Gastgeben</Link>
            </li>
          </ul>
          <ul>
            <li className="font-semibold">Airbnb</li>
            <li className="font-light">
              <Link to="/">Pressebereich</Link>
            </li>
            <li className="font-light">
              <Link to="/">Neue Funktionen</Link>
            </li>
            <li className="font-light">
              <Link to="/">Karriere</Link>
            </li>
            <li className="font-light">
              <Link to="/">Investor:innen</Link>
            </li>
            <li className="font-light">
              <Link to="/">Geschenkkarten</Link>
            </li>
            <li className="font-light">
              <Link to="/">Notunterkünfte über Airbnb.org</Link>
            </li>
          </ul>
        </div>
        <div className="font-poppins  flex flex-col sm:flex-row sm:justify-between items-center px-12 text-sm  pt-4">
          <div
            id="footer-left"
            className="flex flex-col sm:flex-row sm:gap-4 font-light"
          >
            <p>© 2024 Airbnb, Inc. </p>
            <ul className="flex flex-col sm:flex-row list-disc gap-5 list-disc-smaller">
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
            className="flex flex-col sm:flex-row gap-4 font-semibold justify-center items-center"
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
      </div>
    </div>
  );
};

export default Footer;
