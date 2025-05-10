import CourseCard from "../../components/CourseCard"
import coursePng from "../../assets/img/CarbonCourse.png"
import { useEffect, useState, useMemo } from "react"
import CourseFormDialog from "../../components/FormDialog"
import { TextField } from "@mui/material"
import {  useNavigate } from "react-router-dom"
export default function TeacherHome() {
	const [courseList, setCourseList] = useState([])
	const [search, setSearch] = useState("")

	const navigate = useNavigate()

	const formDialogOption = [
		{ id: "title", name: "title", label: "课程名", type: "text" },
		{ id: "description", name: "description", label: "课程描述", type: "text" },
		{ id: "startTime", name: "startTime", label: "开始时间", type: "date" },
		{ id: "endTime", name: "endTime", label: "结束时间", type: "date" },
	]

	const formCallBack = (event) => {
		event.preventDefault()
		const formData = new FormData(event.currentTarget)
		const formJson = Object.fromEntries(formData.entries())
		// TODO: send formJson to server
		console.log(formJson)
	}
	const getCourseList = async () => {
		//TODO: get course list from server
		setCourseList([
			{
				id: 1,
				title: "深入浅出算法",
				description: "从零开始掌握数据结构与算法核心概念。",
				teacher: "王小明",
				image: coursePng,
			},
			{
				id: 2,
				title: "深入浅",
				description: "从零开始掌握数据结。",
				teacher: "王",
			},
		])
	}

	useEffect(() => {
		getCourseList()
	}, [])

	const filteredList = useMemo(() => {
		const lower = search.trim().toLowerCase()
		return courseList.filter((course) =>
			course.title.toLowerCase().includes(lower)
		)
	}, [search, courseList])
	return (
		<div>
			<div className='flex justify-between mb-4'>
				<TextField
					className='w-2/3'
					label='搜索课程名'
					variant='outlined'
					value={search}
					onChange={(e) => setSearch(e.target.value)}
				/>
				<CourseFormDialog
					title={"创建课程"}
					description={"创建课程"}
					option={formDialogOption}
					callback={formCallBack}
				/>
			</div>
			{filteredList.map((item, index) => (
				<div key={item.id} className='mb-4'>
					<CourseCard
						data={item}
						option={{
							showButton: true,
							showImage: false,
							buttonText: "进入课程",
							//TODO: 跳转课程页面
							onClick: () => navigate(`/course/${item.id}`),
						}}
					/>
				</div>
			))}
		</div>
	)
}
