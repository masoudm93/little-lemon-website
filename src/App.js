import { Fragment } from "react";
import "./App.css";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Main from "./Components/Main";
import Footer from "./Components/Footer"

function App() {
  return (
    <Fragment className="App">
      <Header />
      <Nav />
      <Main />
      <Footer />
    </Fragment>
  );
}

export default App;
