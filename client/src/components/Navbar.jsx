import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogStatus, setToken } from "../stores/users/action";

function Navbar() {
	const history = useHistory();
	const dispatch = useDispatch();

	const handleLogout = () => {
		dispatch(setLogStatus(false));
		dispatch(setToken(""));
		localStorage.clear();
		history.push("/");
	};

	return (
		<>
			<div
				className="navbar mb-2 shadow-lg bg-neutral text-neutral-content"
				style={{ backgroundColor: "#69DADB" }}
			>
				<div className="px-2 mx-2 navbar-start">
					<span className="text-lg font-bold">
						<Link to="/home">E-Commerce</Link>
					</span>
				</div>
				<div className="navbar-end">
					<Link to={"/add"}>
						<button className="btn btn-ghost btn-sm rounded-btn" href=" ">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								fill="currentColor"
								className="bi bi-plus-square mr-2"
								viewBox="0 0 16 16"
							>
								<path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
								<path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
							</svg>
							Add a Game
						</button>
					</Link>

					<button
						className="btn btn-ghost btn-sm rounded-btn"
						href=" "
						onClick={() => handleLogout()}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							fill="currentColor"
							class="bi bi-box-arrow-right mr-2 mb-1"
							viewBox="0 0 16 16"
						>
							<path
								fill-rule="evenodd"
								d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
							/>
							<path
								fill-rule="evenodd"
								d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
							/>
						</svg>
						Logout
					</button>
				</div>
			</div>
		</>
	);
}

export default Navbar;
