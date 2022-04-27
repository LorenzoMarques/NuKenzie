import "./App.css";
import MainPage from "./Pages/MainPage/MainPage";
import { Route, Switch } from "react-router-dom";
import InicialPage from "./Pages/InicialPage/InicialPage";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <InicialPage />
        </Route>
        <Route exact path="/mainPage">
          <MainPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
