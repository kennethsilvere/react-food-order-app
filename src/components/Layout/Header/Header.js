import classes from "./Header.module.css";
import mealsImg from "../../../assets/meals.jpg";

const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>React Meals</h1>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImg} alt="A table full of delicious food!" />
      </div>
    </>
  );
};

export default Header;
