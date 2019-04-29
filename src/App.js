import React, { Component } from 'react';
import classes from './App.module.sass';
import Item from './components/Item';

class App extends Component {
  state = {
    field: [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, null]],
  };

  componentDidMount() {
    this.startGame();
  }

  moveHandler = value => {
    const valuePos = this.findValue(value);
    const nullPos = this.findValue(null);
    if (!this.isChangeble(valuePos, nullPos)) return;
    const [row1, row2, row3, row4] = this.state.field;
    const newField = [[...row1], [...row2], [...row3], [...row4]];
    newField[valuePos.row][valuePos.colomn] = null;
    newField[nullPos.row][nullPos.colomn] = value;
    this.setState({
      field: newField,
    });
  };

  isChangeble = (valuePos, nullPos) => {
    if (valuePos.row === nullPos.row) {
      if (
        valuePos.colomn === nullPos.colomn + 1 ||
        valuePos.colomn === nullPos.colomn - 1
      ) {
        return true;
      }
      return false;
    } else if (valuePos.colomn === nullPos.colomn) {
      if (
        valuePos.row === nullPos.row + 1 ||
        valuePos.row === nullPos.row - 1
      ) {
        return true;
      }
      return false;
    }
    return false;
  };

  findValue = value => {
    const { field } = this.state;
    for (let row in field) {
      if (field[row].includes(value)) {
        const colomn = field[row].indexOf(value);
        return { row: +row, colomn };
      }
    }
  };

  startGame = () => {
    let startArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, null];
    let field = [];

    for (let i = 15; i >= 0; i--) {
      let idx = Math.floor(Math.random() * (i + 1));
      field = field.concat(startArr.splice(idx, 1));
    }

    for (let i = 0; i < 4; i++) {
      startArr.push(field.splice(0, 4));
    }

    this.setState({
      field: startArr,
    });
  };

  render() {
    const renderField = () => {
      const { field } = this.state;
      const arr = [];
      for (let row in field) {
        for (let i in field[row]) {
          const item = field[row][i];
          arr.push(
            <Item
              key={item + Math.random()}
              value={item}
              moveHandler={() => this.moveHandler(item)}
            />
          );
        }
      }
      return arr;
    };
    return (
      <div className={classes.App}>
        <div className={classes.Field}>{renderField()}</div>
      </div>
    );
  }
}

export default App;
