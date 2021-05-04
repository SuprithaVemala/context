import React from "react";
import ContextUser from "./components/ContextUser";
import Display from "./components/display";
import SearchForm from "./components/form";

export const DataContext = React.createContext({str:""});
function App() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          border: "1px solid black",
          paddingLeft: "20px",
          width: "300px",
        }}
      >
        <h2>Component 1</h2>
        <Display></Display>
      </div>
      <div
        style={{
          border: "1px solid black",
          paddingLeft: "20px",
          marginLeft: "10px",
          width: "300px",
        }}
      >
        <h2>Component 2</h2>
        <SearchForm></SearchForm>
      </div>
      <div
        style={{
          border: "1px solid black",
          paddingLeft: "20px",
          marginLeft: "10px",
          width: "300px",
        }}
      >
        <DataContext.Provider value={{str:"Content shared using context"}}>
          <h2>Component 3</h2>
          <ContextUser></ContextUser>
        </DataContext.Provider>
      </div>
    </div>
  );
}

export default App;
