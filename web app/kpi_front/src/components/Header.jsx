import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = () => {

	return (
		<div className="header_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="d-flex justify-content-between align-items-center">
						<div className="d-flex align-items-center">
							<Link to="/">
								<img data-aos="fade-right" src={null} alt="" />
							</Link>

							<div
								data-aos="fade-right"
								data-aos-delay="200"
								className="ms-5 ps-5 d-none d-md-block"
							>
								<p className="mb-0 text-white f35">KPI test investments</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
