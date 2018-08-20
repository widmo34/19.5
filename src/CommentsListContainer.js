import {connect} from 'react-redux';
import Commentslist from './CommentsList';

const mapStateToProps = state => ({
    comments: state.comments
})

export default connect(mapStateToProps)(Commentslist);