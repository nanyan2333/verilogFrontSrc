import * as React from "react"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import DialogTitle from "@mui/material/DialogTitle"
import { Key } from "@mui/icons-material"

// const formDialogOption = [
// 	{ id: "title", name: "title", label: "课程名", type: "text" },
// 	{ id: "description", name: "description", label: "课程描述", type: "text" },
// 	{ id: "startTime", name: "startTime", label: "开始时间", type: "date" },
// 	{ id: "endTime", name: "endTime", label: "结束时间", type: "date" },
// ]
// <CourseFormDialog
// 	title={"创建课程"}
// 	description={"创建课程"}
// 	option={formDialogOption}
// 	callback={formCallBack}
// />
export default function CourseFormDialog({
	title,
	description,
	option,
	callback,
}) {
	const [open, setOpen] = React.useState(false)

	const handleClickOpen = () => {
		setOpen(true)
	}

	const handleClose = () => {
		setOpen(false)
	}

	return (
		<React.Fragment>
			<Button variant='outlined' onClick={handleClickOpen}>
				{title}
			</Button>
			<Dialog
				open={open}
				onClose={handleClose}
				slotProps={{
					paper: {
						component: "form",
						onSubmit: (event) => {
							callback(event)
							handleClose()
						},
					},
				}}>
				<DialogTitle>{title}</DialogTitle>
				<DialogContent>
					<DialogContentText>{description}</DialogContentText>
					{option &&
						option.map((item, index) => (
							<TextField
								key={index}
								autoFocus
								required
								margin='dense'
								id={item.id}
								name={item.name}
								label={item.label}
								type={item.type}
								fullWidth
								variant='standard'
								slotProps={{
									input: item.type === "file" ? { accept: "*/*" } : {},
									inputLabel:
										item.type === "date" || item.type === "file"
											? { shrink: true }
											: {},
								}}
							/>
						))}
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>取消</Button>
					<Button type='submit'>提交</Button>
				</DialogActions>
			</Dialog>
		</React.Fragment>
	)
}
