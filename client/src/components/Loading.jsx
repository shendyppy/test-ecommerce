function Loading() {
	return (
		<>
			<div className="container text-center mx-auto min-h-screen">
				<lottie-player
					src="https://assets8.lottiefiles.com/private_files/lf30_gdfbwria.json"
					background="transparent"
					speed="1"
					style={{ width: "100%", height: "100%" }}
					loop
					autoplay
				></lottie-player>
			</div>
		</>
	);
}

export default Loading;
