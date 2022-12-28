import classes from './Dialogs.module.css'
import DialogItem from './Dialog/DialogItem'
import Message from './Message/Message'
import { Navigate } from 'react-router-dom'

const Dialogs = (props) => {

  let state = props.dialogPage;

  let DialogsElements = state.dialogsData.map((user) => {
    return <DialogItem id={user.id} name={user.name}></DialogItem>
  })

  let MessagesElements = state.messagesData.map(message => <Message message={message.message}></Message>)
  let newMessageBody = state.newMessageBody;

  let onSendMessageClick =  () => { 
    props.sendMessage();
   }

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  }

  if (!props.isAuth) return <Navigate to={'/login'} />

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        {DialogsElements}
      </div>

      <div className={classes.messages}>
        <div>{MessagesElements}</div>
        <div>
          <div>
            <textarea value = {newMessageBody} 
                      onChange = {onNewMessageChange}
                      placeholder='Enter your message'></textarea>
          </div>
          <div>
            <button onClick={onSendMessageClick}>
              Send
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Dialogs;