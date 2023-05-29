
import { useState } from 'react';
import Card from './components/CardComponents/Card';
import { ThemeProvider } from 'styled-components';
import ThemeContext from './components/context/ThemeContext';
import ContextMain from './components/ContextContent';

function App() {
  const [theme,switchTheme]=useState("dark");
  const handleTheme=()=>{
    switchTheme((state)=>{
      if(state==="dark"){
        return "white";
      }else if(state==="white"){
        return "dark";
      }
    })
  }
  //console.log(theme)
  const themes={
    mode:theme
  }
  return (
    <div>
      <ThemeContext.Provider value={{handleTheme:handleTheme}}>
        <ThemeProvider theme={themes}>
          <Card handleTheme={handleTheme}/>
          {/* <ContextMain/> */}
        </ThemeProvider>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
