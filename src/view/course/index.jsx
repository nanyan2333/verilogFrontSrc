import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import {
	Typography,
	Accordion,
	AccordionSummary,
	AccordionDetails,
	Button,
	Divider,
} from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import DownloadIcon from "@mui/icons-material/Download"
import FormDialog from "../../components/FormDialog"
import { createCourseExperiment,getCourseList } from "../../api/course/index"
import { downloadFile } from "../../utils/file"
import { useNotification } from "../../components/NotificationProvider"

export default function Course() {
	const { id } = useParams()
	const navigate = useNavigate()
	const notify = useNotification()
	const [course, setCourse] = useState(null)
	const experimentFormOptions = [
		{ id: "title", name: "title", label: "实验名", type: "text" },
		{ id: "description", name: "description", label: "实验描述", type: "text" },
		{ id: "startTime", name: "startTime", label: "开始时间", type: "date" },
		{ id: "endTime", name: "endTime", label: "结束时间", type: "date" },
		{ id: "attachment", label: "上传附件", type: "file", name: "files" }, // 新增字段
	]
	const getDetail = async (id) => {
		const res = await getCourseList(id)
		setCourse(res.data)
	}
	const callback = (data) => {
		createCourseExperiment(data).then((res) => {
			notify("创建成功",'success')
		}).catch((error) => {
			notify(error.message,'error')
		})
	}

	useEffect(() => {
		getDetail(id)
	}, [id])

	if (!course) return <Typography sx={{ p: 4 }}>加载中...</Typography>

	return (
		<div className='p-6'>
			<Typography variant='h4' gutterBottom>
				{course.title}
			</Typography>
			<Typography variant='subtitle1' gutterBottom color='text.secondary'>
				{course.description}
			</Typography>
			<div>
				<FormDialog
					title={"新建实验"}
					description={""}
					option={experimentFormOptions}
					callback={callback}
				/>
			</div>
			<Divider sx={{ my: 3 }} />

			<Typography variant='h5' gutterBottom>
				实验内容
			</Typography>

			{course.experiments.map((exp, index) => (
				<Accordion key={index} sx={{ mb: 2 }}>
					<AccordionSummary expandIcon={<ExpandMoreIcon />}>
						<Typography>{exp.title}</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography sx={{ mb: 2 }}>{exp.description}</Typography>
						{exp.file && (
							<Button
								variant='outlined'
								startIcon={<DownloadIcon />}
								onClick={() => downloadFile(exp.file.id, exp.file.name)}>
								下载实验文件
							</Button>
						)}
						<Button
							variant='outlined'
							onClick={() => navigate(`/experiment/${exp.id}`)}>
							完成实验
						</Button>
					</AccordionDetails>
				</Accordion>
			))}
		</div>
	)
}
