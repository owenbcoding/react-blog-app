import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";

function App() {
  // const link = "https://github.com/owenbcoding";

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
