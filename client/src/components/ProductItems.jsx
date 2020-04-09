import React, {useContext} from 'react'
import { AuthContext } from '../Context/AuthContext'

const ProductItems=props => {
    const { user } = useContext(AuthContext)
        return (
            <li>
            <form action="/admin/products/delete"  method="post">
                <h2 style={{paddingTop:"50px"}}>{props.product.name}
                {
                    user.role === "admin"
                        ?
                (<span>
                <button type="submit"
                        name="deleteButton"  
                        value={props.id}
                        className="btn btn-danger">
                        Șterge
                </button>
                </span>
                )
                :null}
                </h2>
                <p>{props.product.description}</p>
                <h6>{props.product.price + ' lei'}</h6>
            </form>
            </li>
        )}
    
export default ProductItems