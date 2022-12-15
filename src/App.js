import logo from './logo.svg';
import './App.css';
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";

function App() {
  return (
    <div className="App">
      <Greet name="Arun" heroName="Superman"> 
        <p>Superman is a greatest DC hero in the world. </p>
      </Greet>
      <Greet name="Murali" heroName="Hulk">
        <p>Hulk is a bulky Avenger. </p>
      </Greet>
      <Greet name="Avenash" heroName="Iron Man">
        <p>Ironman is a Smart and Brainy Man.</p>
      </Greet>
      <Welcome />
      <Hello />
    </div>
  );
}

export default App;
