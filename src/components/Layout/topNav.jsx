import React from "react"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"
import Button from "@mui/material/Button"
import MenuIcon from "@mui/icons-material/Menu"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';

const topMenu = (role) => {
	const navigate = useNavigate()
	return (
		<div className='flex justify-end gap-x-6'>
			<Button color='inherit' onClick={() => navigate("/")}>
				<HomeIcon />
				主页
			</Button>
			{role === 2 && (
				<Button color='inherit' onClick={() => navigate("/search")}>
					<SearchIcon />
					搜索课程
				</Button>
			)}
			<Button color='inherit' onClick={() => navigate("/user")}>
				<PersonIcon />
				个人中心
			</Button>
		</div>
	)
}
const TopNav = () => {
	const role = useSelector((state) => state.user.role)

	return (
		<div className='w-full h-1/12 min-h-1/12'>
			<AppBar
				position='static'
				sx={{
					background: "linear-gradient(45deg, #2196F3, #21CBF3)",
				}}>
				<Toolbar>
					<IconButton
						size='large'
						edge='start'
						color='inherit'
						aria-label='menu'
						sx={{ mr: 2 }}>
						<MenuIcon />
					</IconButton>

					<Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
						我的导航
					</Typography>
					{topMenu(role)}
				</Toolbar>
			</AppBar>
		</div>
	)
}

export default TopNav
