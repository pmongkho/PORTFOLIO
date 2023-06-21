import './styles/App.css'
import Header from './components/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './screens/Login'
import Feed from './screens/Feed'
import AboutMe from './screens/AboutMe'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout, selectUser } from './redux/features/userSlice'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'

function App() {
	const user = useSelector(selectUser)
	const dispatch = useDispatch()

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				// user is logged in, send the user's details to redux, store the current user in the state
				dispatch(
					login({
						displayName: user.displayName,
						photoUrl: user.photoURL,
					})
				)
			} else {
				dispatch(logout())
			}
		})
	}, [])

	return (
		<div className='app'>
			<Router>
				{!user ? (
					<Login />
				) : (
					<>
						<Header />

						<div className='app__body'>
							<Routes>
								<Route path='/' element={<AboutMe />} />
								{/* <Route path='/feed' element={<Feed />} /> */}
							</Routes>
						</div>
					</>
				)}
			</Router>
		</div>
	)
}

export default App
