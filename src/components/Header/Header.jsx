import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <header className={classes.header}>
      <img src="https://img-fotki.yandex.ru/get/9111/107612177.a1c/0_cfd5f_a60e90bf_XL.png" alt="" />

      <div className={classes.loginBlock}>
        {props.isAuth ? props.email
          : <NavLink to={'/login'}>Login</NavLink>
        }

      </div>
    </header>
  )
}

export default Header;