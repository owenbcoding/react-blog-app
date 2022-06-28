import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";

function App() {
  // const title = "Owencodes Blog";
  // const link = "https://github.com/owenbcoding";
  // const likes = 50;
  // const person = { name: 'Owen', age: 26};

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
        {/* <a className="App-link" href="link">
          Owens Github
        </a> */}
      </div>
    </div>
  );
}

export default App;
