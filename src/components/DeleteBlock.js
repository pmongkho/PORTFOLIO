import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { db } from "../firebase";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const DeleteBlock = ({ id, username }) => {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = async () => {

			//deleteData
            setAnchorEl(null);
			await deleteDoc(doc(db, "posts", id));

	};

	return (
		<div className="delete-block">
			<MoreVertIcon onClick={handleClick} />{" "}
			<Menu
				id="basic-menu"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					"aria-labelledby": "basic-button",
				}}
			>
				<MenuItem onClick={handleClose}>Delete</MenuItem>
			</Menu>
		</div>
	);
};

export default DeleteBlock;
