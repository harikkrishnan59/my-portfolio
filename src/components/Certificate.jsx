import React, { useState } from "react";
import { Modal, IconButton, Box, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import FullscreenIcon from "@mui/icons-material/Fullscreen";

const Certificate = ({ ImgSertif }) => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<Box component="div" sx={{ width: "100%" }}>
			<Box
				onClick={handleOpen}
				sx={{
					position: "relative",
					overflow: "hidden",
					borderRadius: 2,
					boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
					transition: "all 0.3s",
					cursor: 'pointer',
                    // MODIFICATION: Enforce a consistent 4:3 aspect ratio for all boxes
                    aspectRatio: '4 / 3', 
					"&:hover": {
						transform: "translateY(-5px)",
						boxShadow: "0 12px 24px rgba(0,0,0,0.2)",
						"& .overlay": { opacity: 1 },
						"& .hover-content": { opacity: 1 },
						"& .certificate-image": { filter: "contrast(1.05) brightness(1) saturate(1.1)" },
					},
				}}>
				<Box
					sx={{
						position: "relative",
						width: '100%',
                        height: '100%',
						"&::before": {
							content: '""',
							position: "absolute",
							inset: 0,
							backgroundColor: "rgba(0, 0, 0, 0.1)",
							zIndex: 1,
						},
					}}>
					<img
						className="certificate-image"
						src={ImgSertif}
						alt="Certificate"
						style={{
							width: "100%",
                            // MODIFICATION: Set height to 100% to fill the container
							height: "100%", 
							display: "block",
                            // This 'cover' value ensures the image fills the box without distortion
							objectFit: "cover", 
							filter: "contrast(1.10) brightness(0.9) saturate(1.1)",
							transition: "filter 0.3s ease",
						}}
					/>
				</Box>

				<Box
					className="overlay"
					sx={{
						position: "absolute", inset: 0, opacity: 0,
						transition: "all 0.3s ease", zIndex: 2,
						display: 'flex', alignItems: 'center', justifyContent: 'center'
					}}>
					<Box
						className="hover-content"
						sx={{ opacity: 0, transition: "all 0.4s ease", textAlign: "center", color: "white" }}>
						<FullscreenIcon sx={{ fontSize: 40, mb: 1, filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.2))" }} />
						<Typography variant="h6" sx={{ fontWeight: 600, textShadow: "0 2px 4px rgba(0,0,0,0.3)" }}>
							View Certificate
						</Typography>
					</Box>
				</Box>
			</Box>

			<Modal
				open={open}
				onClose={handleClose}
				closeAfterTransition
				sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
				<Box sx={{ position: "relative", width: "auto", maxWidth: "90vw", maxHeight: "90vh", outline: "none" }}>
					<IconButton
						onClick={handleClose}
						sx={{
							position: "absolute", right: 16, top: 16,
							color: "white", bgcolor: "rgba(0,0,0,0.6)", zIndex: 1,
							"&:hover": { bgcolor: "rgba(0,0,0,0.8)", transform: "scale(1.1)" },
						}}
						size="large">
						<CloseIcon sx={{ fontSize: 24 }} />
					</IconButton>
					<img
						src={ImgSertif}
						alt="Certificate Full View"
						style={{ display: "block", maxWidth: "100%", maxHeight: "90vh", margin: "0 auto", objectFit: "contain" }}
					/>
				</Box>
			</Modal>
		</Box>
	);
};

export default Certificate;