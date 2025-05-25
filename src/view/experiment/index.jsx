import { useEffect, useState } from "react"
import EditorIDE from "../../components/EditorIDE"
import { useParams } from "react-router-dom"
import { Box, Typography, Divider, Paper } from "@mui/material"
import { downloadFile } from "../../utils/file"
export default function Experiment() {
	const { id } = useParams()

	const [experiment, setExperiment] = useState(null)

	const getExperiment = () => {
		// 模拟从后端拉取实验信息
		return {
			id: 2,
			title: "快速排序实验",
			description: "详情见文件",
			file: [
				{
					id: "exp002file",
					name: "quick-sort.zip",
				},
				{
					id: "exp001file",
					name: "quick.zip",
				},
			],
		}
	}

	useEffect(() => {
		const exp = getExperiment()
		setExperiment(exp)
	}, [])

	const handleChange = (id, content) => {
		console.log(`File ${id} updated`, content)
	}

	if (!experiment) return null

	return (
		<Box className='h-screen w-full overflow-hidden'>
			{/* 顶部实验信息区域 */}
			<Box px={3} py={2} className='bg-white shadow-md pb-2'>
				<Typography variant='h5' fontWeight={600}>
					{experiment.title}
				</Typography>
			</Box>

			<Divider />

			{/* 主体布局区域：左右两栏 */}
			<Box display='flex' height='calc(100vh - 100px)'>
				{/* 左侧：描述 / 文件列表 */}

				<Box
					p={2}
					borderRight='1px solid #eee'
					sx={{ backgroundColor: "#f9fafb" }}
					className='overflow-y-auto hidden md:block w-5/12'>
					<Typography variant='body1' color='text.secondary'>
						{experiment.description}
					</Typography>
					{Array.isArray(experiment.file) && experiment.file.length > 0 && (
						<>
							<Typography variant='subtitle1' gutterBottom>
								📂 文件信息
							</Typography>
							{experiment.file.map((file) => (
								<Paper
									key={file.id}
									elevation={2}
									className='my-2 p-2 cursor-pointer'
									onClick={() => {
										downloadFile(file.id, file.name)
									}}>
									<Typography variant='body1'>{file.name}</Typography>
								</Paper>
							))}
						</>
					)}
				</Box>

				{/* 右侧：代码编辑器 */}
				<Box flex={1} className='overflow-hidden px-2 pt-2'>
					<EditorIDE
						initialFiles={[
							{
								id: "top",
								name: "top.v",
								language: "verilog",
								content: "// module top();",
							},
						]}
						onContentChange={handleChange}
					/>
				</Box>
			</Box>
		</Box>
	)
}
