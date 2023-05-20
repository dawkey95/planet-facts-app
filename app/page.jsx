import Link from 'next/link';

export default function Home() {
	return (
		<main className='flex flex-col items-center justify-between min-h-screen p-24'>
			<Link href={'/mercury'}>Planet Facts</Link>
		</main>
	);
}
