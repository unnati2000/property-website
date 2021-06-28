import { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme";
import {AuthProvider} from "./context/auth-context";
import { useAuth } from "./context/auth-context";
import HomePage from "./pages/home-page/HomePage.component";
import Navbar from "./components/navbar/Navbar.component";
import LoginPage from "./pages/login-page/LoginPage.component";
import RegisterPage from "./pages/register-page/Register.component";
import CreateProfile from "./pages/create-profile-page/CreateProfile.component";

function App() {

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <AuthProvider>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/onboarding" component={CreateProfile}/>
        </Switch>
      </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
