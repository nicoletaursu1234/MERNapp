import React, { useState } from 'react'
import { Navbar, Footer } from '../components'
import Message from "../components/Message"
import axios from 'axios'
const Contacts = () => {
  const [message, setMessage]=useState(null)
  const [emailData, setEmailData] = useState(
    {
      fName: "",
      lName: "",
      email: "",
      text: ""
    }
  )

  const onSubmit = e => {
    e.preventDefault()
    axios.post('/contacts', emailData)
      .then(res => {
        const {message}=res.data
        if (!message.msgError) {
          setEmailData(res.data)
          setMessage(message)
          resetForm()
        }
        else {
          setMessage(message)
        }
      })
  }
  const onChange = e => {
    setEmailData({ ...emailData, [e.target.name]: e.target.value })
    console.log(emailData)
  }
  const resetForm = () => {
    setEmailData({ fName: "", lName: "", email: "", text: "" })
  }

  return (
    <div>
      <Navbar />
      <div className="form-header">
        <div className="form-header-inside">
          <h1>Au apărut întrebări?</h1>
          <h3>Contactați-ne!</h3>
        </div>
      </div>
      <div className="container form">
        <form onSubmit={onSubmit}>
          <div className="form-row">
            <div className="col">
              <input type="text" name="fName" value={emailData.fName} onChange={onChange} className="form-control" placeholder="Nume" required />
            </div>
            <div className="col">
              <input type="text" name="lName" value={emailData.lName} onChange={onChange} className="form-control" placeholder="Prenume" required />
            </div>
          </div>
          <div className="form-row">
            <div className="col-12">
              <input type="email" name="email" value={emailData.email} onChange={onChange} className="form-control" placeholder="E-mail" required />
            </div>
          </div>
          <div className="form-group">
            <textarea className="form-control" name="text" value={emailData.text} onChange={onChange} id="exampleFormControlTextarea1" placeholder="Comentarii" rows="3" required></textarea>
          </div>
          <button type="submit" onSubmit={onSubmit} className="btn btn-secondary">Trimite</button>
        </form>
        {message ? <Message message={message} /> : null}
      </div>
      <Footer />
    </div>
  )
}
export default Contacts