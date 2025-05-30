import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { login } from "../api/auth"
import { setIsLogin, setRole,setUserId } from "../store/modules/userSlice"
import { Button, TextField } from "@mui/material"
import { setToken } from "../utils/cookie"
import { useNotification } from "../components/NotificationProvider"

const Login = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const [id, setId] = useState("")
	const [password, setPassword] = useState("")
	const notify  = useNotification()
	const handleLogin = () => {
		login({ id, password }).then((res) => {
			if (res.data.token && res.data.token !== "") {
				dispatch(setUserId(id))
				dispatch(setRole(res.data.role))
				dispatch(setIsLogin(true))
				setToken(res.data.token)
				notify("登录成功","success")
				navigate("/")
			} else {
				notify("登录失败","error")
			}
		})
	}
	return (
		<div className='min-h-screen bg-gray-100 flex items-center justify-center'>
			<div className='bg-white p-8 rounded-lg shadow-md w-full max-w-md'>
				<div className='mb-6'>
					<h2 className='text-2xl font-bold text-gray-800 text-center'>
						Login
					</h2>
				</div>
				<div className='space-y-4 mb-4'>
					<div>
						<TextField
							label='ID'
							variant='outlined'
							fullWidth
							value={id}
							onChange={(e) => setId(e.target.value)}
						/>
					</div>
					<div>
						<TextField
							label='Password'
							type='password'
							variant='outlined'
							fullWidth
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
				</div>
				<div className='mt-6'>
					<Button
						variant='contained'
						color='primary'
						fullWidth
						className='bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded'
						onClick={handleLogin}>
						登录
					</Button>
				</div>
			</div>
		</div>
	)
}

export default Login
