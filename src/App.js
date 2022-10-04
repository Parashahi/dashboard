import "./App.scss";
import Midcontent from "./components/Midcontent";
import Navbar from "./components/Navbar";
import Rightcontent from "./components/Rightcontent";
function App() {
  return (
    <>
      <div className="MainHome">
        <Navbar />

        <Midcontent />

        <Rightcontent />
      </div>
    </>
  );
}

export default App;
