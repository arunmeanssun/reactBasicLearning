import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';

function App() {
  return (
    <div className="App">
      <Greet name="Arun" heroName="Superman">
        <p>The strongest super hero in DC Comics</p>
      </Greet>

      <Greet name="Murali" heroName="Hulk">
        <p>The aggressive Avenger in Marvel Universe</p>
      </Greet>

      <Greet name="Avenash" heroName="Ironman">
        <p>The smart and brainy man in Avengers</p>
      </Greet>

      <Welcome name="Arun" heroName="Superman" />
      <Welcome name="Murali" heroName="Hulk" />
      <Welcome name="Avenash" heroName="Ironman" />

      <Message />

      <Counter />

      <FunctionClick />
      <ClassClick />

      <EventBind />

      <ParentComponent />

      <UserGreeting />
    </div>
  );
}

export default App;
