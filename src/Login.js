import React from "react"
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { auth, provider } from "./firebase"
import { Avatar, Button } from "@mui/material"
import "./Login.css"
import { useStateValue } from "./StateProvider"
import { actionTypes } from "./Reducer"
import { Link, useNavigate } from "react-router-dom"

function Login() {
	const [state, dispatch] = useStateValue()
	const navigate = useNavigate()
	const signInWithGoogle = async () => {
		signInWithPopup(auth, provider)
			.then((result) => {
				// console.log(result)
				dispatch({
					type: actionTypes.SET_USER,
					user: result.user,
				})
				localStorage.setItem("auth", true)
			})
			.catch((error) => {
				console.log(error)
			})
	}

	return (
		<div className="login">
			<div className="login__logo">
				<Avatar
					alt="AzulaTech"
					src={require("./logo2.png")}
					sx={{ width: 200, height: 200 }}
				/>
				<div className="sign-in">
					<Button type="submit" onClick={signInWithGoogle}>
						Sign In
					</Button>
				</div>

			</div>
		</div>
	)
}

export default Login
