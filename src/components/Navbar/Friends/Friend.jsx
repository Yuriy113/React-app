import classes from './Friends.module.css';

const Friend = (props) => {

  return (
    <>
      <li className={classes.listItem}>
        <img className={classes.icon} src="https://place-hold.it/40" alt="" />
        <p className="friendTitle">{props.name}</p>
      </li>
    </>
  )
}

export default Friend;