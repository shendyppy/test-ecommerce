import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingForm from "../components/LoadingForm";
import { logining } from "../stores/users/action";

function Login() {
	const history = useHistory();
	const dispatch = useDispatch();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { loadingLogin } = useSelector((state) => state.user);

	const forEmail = (e) => {
		e.preventDefault();
		setEmail(e.target.value);
	};
	const forPaswword = (e) => {
		e.preventDefault();
		setPassword(e.target.value);
	};

	const handleLogin = (e) => {
		e.preventDefault();

		const payload = {
			email,
			password,
		};

		if (payload.email === "" || payload.password === "") {
			toast.error("Your login is fail!", {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		} else {
			dispatch(logining(payload, history, toast));
		}
	};

	return (
		<>
			<ToastContainer />

			<div className="card shadow-2xl bg-base-500 m-16 mt-32">
				<div className="card-body" style={{ backgroundColor: "#f7f7f7" }}>
					<form action="" type="submit" onSubmit={handleLogin}>
						<div className="text-center">
							<h1 className="mb-3 text-4xl font-bold">Login</h1>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text" style={{ color: "#69DADB " }}>
									Email
								</span>
							</label>
							<input
								type="text"
								placeholder="E-mail"
								className="input input-bordered"
								onChange={forEmail}
								value={email}
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text" style={{ color: "#69DADB " }}>
									Password
								</span>
							</label>
							<input
								type="password"
								placeholder="Password"
								className="input input-bordered"
								onChange={forPaswword}
								value={password}
							/>
						</div>
						{loadingLogin ? (
							<LoadingForm />
						) : (
							<div className="form-control mt-6 mb-3">
								<input
									type="submit"
									value="Masuk"
									className="btn"
									style={{ backgroundColor: "#69DADB" }}
								/>
							</div>
						)}

						<label className="label-text-alt text-center mt-2">
							<p className="text-md">
								Don't have account?{"     "}
								<a href=" " style={{ color: "#6382ff" }} onClick={() => {}}>
									Sign up here.
								</a>
							</p>
						</label>
					</form>
				</div>
			</div>
		</>
	);
}

export default Login;
