import React, { useState } from 'react'
import PersonIcon from '@mui/icons-material/Person'
import AddCommentIcon from '@mui/icons-material/AddComment'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import '../styles/Header.css'
import { Avatar } from '@mui/material'
import FolderOpenIcon from '@mui/icons-material/FolderOpen'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout, selectUser } from '../redux/features/userSlice'

function Header() {
	const dispatch = useDispatch()
	const user = useSelector(selectUser)
	const [expand, setExpand] = useState(null)
	const open = Boolean(expand)

	const handleClick = (event) => {
		setExpand(event.currentTarget)
	}

	const handleSignOut = () => {
		dispatch(logout())
	}

	return (
		<div className='header'>
			<div className='header__left'>
				<div className='header__option'>
					{' '}
					<Avatar
						alt='Remy Sharp'
						src={require('../images/logo2.png')}
						sx={{ width: 80, height: 80 }}
					/>
				</div>
			</div>

			<div className='header__middle'>
				<div className='header__option'>
					<a href='#about'>
						<PersonIcon fontSize='50' />
					</a>
					<div className='active'></div>
				</div>
				<div className='header__option'>
					<Link to=''>
						<FolderOpenIcon fontSize='50' />
					</Link>
				</div>
				<div className='active'></div>
			</div>
			<div className='header__right'>
				<p>Hello, {user.displayName}</p>
				<Button
					id='basic-button'
					aria-controls={open ? 'basic-menu' : undefined}
					aria-haspopup='true'
					aria-expanded={open ? 'true' : undefined}
					onClick={handleClick}
				>
					<Avatar src={user.photoURL} alt='profile pic' />
				</Button>
				<Menu
					id='basic-menu'
					anchorEl={expand}
					open={open}
					onClose={() => setExpand(null)}
					MenuListProps={{
						'aria-labelledby': 'basic-button',
					}}
				>
					<MenuItem onClick={handleSignOut}>Logout</MenuItem>
				</Menu>
			</div>
		</div>
	)
}

export default Header
