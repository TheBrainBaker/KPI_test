import React from "react";
import { Link } from "react-router-dom";

const Header = () => {

	return (
		<div className="header_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="d-flex justify-content-between align-items-center">
						<div className="d-flex align-items-center justify-content-between w-100">
							<Link to="/">
								<img className="w-100" data-aos="fade-right" src="https://www.kpi-intelligence.com/wp-content/uploads/2022/01/logo_kpi_ville.png" alt="logo" />
							</Link>

							<div
								data-aos="fade-right"
								data-aos-delay="200"
								className="ms-5 ps-5 d-none d-md-block"
							>
								<p className="mb-0 text-white f35">KPI test investments</p>
							</div>
							

							<Link to="/" className="text-decoration-none text-white f20">
								<a>investments</a>
							</Link>

							<Link to="/charts" className="text-decoration-none text-white f20">
								<a>charts</a>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
