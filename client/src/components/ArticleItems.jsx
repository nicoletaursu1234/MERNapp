import React, {useContext} from 'react'
import { AuthContext } from '../Context/AuthContext'

const ArticleItems=props => {
    const { user } = useContext(AuthContext)
        return (
            
            <li>
            <form action="/admin/articles/delete"  method="post">
                <h2>{props.article.title}
                {
                    user.role === "admin"
                        ?
                (
                <span>
                <button type="submit"
                        name="deleteButton"  
                        value={props.id}
                        
                        className="btn btn-danger">
                        Delete  
                </button>
                </span>
                )
                : null
                }
                </h2>
                <article>{props.article.content}</article>
            </form>
            </li>
            
        )}
    
    
export default ArticleItems