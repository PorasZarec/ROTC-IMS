import { useNavigate } from "react-router-dom";
import "./menu.scss";

//import icons
import { TbHomeFilled } from "react-icons/tb";
import { MdPendingActions } from "react-icons/md";
import { FaUsersGear } from "react-icons/fa6";
import { MdAdminPanelSettings } from "react-icons/md";
import { GrNotes } from "react-icons/gr";
import { BsCalendar3 } from "react-icons/bs";
import { MdMessage } from "react-icons/md";
import { IoBriefcaseOutline } from "react-icons/io5";
import { FaFingerprint } from "react-icons/fa6";
import { IoSettingsSharp } from "react-icons/io5";
import { LuDatabaseBackup } from "react-icons/lu";
import { FaCircleArrowLeft } from "react-icons/fa6";

const Menu = () => {
	const navigate = useNavigate();

	const handleLogout = () => {
		// Add any logout logic here (clear tokens, etc.)
		navigate('/login');
	};

	return (
		<div className="menu">
			
			<div className="item">
				<span className="title">HOME</span>
				<div className="listItem">
					<TbHomeFilled className="icon" />
					<span>Home</span>
				</div>
				<div className="listItem">
					<MdPendingActions className="icon" />
					<span>Pending</span>
				</div>
			</div>

			<div className="item">
				<span className="title">ACCESS</span>
				<div className="listItem">
					<FaUsersGear className="icon" />
					<span>Users</span>
				</div>
				<div className="listItem">
					<MdAdminPanelSettings className="icon" />
					<span>Admin Users</span>
				</div>
			</div>

			<div className="item">
				<span className="title">GENERAL</span>
				<div className="listItem">
					<GrNotes className="icon" />
					<span>Notes</span>
				</div>
				<div className="listItem">
					<BsCalendar3 className="icon" />
					<span>Calendar</span>
				</div>
				<div className="listItem">
					<MdMessage className="icon" />
					<span>Messages</span>
				</div>
				<div className="listItem">
					<IoBriefcaseOutline className="icon" />
					<span>Inventory</span>
				</div>
				<div className="listItem">
					<FaFingerprint className="icon" />
					<span>Biometrics</span>
				</div>
			</div>
			
			<div className="item">
				<span className="title">MAINTENANCE</span>
				<div className="listItem">
					<IoSettingsSharp className="icon" />
					<span>Settings</span>
				</div>
				<div className="listItem">
					<LuDatabaseBackup className="icon" />
					<span>Backups</span>
				</div>
			</div>
				<button className="logoutBtn" onClick={handleLogout}>
					<FaCircleArrowLeft className="icon" />
					<span>Logout</span>
				</button>
		</div>
	);
};

export default Menu;
