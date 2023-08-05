import React from 'react';
import Counter from './CounterNums';
import SetTemperature from './ClickTemp';



const App= () => {
  return (
    <div style={{display:'flex', gap:'200px', flexDirection:"row"}}>
      <Counter/>
      <SetTemperature/>
    </div>
  );
}

export default App;
