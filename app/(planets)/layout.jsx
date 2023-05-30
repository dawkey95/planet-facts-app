import MyNavBar from '@/components/navbar';

export default function PlanetLayout({ children }) {
	return (
		<>
			<MyNavBar />
			{children}
		</>
	);
}
