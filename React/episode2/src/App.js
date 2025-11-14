import './App.css';


// App component is the main component of the application
// It is the entry point of the React application
function App() {


  // This is the main component of the application
  // It is called jsx - JavaScript XML
  // JSX allows us to write HTML-like syntax in JavaScript
  const name = 'Amandeep';
  const planet = 'Earth';

  //  Variable with HTML
  const nameWithHtml = <h1>Hello {name}! from {planet}</h1>;

  // Variable with HTML in multiple lines - Need to start with a parenthesis and wrap the content in a single parent element
  const nameWithHtmlMultiLine = (
    <div>
      <h1>Hello {name}!</h1>
      <h2>Welcome to {planet}.</h2>
    </div>
  );

  return (
    <div className="App">
      Hello World!

      BASIC VARIBLES: We have {name} from {planet}

      <br />NAME WITH HTML: {nameWithHtml}

      NAME WITH HTML MULTI-LINE: {nameWithHtmlMultiLine}

      {/* Componenet is called like this */}
      Component Call: <User />

      UserWithProps: <UserWithProps name="Amandeep" age={30} />

    </div>
  );
}

// Simple JS function
const getName = () => {
  return 'Amandeep';
};

// React component - since it returns UI stuff. React components(function) start with a capital letter
const GetNameComponent = () => {
  return <h1>Amandeep!</h1>;
};


const User = () => {
  return (
    <div>
      <h2>I am called from component</h2>
      <h2>I am human being</h2>
    </div>
  );
}


// React component props are used to pass data to components
// Props are like function arguments, but for React components
// They allow you to pass data from a parent component to a child component
const UserWithProps = (props) => {
  return (
    <div>
      <h2>I am called from component with {props.name}</h2>
      <h2>My age is {props.age}</h2>
    </div>
  );
}

export default App;
