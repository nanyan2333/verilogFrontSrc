import { useEffect, useState } from "react"
import {
	FormControl,
	TextField,
	Button,
	Typography,
	Divider,
} from "@mui/material"
import { useNotification } from "../../../components/NotificationProvider/index"
import { useSelector } from "react-redux"
export default function Account() {
	const { id } = useSelector((state) => state.user)
	const [form, setForm] = useState({
		currentPassword: "",
		newPassword: "",
		confirmPassword: "",
	})
	const notify = useNotification()

	const handleChange = (e) => {
		const { name, value } = e.target
		setForm((prev) => ({ ...prev, [name]: value }))
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		if (form.newPassword !== form.confirmPassword) {
			notify("密码不一致", "error")
			return
		}

		// TODO: 发起修改密码的 API 请求
		console.log("提交表单", form)
	}

	return (
		<div>
			<div>{id}</div>
			<Divider></Divider>
			<div>
				<form onSubmit={handleSubmit} className='max-w-md mx-auto p-4'>
					<Typography variant='h6' gutterBottom>
						修改密码
					</Typography>
					<div className='space-y-4'>
						<div>
							<FormControl fullWidth>
								<TextField
									label='当前密码'
									type='password'
									name='currentPassword'
									value={form.currentPassword}
									onChange={handleChange}
									required
								/>
							</FormControl>
						</div>
						<div>
							<FormControl fullWidth>
								<TextField
									label='新密码'
									type='password'
									name='newPassword'
									value={form.newPassword}
									onChange={handleChange}
									required
								/>
							</FormControl>
						</div>

						<div>
							<FormControl fullWidth>
								<TextField
									label='确认新密码'
									type='password'
									name='confirmPassword'
									value={form.confirmPassword}
									onChange={handleChange}
									required
								/>
							</FormControl>
						</div>

						<div>
							<Button variant='contained' type='submit' fullWidth>
								提交修改
							</Button>
						</div>
					</div>
				</form>
			</div>
		</div>
	)
}
