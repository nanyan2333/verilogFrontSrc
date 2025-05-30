import { Snackbar, Alert } from "@mui/material"
import { useContext, useState, useCallback, createContext } from "react"

const NotificationContext = createContext(null)

/**
 * 
 * @param {info|success|error|warning} type
 * @param {消息} message
 * @param {显示时间} duration
 * @returns 
 */
export default function NotificationProvider({ children }) {
	const [message, setMessage] = useState("")
	const [type, setType] = useState("info")
	const [duration, setDuration] = useState(3000)

	const [open, setOpen] = useState(false)

	const handleClose = () => setOpen(false)

	const show = useCallback((message, type = "info", duration = 3000) => {
		setMessage(message)
		setType(type)
		setDuration(duration)
		setOpen(true)
	}, [])

	

	return (
		<NotificationContext.Provider value={show}>
			{children}
			<Snackbar
				open={open}
				autoHideDuration={duration}
				onClose={handleClose}
				anchorOrigin={{ vertical: "top", horizontal: "center" }}>
				<Alert onClose={handleClose} severity={type} sx={{ width: "100%" }}>
					{message}
				</Alert>
			</Snackbar>
		</NotificationContext.Provider>
	)
}

export function useNotification() {
	return useContext(NotificationContext)
}
