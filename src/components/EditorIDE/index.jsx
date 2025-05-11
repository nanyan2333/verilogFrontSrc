import React, { useState, useMemo } from "react"
import Editor from "@monaco-editor/react"
import {
	AppBar,
	Tabs,
	Tab,
	Box,
	IconButton,
	Toolbar,
	Tooltip,
} from "@mui/material"
import AddIcon from "@mui/icons-material/Add"
import CloseIcon from "@mui/icons-material/Close"
import { v4 as uuidv4 } from "uuid"
import FormDialog from "../FormDialog"

const defaultLanguage = "verilog"

export default function EditorIDE({
	initialFiles = [],
	onContentChange,
	theme = "vs-dark",
}) {
	const [files, setFiles] = useState(initialFiles)
	const [activeId, setActiveId] = useState(initialFiles[0]?.id || null)

	const activeFile = useMemo(
		() => files.find((f) => f.id === activeId),
		[activeId, files]
	)

	const handleChangeContent = (value) => {
		const updated = files.map((file) =>
			file.id === activeId ? { ...file, content: value } : file
		)
		setFiles(updated)
		onContentChange?.(activeId, value)
	}

	const handleNewFile = (name) => {
		const newId = uuidv4()
		const newFile = {
			id: newId,
			name: name,
			language: defaultLanguage,
			content: "",
		}
		setFiles([...files, newFile])
		setActiveId(newId)
	}

	const handleCloseFile = (id, e) => {
		e.stopPropagation()
		const newFiles = files.filter((f) => f.id !== id)
		setFiles(newFiles)
		if (id === activeId && newFiles.length > 0) {
			setActiveId(newFiles[0].id)
		} else if (newFiles.length === 0) {
			setActiveId(null)
		}
	}

    const dialogCallback = (event)=>{
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
		const formJson = Object.fromEntries(formData.entries())
        handleNewFile(formJson.name)
    }

	return (
		<Box
			display='flex'
			flexDirection='column'
			height='93%'
        
			borderRadius={2}
			overflow='hidden'
			boxShadow={2}>
			{/* Tab bar with AppBar */}
			<AppBar position='static' color='default' elevation={1}>
				<Toolbar variant='dense' sx={{ minHeight: "auto", pl: 1 }}>
					<Tabs
						value={activeId}
						onChange={(e, id) => setActiveId(id)}
						variant='scrollable'
						scrollButtons='auto'
						sx={{ flexGrow: 1 }}>
						{files.map((file) => (
							<Tab
								key={file.id}
								label={
									<Box display='flex' alignItems='center'>
										{file.name}
										<IconButton
											size='small'
											onClick={(e) => handleCloseFile(file.id, e)}
											sx={{ ml: 1 }}>
											<CloseIcon fontSize='small' />
										</IconButton>
									</Box>
								}
								value={file.id}
							/>
						))}
					</Tabs>
					<Tooltip title='新建文件'>
						<FormDialog
							title='新建文件'
							description='请输入文件名'
							option={[
								{
									id: "name",
									name: "name",
									label: "文件名",
									type: "text",
								},
							]}
                            callback={dialogCallback}></FormDialog>
					</Tooltip>
				</Toolbar>
			</AppBar>

			{/* Editor */}
			<Box flexGrow={1} position='relative'>
				{activeFile ? (
					<Editor
						key={activeFile.id}
						value={activeFile.content}
						defaultLanguage={activeFile.language}
						theme={theme}
						onChange={handleChangeContent}
						options={{
							fontSize: 18,
							minimap: { enabled: false },
							automaticLayout: true,
						}}
					/>
				) : (
					<Box p={3} textAlign='center' color='gray'>
						暂无文件，请新建
					</Box>
				)}
			</Box>
		</Box>
	)
}
