import "./App.css";
import MainPage from "./Pages/MainPage/MainPage";
import { Route, Switch } from "react-router-dom";
import InicialPage from "./Pages/InicialPage/InicialPage";
import GlobalStyle from "./GlobalStyle";
import { useState } from "react";

function App() {
  const [color, setColor] = useState("#282c34");
  return (
    <>
      <Switch>
        <Route exact path="/">
          <InicialPage setColor={setColor} />
        </Route>
        <Route exact path="/mainPage">
          <MainPage setColor={setColor} />
        </Route>
      </Switch>
      <GlobalStyle primary={color} />
    </>
  );
}

export default App;
