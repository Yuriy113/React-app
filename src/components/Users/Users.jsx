import styles from './users.module.css';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const Users = (props) => {

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return <div>
    <div>
      {pages.map(p => {
        return <span onClick={(e) => { props.onPageChanged(p) }} className={props.currentPage === p ? styles.selectedPage : ''}>{p}</span>
        // return <span className={props.currentPage === p && styles.selectedPage}>{p}</span>
      })}
    </div>
    {
      props.users.map(u => <div key={u.id}>
        <span>
          <div>
            <NavLink to={'/profile/' + u.id}>
              <img className={styles.userPhoto} src={u.photos.small != null ? u.photos.small : "https://www.clipartmax.com/png/full/258-2582267_circled-user-male-skin-type-1-2-icon-male-user-icon.png"} alt="" />
            </NavLink>
          </div>
          <div>
            {u.followed
              ? <button onClick={() => {

                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                  withCredentials: true,
                  headers: {
                    'API-KEY': 'cfa12cc4-b756-4cc2-b349-4e9a8f10c646'
                  }
                })
                  .then(response => {
                    if (response.data.resultCode === 0) {
                      props.unfollow(u.id);
                    }
                  })


              }}>Unollow</button>
              : <button onClick={() => {

                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                  withCredentials: true,
                  headers: {
                    'API-KEY': 'cfa12cc4-b756-4cc2-b349-4e9a8f10c646'
                  }
                })
                  .then(response => {
                    if (response.data.resultCode === 0) {
                      props.follow(u.id);
                    }
                  })



              }}>Follow</button>}

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