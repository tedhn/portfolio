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
              to="/portfolio/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navLinks"
              activeClassName="navLinks active"
              exact
              to="/portfolio/About"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navLinks"
              activeClassName="navLinks active"
              exact
              to="/portfolio/Projects"
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navLinks"
              activeClassName="navLinks active"
              exact
              to="/portfolio/Contact"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      {transition.map(({ item, props, key }) => (
        <animated.div className="animatedDiv" key={key} style={props}>
          <Switch location={item}>
            <Route exact path="/portfolio/" component={Home} />
            <Route exact path="/portfolio/About" component={About} />
            <Route exact path="/portfolio/Projects" component={Projects} />
            <Route exact path="/portfolio/Contact" component={Contact} />
          </Switch>
        </animated.div>
      ))}
    </div>
  );
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
