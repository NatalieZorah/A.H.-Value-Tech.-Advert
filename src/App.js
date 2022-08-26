import "./App.css";
import "./styles/abstracts/colors.css";
import "./styles/abstracts/fonts.css";
import "./styles/abstracts/layouts.css";
import "./styles/abstracts/decorative.css";
import "./styles/abstracts/animations.css";

import Header from "./components/static elements/Header.jsx";
import Home from "./components/pages/Home.jsx";
import Footer from "./components/static elements/Footer.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
