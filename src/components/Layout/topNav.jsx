import React from "react"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"
import Button from "@mui/material/Button"
import MenuIcon from "@mui/icons-material/Menu"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

const topMenu = (role) => {
	const navigate = useNavigate()
	if (role === 1) {
		return (
			<Button color='inherit' onClick={() => navigate("/home")}>
				主页
			</Button>
		)
	} else if (role === 2) {
		return (
			<Button color='inherit' onClick={() => navigate("/about")}>
				关于
			</Button>
		)
	}
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
