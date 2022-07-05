import "./App.css";
import NewPlayer from "./pages/NewPlayer";
import EditPlayer from "./pages/EditPlayer";
import SearchPlayer from "./pages/SearchPlayer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="box-form">
          Form New Player
          {<NewPlayer />}
        </div>
        <div className="box-form">
          Form Edit Player
          {<EditPlayer />}
        </div>
        <div className="box-form">
          Form Search Player
          {<SearchPlayer />}
        </div>
      </header>
    </div>
  );
}

export default App;