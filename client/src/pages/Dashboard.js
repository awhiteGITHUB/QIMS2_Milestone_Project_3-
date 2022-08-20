import React, { useEffect, useState } from 'react'
import jwt from 'jsonwebtoken'
import { useNavigate } from 'react-router-dom'
	//const [record, setRecord] = useState('')

  function App() {
   
    const history = useNavigate()
    const [name, setName] = useState('')
    const [qty, setQty] = useState('')
    const [description, setDescription] = useState('')
  
    async function populateRecord() {
   
      const  rec = await fetch('http://localhost:1337/api/record', {
        method: 'POST',
        headers: {
          'x-access-token': localStorage.getItem('token'),
        },
        body: JSON.stringify({
          name,
          qty,
          description,
        }),
      })
  
      const data = await rec.json()
      if (data.status === 'ok') {
        setName(data.name)
      } else {
        alert(data.error)
      }

    }
    useEffect(() => {
      const token = localStorage.getItem('token')
      if (token) {
        const user = jwt.decode(token)
        if (!user) {
          localStorage.removeItem('token')
          history.replace('/login')
        } else {
          populateRecord()
        }
      }
    },)






    return (
      <div>
        <h1>QIMS Inventory Management </h1>
        <form onSubmit={populateRecord}>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Name"
          />
          <br />
          <input
            value={qty}
            onChange={(e) => setQty(e.target.value)}
            type="number"
            placeholder="QTY"
          />
          <br />
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            placeholder="Description"
          />
          <br />
          <input type="submit" value=" Add Record" />
        </form>
      </div>
    )
  }
  
	

export default App