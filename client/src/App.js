import { useState} from 'react'
import './App.css';

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function createUser(event) {
    event.preventDefault()
    const response = await fetch('http://localhost:1337/ api/users/create', {
      method: 'POST',
headers: {
  'Content-Type': "application/json "
},
  body: JSON.stringify({
  name,
  email,
  password,

  }),
})

const data = await response.json()

      console.log(data)
  }
  return (

<div>
  <h1>Create Login</h1>
  <form onSubmit={createUser}>
  <input 
    value={name}
    onChange={(e) =>setName(e.target.value)}
    type="text" 
    placeholder="Name"
    /><br />
     <br />
    <input 
    value={email}
    onChange={(e) =>setEmail(e.target.value)}
    type="email" 
    placeholder="Email"
    /><br />
 <br />
    <input 
    value={password}
    onChange={(e) =>setPassword(e.target.value)}
    type="password" 
    placeholder="Password"
    /><br />
    <br />
<input type="submit" value="Submit"/>


  </form>
</div>
)
}

export default App;
