import classes from './Post.module.css';

const Post = (props) => {

  return (
    <div className={classes.item}>
      <img src='https://avatars.mds.yandex.net/i?id=2a00000179f27f87770a9f0f8b72908269f4-4291891-images-thumbs&n=13' alt="" />
      { props.message }
      <div>
      Likes: { props.likes }
      </div>
    </div>
  )
}



export default Post;