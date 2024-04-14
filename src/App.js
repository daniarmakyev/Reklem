import Header from "./components/Header/Header";
import "./components/MainStyles/style.css"
import GoToDire from "./components/GoToDire/GoToDire";
import AboutUs from "./components/AboutBlock/AboutBlock";



function App() {
  return (
    <div className="App">
      <Header />
      <GoToDire />
      <AboutUs />
    </div>
  );
}

export default App;
