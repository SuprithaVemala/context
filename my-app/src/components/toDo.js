import React, { useReducer } from "react";
const people = [
  { name: "Jay", alive: true },
  { name: "Kailee", alive: true },
  { name: "John", alive: true },
  { name: "Mia", alive: true },
];
const reducer = (people, action) => {
  if (action.type == "chomp") {
    return people.map((person) => {
      if (person.name == action.payload) {
        person.alive = false;
      }
      return person;
    });
  }
  if (action.type == "revive") {
    return people.map((person) => {
      if (person.name == action.payload) {
        person.alive = true;
      }
      return person;
    });
  }
};
/* const { state, dispatch } = useContext(StoreContext); */


export default function TODO() {
    const [state, dispatch] = useReducer(reducer, people);
   /*  function devour(name) {
      dispatch({ type: "chomp", payload: name });
    }
    
    function spitOut(name) {
      dispatch({ type: "revive", payload: name });
    } */
  return (
    <div>
      {state.map((person, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            width: "50%",
            justifyContent: "space-around",
          }}
        >
          <div>{person.name}</div>
          {person.alive ? (
            <div>
              {" "}
              ✨✨ ALIVE! ✨✨{" "}
              <button onClick={() => dispatch({ type: "chomp", payload: person.name })}>
                {" "}
                🐊 DEVOUR 🐊{" "}
              </button>{" "}
            </div>
          ) : (
            <div>
              {" "}
              ☠ ☠ DEAD ☠ ☠{" "}
              <button onClick={() => dispatch({ type: "revive", payload: person.name })}>
                {" "}
                🥵 SPIT OUT 🥵{" "}
              </button>{" "}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
