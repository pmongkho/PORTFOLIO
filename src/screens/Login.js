import React from 'react'
import {
	signInWithPopup
} from 'firebase/auth'
import { auth, provider } from '../firebase'
import { Avatar, Button } from '@mui/material'
import '../styles/Login.css'
import { useDispatch, useSelector } from 'react-redux'
import { selectUser, login } from '../redux/features/userSlice'

function Login() {
	const user = useSelector(selectUser)
	const dispatch = useDispatch()
	const signInWithGoogle = async () => {
		signInWithPopup(auth, provider)
			.then((result) => {
				const user = result.user
				dispatch(login(user))
			})
			.catch((error) => {
				console.error(error)
			})
	}
	const signInGuest =  () => {
		dispatch(login({
			displayName: 'Guest',
			photoURL: '../images/yarn.jpeg'
		}))
	}

	return (
		<div className='login'>
			<div className='login__logo'>
				<Avatar
					alt='AzulaTech'
					src={require('../images/logo2.png')}
					sx={{ width: 200, height: 200 }}
				/>
				<div className='sign-in'>
					<Button type='submit' onClick={signInWithGoogle}>
						Sign In
					</Button>
				</div>
				<div className=' guest'>
					<Button type='submit' onClick={signInGuest}>
						Guest
					</Button>
				</div>
			</div>
		</div>
	)
}

export default Login
