import React from "react";

import Card from "./component/card.jsx";
import Footer from "./component/footer.jsx";
import Jumbotron from "./component/jumbotron.jsx";
import NavBar from "./component/navBar.jsx";

const Home = () => {
	return (
		<div>
			<NavBar />
			<div className="container">
				<Jumbotron />
				<div className="d-flex">
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
			<Footer />
		</div>
	);
};
export default Home;
