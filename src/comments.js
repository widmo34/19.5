// comments.js
import {ADD_COMMENT} from './actions'
import {EDIT_COMMENT} from './actions'
import {REMOVE_COMMENT} from './actions'
import {THUMB_UP_COMMENT} from './actions'
import {THUMB_DOWN_COMMENT} from './actions'


function comments(state = [], action){
  
    switch(action.type){
   
        case ADD_COMMENT:
            return [
                    {
                            id: action.id,
                            text: action.text,
                            votes: action.votes
                    }, ...state.comments
            ]


        case REMOVE_COMMENT:
            return{
               comments: state.comments.filter(comment => comment.id !== action.id)
            } 
           
            

        case EDIT_COMMENT:
            return  {
                comments:  state.comments.map(comment => {
                if(comment.id === action.id){
                    comment.text = action.text
                } 
                return comment;  
                })
            }
        
        case THUMB_UP_COMMENT:  
            return {
                comments:  state.comments.map(comment => {
                if(comment.id === action.id){
                    comment.votes += 1;
                } 
                return comment;  
                })
            }     

        case THUMB_DOWN_COMMENT:  
            return  {
                comments:  state.comments.map(comment => {
                if(comment.id === action.id){
                    comment.votes -= 1;
                } 
                return comment;  
                })
            }        
 
        default:
           return state
    }
}


export default comments;