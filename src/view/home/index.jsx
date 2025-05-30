import CourseCard from "../../components/CourseCard"
import { useEffect, useState, useMemo } from "react"
import FormDialog from "../../components/FormDialog"
import { TextField, Pagination } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { getCourseList } from "../../api/course/index"
import Dashboard from "./dashboard"

const formDialogOption = [
	{ id: "title", name: "title", label: "课程名", type: "text" },
	{ id: "description", name: "description", label: "课程描述", type: "text" },
	{ id: "startTime", name: "startTime", label: "开始时间", type: "date" },
	{ id: "endTime", name: "endTime", label: "结束时间", type: "date" },
]
export default function Home() {
	const [courseList, setCourseList] = useState([])
	const [search, setSearch] = useState("")
	const pageSize = 9
	const [page, setPage] = useState(1)

	const userId = useSelector((state) => state.user.id)
	const role = useSelector((state) => state.user.role)
	const navigate = useNavigate()

	useEffect(() => {
		getCourseList(userId).then((res) => {
			setCourseList(res.data)
		})
	}, [])

	// 过滤课程
	const filteredList = useMemo(() => {
		const lower = search.trim().toLowerCase()
		return courseList.filter((course) =>
			course.title.toLowerCase().includes(lower)
		)
	}, [search, courseList])

	const paginatedList = useMemo(() => {
		const start = (page - 1) * pageSize
		return filteredList.slice(start, start + pageSize)
	}, [filteredList, page])

	const formCallBack = (event) => {
		event.preventDefault()
		const formData = new FormData(event.currentTarget)
		const formJson = Object.fromEntries(formData.entries())
		console.log(formJson)
	}

	return (
		<div className='flex p-2'>
			<div className='w-1/4 min-h-full overflow-auto'>
				<Dashboard userId={userId} />
			</div>

			<div className='w-3/4 min-h-full ml-4 overflow-hidden'>
				<div className='flex justify-between mb-4 mt-2'>
					<TextField
						className='w-2/3'
						label='搜索课程名'
						variant='outlined'
						value={search}
						onChange={(e) => {
							setSearch(e.target.value)
							setPage(1) // 搜索后跳转回第一页
						}}
					/>
					{role === 2 && (
						<FormDialog
							title='创建课程'
							callBack={formCallBack}
							fullScreen={true}
							option={formDialogOption}
						/>
					)}
				</div>

				<div className='w-full min-h-full overflow-hidden mt-8 mb-4'>
					{/* 3x3 网格排列课程卡片 */}
					<div className='grid grid-cols-3 gap-x-6 gap-y-8 m-4'>
						{paginatedList.map((item) => (
							<CourseCard
								key={item.id}
								data={item}
								option={{
									showButton: true,
									showImage: false,
									buttonText: "进入课程",
									onClick: () => navigate(`/course/${item.id}`),
								}}
							/>
						))}
					</div>

					{/* 分页器居中显示 */}
					<div className='flex justify-center mt-6'>
						<Pagination
							count={Math.ceil(filteredList.length / pageSize)}
							page={page}
							onChange={(event, value) => setPage(value)}
							color='primary'
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
