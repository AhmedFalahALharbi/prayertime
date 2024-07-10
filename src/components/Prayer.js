import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function MediaCard({ name, time }) {
	return (
		<Card sx={{ width: "14vw", backgroundColor: "rgba(24, 13, 1, 0.5)", color:"#f0f0f0"}}>
			<CardMedia
				sx={{ height: 50 , color:"white"}}
				title="green iguana"
			/>
			<CardContent>
				<h2>{name}</h2>

				<Typography variant="h2" color="#f0f0f0" >
					{time}
				</Typography>
			</CardContent>
		</Card>
	);
}