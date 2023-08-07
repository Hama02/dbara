import Menu from "./components/Menu/Menu";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <Menu />
    </div>
  );
}

export default App;
