import React from "react";
import ProfileCard from "./components/ProfileCard";
import "./App.css";

function App() {
	return (
		<div className="background">
			<div className="bg-pattern-top"></div>
			<div className="bg-pattern-bottom"></div>

			<ProfileCard></ProfileCard>
		</div>
	);
}

export default App;
