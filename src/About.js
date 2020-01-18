import React from "react";

import { ReactComponent as DP } from "./svg/dp.svg";

export default function About() {
  return (
    <div className="about">
      <div className="aboutImage">
        <DP />
      </div>

      <div className="text">
        I'm a self-taught <span>"front-end dev"</span> who is currently aiming
        to make simple minimalistic websites.
        <div>I also have a great passion for animations and transitions.</div>
      </div>

      <div className="Watermark">ABOUT</div>
    </div>
  );
}
