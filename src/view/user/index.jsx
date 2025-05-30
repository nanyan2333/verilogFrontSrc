import { Card, CardContent, Avatar, CardHeader } from "@mui/material"
import { useSelector } from "react-redux"
import Manage from "./manage"

export default function User() {
	const { id, role } = useSelector((state) => state.user)
	return (
		<div className='w-full h-full min-h-full min-w-fulll'>
			<Card className='w-full h-full'>
				<CardContent>
					<Manage></Manage>
				</CardContent>
			</Card>
		</div>
	)
}
