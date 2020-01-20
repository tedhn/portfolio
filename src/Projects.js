import React from "react";

import { ReactComponent as Amino } from "./svg/amino.svg";
import { ReactComponent as Discord } from "./svg/discordbot.svg";

export default function Project() {
  return (
    <div className="project">
      <div className="text">
        Here are some of the bigger <span>projects</span> I have done
      </div>

      <div className="projectExamples">
        <a href="https://tedhn.github.io/amino/">
          <div className="links">
            <Amino />
          </div>
        </a>

        <a href="https://github.com/tedhn/discord-bot">
          <div className="links">
            <Discord />
          </div>
        </a>
      </div>

      <div className="Watermark">Projects</div>
    </div>
  );
}
