import Dialogs from './Dialogs'
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogs-reducer'
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom'
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

let mapStateToProps = (state) => {
    return {
    dialogPage: state.dialogPage,
    isAuth: state.auth.isAuth
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyCreator(body))
    },
    sendMessage: () => {
      dispatch(sendMessageCreator())
    },
  }
}

let AuthRedirectComponent = withAuthRedirect(Dialogs)

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;