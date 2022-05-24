import GlobalStyles from "./styles/GlobalStyles";
import Header from "./components/Header";
import ScreenUsers from "./pages/ScreenUsers";

import "./style.css";

function App() {
  return (
    <div className="App">
      <Header />
      <ScreenUsers />
      <GlobalStyles />
    </div>
  );
}

export default App;
