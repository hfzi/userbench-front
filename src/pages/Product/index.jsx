// import styles from "./styles.module.css";

function Product(userDetails) {
	const user = userDetails.user;
	console.log("user", user)
/* 	const logout = () => {
		window.open(`http://localhost:4000/auth/logout`, "_self");
	}; */
	return (
		<div>
			sa {user.name}

		</div>
	);
}

export default Product;
