import React, { useContext } from 'react'
import Comment from './Comment'
import {AuthContext} from '../Context/AuthContext'

const ForumItems=props=>{

    const {user}=useContext(AuthContext)

    return(
        <div className="forumItem">
        { user._id === props.creator ?
            <span>
            <form action="/forum/delete" method="post">
            <button type="submit"
                        name="deleteButton"  
                        value={props.id}
                        className="btn btn-danger">
                        Șterge
            </button>
            </form>
            </span> : 
            null
        }
        
            <h3>{props.post.title}</h3>
            <p>{props.post.text}</p>
            {props.data.comments && props.data.comments.map((comment)=>
                (
                    <p>
                     {comment.text}
                    </p>
                )
            )}
            <Comment />
        </div>
    )
}

export default ForumItems