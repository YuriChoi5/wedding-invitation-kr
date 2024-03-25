import "./App.css";
import Calendar from "./components/Calendar";
import PhotoSlider from "./components/PhotoSlider";
import Bank from "./pages/Bank";
import Greeting from "./pages/Greeting";
import Main from "./pages/Main";
import Venue from "./pages/Venue";


const image1 = process.env.PUBLIC_URL + "/together_black.jpg";
const image2 = process.env.PUBLIC_URL + "/yuri_black.jpg";
const image3 = process.env.PUBLIC_URL + "/yuri_color.jpg";
const image4 = process.env.PUBLIC_URL + "/dimibo.jpg";
const image5 = process.env.PUBLIC_URL + "/greeting.jpg";
const image6 = process.env.PUBLIC_URL + "/main.jpg";
const image7 = process.env.PUBLIC_URL + "/hold.jpg";
const image8 = process.env.PUBLIC_URL + "/light.jpg";
const image9 = process.env.PUBLIC_URL + "/together_brown.jpg";

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
];

function App() {
  return (
    <div className="App">
      <Main image={image6} />
      <Greeting />
      <Calendar />
      <PhotoSlider images={images} />
      <Venue />
      <Bank />
      <footer>
        <p>&copy; 2024 Yuri Choi. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
