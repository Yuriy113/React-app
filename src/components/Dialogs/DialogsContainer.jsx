import Dialogs from './Dialogs'
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogs-reducer'
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux'

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

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs)