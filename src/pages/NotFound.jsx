import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<div>
			<h1>404</h1>
			<h2>Not found</h2>
			 <Link className="btn btn-primary" to='/'>Quay lai trang chủ</Link>
		</div>
	);
};

export default NotFound;