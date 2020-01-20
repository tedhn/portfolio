import React, { useState, useContext } from "react";
import ReactDOM from "react-dom";

import {
  NavLink,
  Route,
  Switch,
  BrowserRouter,
  __RouterContext
} from "react-router-dom";
import { ReactComponent as Welcome } from "./svg/welcome.svg";
import { ReactComponent as Discord } from "./svg/discord.svg";
import { ReactComponent as FB } from "./svg/facebook.svg";
import { ReactComponent as Telegram } from "./svg/telegram.svg";
import { ReactComponent as Instagram } from "./svg/instagram.svg";
import { ReactComponent as Github } from "./svg/github.svg";
import { animated, useTransition } from "react-spring";

import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

import "./index.scss";

function App() {
  const [loading, setLoading] = useState(true);
  const [remove, setRemove] = useState("preloader loaded");

  const { location } = useContext(__RouterContext);
  const transition = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: "translate(100% , 0)" },
    enter: { opacity: 1, transform: "translate(0 , 0)" },
    leave: { opacity: 0, transform: "translate(-50% , 0)" }
  });

  window.addEventListener("load", () => {
    setLoading(false);

    setTimeout(() => {
      setRemove("preloader loaded removed");
    }, 3000);
  });

  return (
    <div className="Container">
      <div className={loading ? "preloader" : remove}>
        <Welcome />
      </div>
      <div className="navBar">
        <ul>
          <li>
            <NavLink
              className="navLinks"
              activeClassName="navLinks active"
              exact
              to={process.env.PUBLIC_URL + "/"}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navLinks"
              activeClassName="navLinks active"
              exact
              to={process.env.PUBLIC_URL + "/About"}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navLinks"
              activeClassName="navLinks active"
              exact
              to={process.env.PUBLIC_URL + "/Projects"}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navLinks"
              activeClassName="navLinks active"
              exact
              to={process.env.PUBLIC_URL + "/Contact"}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      {transition.map(({ item, props, key }) => (
        <animated.div className="animatedDiv" key={key} style={props}>
          {console.log(process.env.PUBLIC_URL)}
          <Switch location={item}>
            <Route exact path={process.env.PUBLIC_URL + "/"} component={Home} />
            <Route
              exact
              path={process.env.PUBLIC_URL + "/About"}
              component={About}
            />
            <Route
              exact
              path={process.env.PUBLIC_URL + "/Projects"}
              component={Projects}
            />
            <Route
              exact
              path={process.env.PUBLIC_URL + "/Contact"}
              component={Contact}
            />
          </Switch>
        </animated.div>
      ))}

      <div className="social">
        <a className="telegram" href="https://t.me/htehnd">
          <Telegram />
        </a>
        <a className="facebook" href="https://web.facebook.com/htehnd">
          <FB />
        </a>
        <a
          className="instagram"
          href="https://www.instagram.com/teeedork/?hl=en"
        >
          <Instagram />
        </a>
        <a className="github" href="https://github.com/tedhn">
          <Github />
        </a>
        <a
          className="discord"
          href="https://discordapp.com/users/668645610978672650"
        >
          <Discord />
        </a>
      </div>
    </div>
  );
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
