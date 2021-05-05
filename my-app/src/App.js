import React from "react";

import ReducerComponent from "./components/reducerComponent";
import TODO from "./components/toDo";

/* export const DataContext = React.createContext({str:""}); */
/* function App() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div>
        <Display name="Component 1"></Display>
      </div>
      <div>
        <SearchForm name="Component 2"></SearchForm>
      </div>
      <div>
        <DataContext.Provider value={{str:"Content shared using context"}}>
           <h2>Component 3</h2> 
          <ContextApp></ContextApp>
        </DataContext.Provider>
      </div>
    </div>
  );
} */

const App=()=>{
  return(
    <ReducerComponent></ReducerComponent>
   
  )
}
export default App;
