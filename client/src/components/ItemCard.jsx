import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import swal from "sweetalert";

import formatPrice from "../helpers/formatPrice";
import { deleteItem } from "../stores/items/action";

function ItemCard({ item }) {
	const history = useHistory();
	const dispatch = useDispatch();

	const handleToEdit = (e) => {
		e.preventDefault();
		history.push(`/edit/${item.id}`);
	};

	const handleDeleteGame = (e) => {
		e.preventDefault();
		swal({
			title: "Are you sure?",
			text: "Once deleted, you will not be able to recover this data!",
			icon: "warning",
			buttons: true,
			dangerMode: true,
		})
			.then((willDelete) => {
				if (willDelete) {
					dispatch(deleteItem(item.id));
					swal("Poof! Your data has been deleted!", {
						icon: "success",
					});
				} else {
					swal("Your data is safe!", {
						icon: "info",
					});
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<>
			<div
				className="card bordered m-5 shadow-2xl overflow-auto"
				style={{
					backgroundColor: "#69DADB",
					color: "#000000",
					borderWidth: 2,
					borderColor: "#c7d5e0",
					minWidth: "150px",
				}}
			>
				<ToastContainer
					position="top-right"
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
				/>
				<figure style={{ alignItems: "center", justifyContent: "center" }}>
					<img
						src="https://media.denimio.com/catalog/product/cache/7defaca2e5fbb36dde3ec4a99809f641/1/_/1_s710gx-t_1_.jpg"
						alt="No Data"
						style={{ minHeight: "100px" }}
					/>
				</figure>
				<div
					className="mx-auto card-actions mt-4"
					style={{ alignItems: "center", justifyContent: "center" }}
				>
					<a href=" " onClick={handleToEdit}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="32"
							height="32"
							fill="currentColor"
							class="bi bi-pencil-square mr-4"
							viewBox="0 0 16 16"
						>
							<path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
							<path
								fill-rule="evenodd"
								d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
							/>
						</svg>
					</a>
					<a href=" " onClick={handleDeleteGame}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="32"
							height="32"
							fill="currentColor"
							className="bi bi-trash ml-4"
							viewBox="0 0 16 16"
						>
							<path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
							<path
								fillRule="evenodd"
								d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
							/>
						</svg>
					</a>
				</div>

				<div className="mt-4">
					<h2 className="card-title text-center">{item.name}</h2>
					<h2 className="card-title" style={{ color: "#ffffff" }}>
						{formatPrice(Number(item.price))}
					</h2>
					<p style={{ height: "100px" }}>{item.description}</p>
				</div>
			</div>
		</>
	);
}

export default ItemCard;
