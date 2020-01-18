import React from "react";

import { ReactComponent as Me } from "./svg/Me.svg";

export default function Home() {
  return (
    <div className="home">
      <div className="homeText">
        <div className="homeTitle">
          Hi, I'm <span>Ted</span>
        </div>
        <div className="homeSubtitle">A Web Dev wannabe</div>
      </div>

      <div className="homeImage">
        <Me />
      </div>

      <div className="Watermark">HEY</div>
    </div>
  );
}
