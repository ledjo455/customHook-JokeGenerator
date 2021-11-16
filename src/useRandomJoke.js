import { useState, useEffect } from "react";

function useRandomJoke(firstName, lastName, generate) {
  const [joke, setJoke] = useState("");

  useEffect(() => {
    const fetchJoke = async () =>
      await fetch(
        `http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`
      )
        .then((res) => res.json())
        .then((data) => {
          setJoke(data.value.joke.split("&quot;").join('"'));
          //   console.log(data.value.joke);
        });

    fetchJoke();
  }, [firstName, lastName, generate]);
  return joke;
}

export default useRandomJoke;
