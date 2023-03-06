import { StrictMode } from "react";
import { BrowserRouter,  Route,  Routes } from "react-router-dom";
import { AppGlobalStyle} from "../style/App.style";
import Accueil from "./Accueil";
import Login from "./Login";
import Menu from "./Menu";
import OutputTest from "./OutputTest";
import Subscription from "./Subscription";

/**
 * main component for the application
 * @returns
 *
 */
export default function App() {
  // STATE : useState


  // ACTIONS

  //     setTimming (timming.push(performance))

  //   // EFFET : useEffect : counter
    // case isStarted === true


  return (
<StrictMode>
      <BrowserRouter>
        <AppGlobalStyle />
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/Subscription" element={<Subscription />} />
            <Route path="/outputTest" element={<OutputTest />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
          <Menu />
      </BrowserRouter>
    </StrictMode>  );
}