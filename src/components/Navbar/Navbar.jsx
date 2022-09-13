import classes from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import Friends from './Friends/Friends';

const setActive = ({ isActive }) => isActive ? `${classes.active} ${classes.item}` : classes.item;

const Navbar = (props) => {

  return (
    <>
      <div className={classes.nav}>
        <div className={classes.item}>
          <NavLink to='/profile/' className={setActive}>Profile</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to='/messages/' className={setActive}>Messages</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to='/news/' className={setActive}>News</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to='/music/' className={setActive}>Music</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to='/settings/' className={setActive}>Settings</NavLink>
        </div>

      <Friends friends={props.friends}/>

      </div>

    </>
  )
}

export default Navbar;
