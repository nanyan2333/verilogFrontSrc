import {
	Card,
	Avatar,
	CardHeader,
	Divider,
	CardContent,
	Typography,
	List,
	ListItem,
} from "@mui/material"
import { red } from "@mui/material/colors"
import { useState,useEffect } from "react"
import EmptyPlaceholder from "./empty"
import { getUserUndoExperiment } from "../../api/experiment"
import { useNavigate } from "react-router-dom"

export default function Dashboard({ userId }) {
	const [experimentList, setexperimentList] = useState([])
	const navigate = useNavigate()

	const handleClick = (id) => {
		navigate(`/experiment/${id}`)
	}

	useEffect(() => {
		getUserUndoExperiment(userId).then((res) => {
			setexperimentList(res.data)
		})
	}, [])

	return (
		<div className='w-full min-h-full'>
			<Card className='w-full h-full flex flex-col'>
				<CardHeader
					title={
						<Typography variant='h5' component='div'>
							{experimentList.length}个实验进行中
						</Typography>
					}
				/>
				<Divider />
				<CardContent className="flex-1 overflow-auto">
					{experimentList.length === 0 ? (
						<EmptyPlaceholder />
					) : (
						<List>
							{experimentList.map((experiment, index) => (
								<ListItem
									key={index}
									onClick={() => handleClick(experiment.id)}>
									<Typography variant='body1' component='div'>
										{experiment.title}
									</Typography>
								</ListItem>
							))}
						</List>
					)}
				</CardContent>
			</Card>
		</div>
	)
}
