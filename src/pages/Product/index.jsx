// import styles from "./styles.module.css";

function Product(userDetails) {
	const user = userDetails.user;
	console.log("user", user)
/* 	const logout = () => {
		window.open(`https://userbench-back.vercel.app/auth/logout`, "_self");
	}; */
	return (
		<div>
			sa {user.name}

		</div>
	);
}

export default Product;
