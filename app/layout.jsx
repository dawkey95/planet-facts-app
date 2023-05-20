import './globals.css';
import { Antonio } from 'next/font/google';
import { League_Spartan } from 'next/font/google';

const antonio = Antonio({
	subsets: ['latin'],
	variable: '--font-antonio',
	weight: ['400', '700'],
});

const spartan = League_Spartan({
	subsets: ['latin'],
	variable: '--font-spartan',
	weight: ['400', '700'],
});

export const metadata = {
	title: 'Planet Facts',
	description: 'Generated by create next app',
	author: 'Dawid Keyser',
	viewport: 'width=device-width, initial-scale=1.0',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body
				className={`bg-black min-h-screen font-spartan ${spartan.variable} ${antonio.variable}`}
			>
				{children}
			</body>
		</html>
	);
}