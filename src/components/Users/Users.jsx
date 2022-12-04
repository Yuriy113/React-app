import React from "react";
import styles from './users.module.css'
import axios from 'axios'

let Users = (props) => {

  const getUsers = () => {
    if (props.users.length === 0) {
      axios.get('https://social-network.samuraijs.com/api/1.0/users')
        .then(response => {
          console.log(response.data.items)
          props.setUsers(response.data.items)
        })
    }
  }

  return <div>
    <button onClick={getUsers}>Get Users</button>
    {
      props.users.map(u => <div key={u.id}>
        <span>
          <div>
            <img className={styles.userPhoto} src={u.photos.small != null ? u.photos.small : "https://www.clipartmax.com/png/full/258-2582267_circled-user-male-skin-type-1-2-icon-male-user-icon.png"} alt="" />
          </div>
          <div>
            {u.followed ?
              <button onClick={() => { props.unfollow(u.id) }}>Unollow</button> :
              <button onClick={() => { props.follow(u.id) }}>Follow</button>}
          </div>
        </span>
        <span>
          <span>
            <div>{u.name}</div>
            <div>{u.status}</div>
          </span>
          <span>
            <div>{"u.location.country"}</div>
            <div>{"u.location.city"}</div>
          </span>
        </span>
      </div>)
    }
  </div>
}



export default Users;