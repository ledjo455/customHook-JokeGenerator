import "./App.css";
import { useState, useRef } from "react";
import useRandomJoke from "./useRandomJoke";

function App() {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);

  const [firstName, setFirstName] = useState("James");
  const [lastName, setlastName] = useState("Taylor");
  const [generate, setGenerate] = useState(false);

  const joke = useRandomJoke(firstName, lastName, generate);

  const generateJoke = (e) => {
    e.preventDefault();
    firstNameRef.current.value
      ? setFirstName(firstNameRef.current.value)
      : setFirstName(firstName);
    lastNameRef.current.value
      ? setlastName(lastNameRef.current.value)
      : setlastName(lastName);
    setGenerate(!generate);
    console.log("first name", firstNameRef.current.value);
  };

  return (
    <div className="App">
      <h1>The API Joke Generator</h1>
      <strong>{joke !== null ? joke : ""}</strong>
      <br />
      <form>
        <input type="text" placeholder="first name" ref={firstNameRef} />
        <input type="text" placeholder="last name" ref={lastNameRef} />
      </form>
      <button onClick={generateJoke}>Generate Joke</button>
    </div>
  );
}

export default App;
