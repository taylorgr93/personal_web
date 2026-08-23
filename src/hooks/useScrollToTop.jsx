import { useState, useEffect } from 'react';
import { FiChevronUp } from 'react-icons/fi';

const ScrollToTopButton = () => {
	const [showScroll, setShowScroll] = useState(false);

	useEffect(() => {
		const scrollToTop = () => {
			setShowScroll(window.pageYOffset > 400);
		};

		window.addEventListener('scroll', scrollToTop);
		return () => window.removeEventListener('scroll', scrollToTop);
	}, []);

	const backToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		showScroll && (
			<FiChevronUp
				className="scrollToTop"
				onClick={backToTop}
				style={{
					height: 45,
					width: 45,
					borderRadius: 50,
					right: 50,
					bottom: 50,
					padding: 5,
					cursor: 'pointer',
				}}
				aria-label="Scroll to top"
			/>
		)
	);
};

export default ScrollToTopButton;
