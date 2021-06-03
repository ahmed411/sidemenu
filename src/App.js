import React, { useState, lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PuffLoader from "react-spinners/PuffLoader";
import Navbar from "../src/components/Navbar";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes.js";
import Menu2 from "../src/pages/Menu2";
import Menu3 from "../src/pages/Menu3";
import Menu4 from "../src/pages/Menu4";
import Menu5 from "../src/pages/Menu5";
import "./App.css";
const Home = lazy(() => import("../src/pages/Home"));

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

export default function App() {
  const [theme, setTheme] = useState("light");
  const changeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp>
        <Router>
          <Navbar changeToggler={changeToggler} themeColor={theme} />
          <Suspense
            fallback={
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <PuffLoader />
              </div>
            }
          >
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route path="/menu2" component={Menu2}></Route>
              <Route path="/menu3" component={Menu3}></Route>
              <Route path="/menu4" component={Menu4}></Route>
              <Route path="/menu5" component={Menu5}></Route>
            </Switch>
          </Suspense>
        </Router>
      </StyledApp>
    </ThemeProvider>
  );
}
