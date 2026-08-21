import { useCountUp } from 'react-countup';
import CounterItem from './CounterItem';

const AboutCounter = () => {
	useCountUp({ ref: 'experienceCounter', end: 6, duration: 2 });
	useCountUp({ ref: 'projectsCounter', end: 30, duration: 2 });
	useCountUp({ ref: 'companiesCounter', end: 5, duration: 2 });

	return (
		<div className="mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm">
			<div className="font-general-medium container mx-auto py-20 block sm:flex sm:justify-between items-center">
				<CounterItem
					title="Years of experience"
					counter={<span id="experienceCounter" />}
					measurement="+"
				/>

				<CounterItem
					title="Projects delivered"
					counter={<span id="projectsCounter" />}
					measurement="+"
				/>

				<CounterItem
					title="Companies worked with"
					counter={<span id="companiesCounter" />}
					measurement=""
				/>
			</div>
		</div>
	);
};

export default AboutCounter;
