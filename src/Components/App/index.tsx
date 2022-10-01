import React from "react";
import { useState } from "react";
import Navigation from "../Navigation";

const App = () => {
	const [page, setPage] = useState("home");

	return (
		<>
			<Navigation page={page} />
		</>
	);
};

export default App;
