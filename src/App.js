import React from 'react';
import classes from './App.module.sass';
import Item from './components/Item';

function App() {
  return (
    <div className={classes.App}>
      <div className={classes.Field}>
        <Item value="15" />
        <Item value="15" />
        <Item value="15" />
        <Item value="15" />
        <Item value="15" />
        <Item value="15" />
        <Item value="15" />
        <Item value="15" />
        <Item value="15" />
        <Item value="15" />
        <Item value="15" />
        <Item value="15" />
        <Item value="15" />
        <Item value="15" />
        <Item value="15" />
      </div>
    </div>
  );
}

export default App;
