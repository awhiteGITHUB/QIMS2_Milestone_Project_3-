import { useState } from 'react'

function App() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

async function loginUser(event) {
	event.preventDefault()

const response = await fetch('http://localhost:1337/api/login', {
	method: 'POST',
    headers: {
	'Content-Type': 'application/json',
			},
	body: JSON.stringify({
	email,
	password,
			}),
		})

		const data = await response.json()

        if (data.user) {
			localStorage.setItem('token', data.user)
			//alert('Login successful')
			window.location.href = '/dashboard'
		} else {
			alert('Please check your username and password')
		}
	}

	return (
		<div>
	<h1>Login</h1>
	<h2>Please login to the QIMS system.   </h2>
	<form onSubmit={loginUser}>
		<input
		value={email}
		onChange={(e) => setEmail(e.target.value)}
		type="email"
		placeholder="Email"
		/>
		<br />
		<input
		value={password}
		onChange={(e) => setPassword(e.target.value)}
		type="password"
		placeholder="Password"
		/>
		<br />
		<br />
	    <input type="submit" value="Login" />
		<h3>There is no "Forgot My Password" Function at this time so if you forget your password you are SOL!" </h3>
		</form>
		</div>
	)
}

export default App