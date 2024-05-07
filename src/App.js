import React, { useState, useEffect, useLayoutEffect } from "react";
import Dropdown from "./components/Dropdown";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import GlobalStyle from "./globalStyles";
import { Switch, Route, useLocation } from "react-router-dom";
import Home from "./pages";
import TermsAndConditions from "./pages/TermsAndConditions";
import PoliticaDeConfidentialitate from "./pages/PoliticaDeConfidentialitate";
import Rotaract from "./pages/Rotaract";
import BuyTicket from "./pages/BuyTicket";
import ThankYou from "./pages/ThankYou";

import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/termeni-si-conditii" component={TermsAndConditions} />
        <Route
          path="/politica-de-confidentialitate"
          component={PoliticaDeConfidentialitate}
        />
        <Route path="/rotaract" component={Rotaract} />
        <Route path="/inscrie-te" component={BuyTicket} />
        <Route path="/thank-you" component={ThankYou} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
