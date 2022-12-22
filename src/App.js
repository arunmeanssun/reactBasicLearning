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
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User';
import CounterTwo from './components/CounterTwo';
import { UserProvider } from './components/UserContext';
import ComponentA from './components/ComponentA';

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

      <hr/>
      <h2>Passing params to component</h2>

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

      <hr/>
      <h2>React Form Example</h2>
      <Form />

      <hr/>
      <h2>React Lifecyle Example</h2>
      <LifecycleA />
      
      <hr/>
      <FragmentDemo />

      <hr/>
      <h2>React </h2>
      <Table />

      <ParentComponent2 /> 

      <hr/>
      <h2>React Reference Demo</h2>

      <RefsDemo /> 

      <FocusInput />

      <ForwardRefParent />

      <hr/>
      <h2>React Portal Example</h2>

      <PortalDemo />
      
      <hr/>
      <h2>Error Boundary</h2>

      <ErrorBoundary>
        <Hero heroName="Superman" />
        <Hero heroName="Batman" />
        <Hero heroName="Joker" />
      </ErrorBoundary>
      
      <hr/>
      <h2>Higher Order Components </h2>

      <ClickCounter incrementCount="2" />

      <HoverCounter incrementCount="3" />

      <hr/>

      {/*

      <ClickCounterTwo />

      <HoverCounterTwo />

      <User render={(isLoggedIn) => isLoggedIn ? 'Arun' : "Guest" }/> */}


      {/* one way for rendering props method is below 

      <h2>Rendering Props method One</h2>
      <CounterTwo render={(count, incrementCount) => {
        return <ClickCounterTwo count={count} incrementCount={incrementCount} />
      }} />

      <CounterTwo render={(count, incrementCount) => {
        return <HoverCounterTwo count={count} incrementCount={incrementCount} />
      }} /> */}

      {/* Another way for rendering props method is below */}

      <h2>Rendering Props method two</h2>
      <CounterTwo>
        { (count, incrementCount) => {
          return <ClickCounterTwo count={count} incrementCount={incrementCount} />
        }}
      </CounterTwo>

      <CounterTwo>
        { (count, incrementCount) => {
          return <HoverCounterTwo count={count} incrementCount={incrementCount} />
        }}
      </CounterTwo>

      <hr/>
      <h2>React Context Demo</h2>

      <UserProvider value="Arun Kumar S">
        <ComponentA />
      </UserProvider>

      <hr/>
      <h2>React HTTP Example</h2>

      

    </div>
  );
}

export default App;
