import { Box, Typography } from "@mui/material"
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty"

export default function EmptyPlaceholder() {
	return (
		<Box
			display="flex"
			flexDirection="column"
			alignItems="center"
			justifyContent="center"
			minHeight="150px"
			color="text.secondary"
		>
			<HourglassEmptyIcon fontSize="large" sx={{ mb: 1 }} />
			<Typography variant="body1">暂无实验</Typography>
		</Box>
	)
}
