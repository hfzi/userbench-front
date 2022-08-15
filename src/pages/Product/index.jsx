// import styles from "./styles.module.css";

function Product(userDetails) {
	const user = userDetails.user;
	console.log("user", user)
	return (
		<div>
			sa {user.name}
		</div>
	);
}

export default Product;