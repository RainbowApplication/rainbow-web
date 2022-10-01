import React from "react";
import "./styles.scss";
import PageProps from "../../Classes/PageProps";

const Navigation = ({ page }: PageProps) => {
	return (
		<>
			<ul className="nav bg-dark">
				<li className="nav-item">
					<button className="nav-link" onClick={() => {}}>
						Home
					</button>
				</li>
			</ul>
		</>
	);
};

export default Navigation;
