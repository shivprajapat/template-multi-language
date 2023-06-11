import "./App.css";
import Header from "./components/Header";
import Section from "./components/section";
import { LanguageContextWrapper } from "./context/languageContext";

function App() {
  return (
    <LanguageContextWrapper>
      <div className="App">
        <Header />
        <Section />
      </div>
    </LanguageContextWrapper>
  );
}

export default App;
