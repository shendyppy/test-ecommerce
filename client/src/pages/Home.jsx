import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Navbar from "../components/Navbar";
import Loading from "../components/Loading";
import ItemCard from "../components/ItemCard";
import { fetchItems } from "../stores/items/action";

function Home() {
	const dispatch = useDispatch();

	const { items, loadingFetch } = useSelector((state) => state.item);

	useEffect(() => {
		dispatch(fetchItems());
	}, [dispatch]);

	return (
		<>
			{loadingFetch && <Loading />}

			<Navbar />
			<div>
				<h1 className="text-center text-3xl font-bold mt-10">Item Database</h1>
				<div className="container mx-auto text-center mt-10 mb-10">
					<div className="grid grid-cols-2 ml-10 mr-10">
						{items?.map((item, index) => {
							return <ItemCard item={item} key={index} />;
						})}
					</div>
				</div>
			</div>
		</>
	);
}

export default Home;
