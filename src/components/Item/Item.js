import React from 'react';
import classes from './Item.module.sass';

const Item = props => {
  return <div className={classes.Item}>{props.value}</div>;
};

export default Item;
