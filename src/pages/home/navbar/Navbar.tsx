import "./navbar.scss";

import { IoSettingsSharp } from "react-icons/io5";
import { IoNotifications } from "react-icons/io5";

const Navbar = () => {
	return (
		<div className="navbar">
			<div className="logo">
				<img src="/public/ROTC_Logo.png" alt="" />
				<span>SVCC ROTC UNIT</span>
			</div>
			<div className="icons">
				<div className="notification">
					<IoNotifications className="icon" />
					<span>1</span>
				</div>
				<div className="icon-wrapper">
					<IoSettingsSharp className="icon" />
				</div>
			</div>
		</div>
	);
};

export default Navbar;
