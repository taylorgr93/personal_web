const AboutClientSingle = ({ title, image }) => {
	if (!image) {
		return (
			<div className="w-64 py-5 px-10 border bg-secondary-light border-ternary-light dark:border-ternary-dark dark:bg-ternary-dark shadow-sm rounded-lg mb-8 flex items-center justify-center">
				<span className="font-general-medium text-lg text-ternary-dark dark:text-ternary-light text-center">
					{title}
				</span>
			</div>
		);
	}

	return (
		<img
			src={image}
			className="w-64 py-5 px-10 border bg-secondary-light border-ternary-light dark:border-ternary-dark shadow-sm rounded-lg mb-8 cursor-pointer"
			alt={title}
		/>
	);
};

export default AboutClientSingle;
