import "./App.css";
import Header from "./components/Header";
import { LanguageContextWrapper } from "./context/languageContext";

function App() {
  return (
    <LanguageContextWrapper>
      <div className="App">
        <Header />
      </div>
    </LanguageContextWrapper>
  );
}

export default App;
