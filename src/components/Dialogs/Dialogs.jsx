import classes from './Dialogs.module.css'
import DialogItem from './Dialog/DialogItem'
import Message from './Message/Message'

const Dialogs = (props) => {
  
  let DialogsElements = props.dialogsData.map((user) => {
    return <DialogItem id={user.id} name={user.name}></DialogItem>
  })

  let MessagesElements = props.messagesData.map(message => <Message message={message.message}></Message>)

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        {DialogsElements}
      </div>

      <div className={classes.messages}>
        {MessagesElements}
      </div>

    </div>
  )
}

export default Dialogs;