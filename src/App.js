import "./App.css";
import Tasks from "./components/Tasks";
import AddedTask from "./components/addedTask";

function App() {
  return (
    <div className="App">
      <Tasks />
      <AddedTask />
    </div>
  );
}

export default App;
