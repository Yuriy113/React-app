import classes from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {

  if(!props.profile) {
    return <Preloader />
  } 

  return (
    <>
      {/* <div>
        <img src="https://i.etsystatic.com/9674889/r/il/7de7a3/650446643/il_1588xN.650446643_t0iz.jpg" style={{ width: '100%' }} alt="" />
      </div> */}

      <div className={classes.descriptionBlock}>
        <img src={props.profile.photos.large} alt="" />
        <p>{props.profile.fullName}</p>
        <ProfileStatus status={'Hello World'}/>
      </div>
    </>
  )
}

export default ProfileInfo;