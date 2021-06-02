import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme";
import HomePage from "./pages/home-page/HomePage.component";
import Navbar from "./components/navbar/Navbar.component";
import LoginPage from "./pages/login-page/LoginPage.component";
import RegisterPage from "./pages/register-page/Register.component";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
