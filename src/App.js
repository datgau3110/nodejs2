import { Payment } from "@mui/icons-material";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import payment from "./components/Payment/Payment";
import signin from "./components/Login/signin";
import signup from "./components/Login/signup";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={signin} />
          <Route exact path="/signup" component={signup} />
          <Route exact path="/payment" component={payment} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
