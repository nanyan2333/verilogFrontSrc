import {
	Card,
	CardMedia,
	CardContent,
	Typography,
	CardActions,
	Button,
	Box,
} from "@mui/material"

export default function CourseCard({ data, option }) {
	const {
		id = "",
		title = "课程标题",
		description = "课程简介内容，简短介绍课程内容。",
		teacher = "讲师姓名",
		image = "https://source.unsplash.com/400x200/?education",
	} = data || {}

	return (
		<Card
			sx={{
				maxWidth: 345,
				borderRadius: 3,
				boxShadow: 3,
				transition: "transform 0.3s ease",
				"&:hover": {
					transform: "translateY(-5px)",
					boxShadow: 6,
				},
			}}>
			{option?.showImage && (
				<CardMedia
					component='img'
					height='180'
					image={image}
					alt={title}
					sx={{ objectFit: "cover" }}
				/>
			)}
			<CardContent>
				<Typography variant='h6' component='div' gutterBottom noWrap>
					{title}
				</Typography>
				<Typography variant='body2' color='text.secondary' noWrap>
					{description}
				</Typography>
				<Box mt={1}>
					<Typography variant='caption' color='text.secondary'>
						讲师：{teacher}
					</Typography>
				</Box>
			</CardContent>
			{option?.showButton && (
				<CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
					<Button
						size='small'
						variant='contained'
						color='primary'
						onClick={option.onClick || (() => {})}>
						{option.buttonText || ""}
					</Button>
				</CardActions>
			)}
		</Card>
	)
}
