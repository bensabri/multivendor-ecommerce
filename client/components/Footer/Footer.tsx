import { FC } from 'react';

const Footer: FC = () => {
	return (
		<>
			<footer className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-200">
				<div className="space-y-4 text-xs text-gray-800">
					<h5 className="font-bold">MES COMMANDES</h5>
					<p>Market Place</p>
					<p>Market Place</p>
					<p>Market Place</p>
					<p>Market Place</p>
					<p>Market Place</p>
				</div>
				<div className="space-y-4 text-xs text-gray-800">
					<h5 className="font-bold">MIEUX NOUS CONNAITRE</h5>
					<p>Market Place</p>
					<p>Market Place</p>
					<p>Market Place</p>
					<p>Market Place</p>
					<p>Market Place</p>
				</div>
				<div className="space-y-4 text-xs text-gray-800">
					<h5 className="font-bold">CONTACT</h5>
					<p>Market Place</p>
					<p>Market Place</p>
					<p>Market Place</p>
					<p>Market Place</p>
					<p>Market Place</p>
				</div>
				<div className="space-y-4 text-xs text-gray-800">
					<h5 className="font-bold">A PROPOS</h5>
					<p>Market Place</p>
					<p>Market Place</p>
					<p>Market Place</p>
					<p>Market Place</p>
					<p>Market Place</p>
				</div>
			</footer>
			<div className="bg-gray-300 text-xs py-3 px-14">
				Copyright 2022 | Market Place | This site is protected by
				reCAPTCHA.
			</div>
		</>
	);
};

export default Footer;
