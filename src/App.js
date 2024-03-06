import "./App.css";
import Calendar from "./components/Calendar";
import Bank from "./pages/Bank";
// import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Greeting from "./pages/Greeting";
import Main from "./pages/Main";
import Venue from "./pages/Venue";

function App() {
 
  
  return (
    <div className="App">
      <Main />
      <Greeting />
      {/* <Contact  /> */}
      <Calendar />  

      <Gallery />
      <Venue  />
      <Bank />

    </div>
  );
}

export default App;
