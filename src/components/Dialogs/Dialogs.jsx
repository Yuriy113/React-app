import classes from './Dialogs.module.css'
import DialogItem from './Dialog/DialogItem'
import Message from './Message/Message'
import { Navigate } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { required, maxLengthCreator } from '../../utils/validators/validators'
import { Textarea } from '../common/FormsConrtols/FormsControls'

const Dialogs = (props) => {

  let state = props.dialogPage;

  let DialogsElements = state.dialogsData.map((user) => {
    return <DialogItem id={user.id} name={user.name}></DialogItem>
  })

  let MessagesElements = state.messagesData.map(message => <Message message={message.message}></Message>)
  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.sendMessage();
  }

  let addNewMessage = (values) => {
    console.log(values.newMessageBody)
    props.sendMessage(values.newMessageBody)
  }

  if (!props.isAuth) return <Navigate to={'/login'} />

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        {DialogsElements}
      </div>

      <div className={classes.messages}>
        <div>{MessagesElements}</div>
        < AddMessageFormRedux onSubmit={addNewMessage} />
      </div>

    </div>
  )
}

const AddMessageForm = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <Field component={Textarea} 
        name={'newMessageBody'} 
        placeholder={'Enter your message'}
        validate={[required, maxLengthCreator(10)]}
        />
        <div>
          <button>
            Send
          </button>
        </div>
      </form>

    </div>
  )

}

const AddMessageFormRedux = reduxForm({
  form: 'message'
})(AddMessageForm)

export default Dialogs;