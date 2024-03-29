import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import LoadingForm from "../components/LoadingForm";
import Navbar from "../components/Navbar";
import { addItem } from "../stores/items/action";

function Add() {
	const dispatch = useDispatch();
	const history = useHistory();

	const [name, setName] = useState("");
	const [description, setDescription] = useState("");

	const [price, setPrice] = useState("");

	const { loadingAdd } = useSelector((state) => state.item);

	const forName = (e) => {
		e.preventDefault();
		setName(e.target.value);
	};
	const forDescription = (e) => {
		e.preventDefault();
		setDescription(e.target.value);
	};

	const forPrice = (e) => {
		e.preventDefault();
		setPrice(e.target.value);
	};

	const handleToHome = (e) => {
		e.preventDefault();
		history.push("/home");
	};

	const handleAddItem = (e) => {
		e.preventDefault();
		const payload = {
			name,
			description,
			price,
		};

		if (
			payload.name === "" ||
			payload.description === "" ||
			payload.price === ""
		) {
			return toast.error("Please fill all the field!");
		} else if (payload.price < 10000) {
			return toast.error("Minimum price of the price is IDR 10.000");
		} else {
			dispatch(addItem(payload));
			return toast.success("Thank you for your contribution!");
		}
	};

	return (
		<>
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
			<Navbar />
			<div className="m-10">
				<div className="justify-between grid grid-cols-2 ml-2 mr-2">
					<div>
						<h2
							className="mb-5 text-3xl font-bold"
							style={{ color: "#171a21" }}
						>
							Add a New Item
						</h2>
					</div>
					<div className="text-right">
						<button
							className="btn btn-square btn-ghost mt-2"
							onClick={handleToHome}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								fill="currentColor"
								className="bi bi-x-lg"
								viewBox="0 0 16 16"
							>
								<path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z" />
							</svg>
						</button>
					</div>
				</div>
				<div
					className="card shadow-2xl"
					style={{
						backgroundColor: "#FEE440",
						borderWidth: 1,
						borderColor: "#66c0f4",
					}}
				>
					<div className="m-8">
						<form action="" type="submit" onSubmit={handleAddItem}>
							<div className="form-control mt-2">
								<label className="label">
									<span className="label-text" style={{ color: "black" }}>
										Name
									</span>
								</label>
								<input
									className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
									onChange={forName}
									value={name}
								/>
							</div>

							<div className="form-control mt-2">
								<label className="label">
									<span className="label-text" style={{ color: "black" }}>
										Description
									</span>
								</label>
								<textarea
									rows="10"
									className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
									onChange={forDescription}
									value={description}
								/>
							</div>

							<div className="form-control mt-2">
								<label className="label">
									<span className="label-text" style={{ color: "black" }}>
										Price
									</span>
								</label>
								<input
									type="number"
									className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
									onChange={forPrice}
									value={price}
								/>
							</div>

							{loadingAdd ? (
								<LoadingForm />
							) : (
								<div className="form-control mt-6 mb-3">
									<input
										type="submit"
										value="Adding New Item!"
										className="btn"
										style={{ backgroundColor: "#69DADB", color: "#white" }}
									/>
								</div>
							)}
						</form>
					</div>
				</div>
			</div>
		</>
	);
}

export default Add;
