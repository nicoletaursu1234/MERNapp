import React from 'react'
import { Link } from 'react-router-dom'

const AdminPanel = () => {
    return (
        <div className="admin-panel">
            <header className="lessons">
                <h1>Admin Panel</h1>
            </header>
            <section> 
            <ul>
                <Link to="/admin/products">Editează produsele</Link><br />
                <Link to="/admin/articles">Editează articolele</Link><br />
            </ul>
            </section>
        </div>
    )
}
export default AdminPanel