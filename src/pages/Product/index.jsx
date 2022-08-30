// import styles from "./styles.module.css";

function Product(userDetails) {
	const user =  userDetails.user ? userDetails.user.data : ""
	console.log("user", user)
	return (
		<div>
			sa {user.name && user.name}
		</div>
	);
}

export default Product;