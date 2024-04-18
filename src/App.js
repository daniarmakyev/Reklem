import Header from "./components/Header/Header";
import "./components/MainStyles/style.css"
import GoToDire from "./components/GoToDire/GoToDire";
import AboutUs from "./components/AboutBlock/AboutBlock";
import MiniInfo from "./components/MiniInfo/MiniInfo";



function App() {
  return (
    <div className="App">
      <Header />
      <GoToDire />
      <AboutUs />
      <MiniInfo />
    </div>
  );
}

export default App;
