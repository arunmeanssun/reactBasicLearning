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
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import "./components/appStyles.css";
import styles from "./components/appStyles.module.css";
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import ParentComponent2 from './components/ParentComponent2';
import MemoComponent from './components/MemoComponent';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import ForwardRefParent from './components/ForwardRefParent';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';

function App() {
  return (
    <div className="App">
      <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1>
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

      <NameList />

      <Stylesheet primary={ true } />

      <Inline />

      <Form />

      <LifecycleA />

      <FragmentDemo />

      <Table />

      <ParentComponent2 />     

      <RefsDemo /> 

      <FocusInput />

      <ForwardRefParent />

      <PortalDemo />
      <ErrorBoundary>
        <Hero heroName="Superman" />
        <Hero heroName="Batman" />
        <Hero heroName="Joker" />
      </ErrorBoundary>
      
      <ClickCounter />

      <HoverCounter />
    </div>
  );
}

export default App;
