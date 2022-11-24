import Dialogs from './Dialogs'
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogs-reducer'
import StoreContext from '../../StoreContext';

const DialogsContainer = () => {

  return (
    <StoreContext.Consumer>
      {
        (store) => {

          let state = store.getState().dialogPage;

          let onSendMessageClick = () => {
            store.dispatch(sendMessageCreator())
          }
          let onNewMessageChange = (body) => {
            store.dispatch(updateNewMessageBodyCreator(body))
          }

          return <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick} dialogPage={state} />
        }
      }
    </StoreContext.Consumer>
  )
}

export default DialogsContainer;