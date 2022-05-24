import GlobalStyles from "./styles/GlobalStyles";
import Header from "./components/Header";
import Users from "./pages/Users";

function App() {
  return (
    <div className="App">
      <Header />
      <Users />
      <GlobalStyles />
    </div>
  );
}

export default App;
