import React, { useState } from "react";
import Header from "../components/Header";

const Layout = ({ children }) => {

	return (
		<>
			<Header />
			{children}
		</>
	);
};

export default Layout;
