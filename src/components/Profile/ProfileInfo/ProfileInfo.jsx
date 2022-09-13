import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <>
      <div>
        <img src="https://i.etsystatic.com/9674889/r/il/7de7a3/650446643/il_1588xN.650446643_t0iz.jpg" style={{ width: '90%' }} alt="" />
      </div>

      <div className={classes.descriptionBlock}>
        ava+description
      </div>
    </>
  )
}

export default ProfileInfo;