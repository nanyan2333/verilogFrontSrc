import {
	ListItem,
	List,
	ListItemButton,
	Box,
	Button,
	Typography,
	Pagination,
} from "@mui/material"
import { useSelector } from "react-redux"
import { getCourseList } from "@/api/course"
import { useEffect, useMemo, useState } from "react"
import CourseIcon from "@/assets/svg/course.svg"
import Green from "@/assets/svg/green.svg"
import Red from "@/assets/svg/red.svg"

export default function Course() {
	const id = useSelector((state) => state.user.id)
	const [list, setList] = useState([])
	const [page, setPage] = useState(1)
	const pageSize = 7

	const pageList = useMemo(() => {
		return list.slice((page - 1) * pageSize, page * pageSize)
	}, [list, page])

	useEffect(() => {
		getCourseList(id).then((res) => {
			setList(res.data)
		})
	}, [])

	return (
		<Box className='flex flex-col h-full'>
			<List className='flex-1 overflow-auto'>
				{pageList.map((course, index) => (
					<ListItem key={index}>
						<ListItemButton>
							<div className='flex flex-col gap-x-6 gap-y-2'>
								<div className='flex flex-row gap-x-2'>
									<img src={Green} alt='' />
									<span className='text-center'>进行中</span>
								</div>
								<Typography variant='body1' component='div'>
									{course.title + course.id}
								</Typography>
							</div>
						</ListItemButton>
						<Button>退课</Button>
					</ListItem>
				))}
			</List>
			<div className='fixed bottom-6 left-0 w-full flex justify-center z-10'>
				<Pagination
					count={Math.ceil(list.length / pageSize)}
					color='primary'
					page={page}
					onChange={(event, value) => setPage(value)}
				/>
			</div>
		</Box>
	)
}
