import styles from "./styles.module.css";

function Home() {

	console.log("verim",document.cookie)

	return (
		<div className={styles.container}>
			{document.cookie.split('; ')
  .find((row) => row.startsWith('token='))
  ?.split('=')[1]}
		</div>
	);
}

export default Home;
