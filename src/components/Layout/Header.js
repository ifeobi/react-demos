import React from "react";
import mealsImage from "../../assets/martins.jpg";
import classes from './Header.module.css'



const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Daily Goals</h1>        
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="A table full of delicious food" />
      </div>
    </React.Fragment>
  );
};

export default Header;
