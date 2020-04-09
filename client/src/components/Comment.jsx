import React, { useState, useContext } from 'react'
import axios from 'axios'
import Message from './Message'
import AuthContext from '../Context/AuthContext'
const Comment = props => {
    const [comment, setComment] = useState({ text: "" })
    const [comments, setComments] = useState([])
    const [message, setMessage] = useState(null)
    const authContext = useContext(AuthContext)

    const onSubmit = e => {
        e.preventDefault()
        axios.post('/forum/comments', comment)
            .then(res => {
                const { message } = res.data
                resetForm()
                if (!message.msgError) {
                    setComments(res.data)
                    setMessage(message)
                }

                else if (message.msgBody === "UnAuthorized") {
                    setMessage(message)
                    authContext.setUser({ username: "", role: "" })
                    authContext.setIsAuthenticated(false)
                }
                else {
                    setMessage(message)
                }
            })
    }

    const onChange = e => {
        setComment({ ...comment, [e.target.name]: e.target.value })
        console.log(comment)
    }
    const resetForm = () => {
        setComment({ text: "" })
    }

    return (
        <div>
            <form className="forum" onSubmit={onSubmit}>
                <textarea
                    className="form-control"
                    placeholder="Comentariu"
                    onChange={onChange}
                    value={comment.text}
                    name="text">
                </textarea>
                <button className="btn btn-primary" type="Submit">Posteaza</button>
            </form>
            {message ? <Message message={message} /> : null}
        </div>
    )
}

export default Comment