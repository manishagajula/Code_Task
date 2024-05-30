import "./App.css";
import { Sidebar } from "./Components/Sidebar";
import { Navbar } from "./Components/Navbar";
import { Section } from "./Components/Section";
import { AudioPlayer } from "./Components/AudioPlayer";

function App() {
  return (
    <div className=" bg-violet-950">
      <div className="flex flex-row">
        <Sidebar />

        <div className="flex flex-col">
          <div>
            <Navbar />
          </div>
          <Section />
          <AudioPlayer />
        </div>
      </div>
    </div>
  );
}

export default App;
