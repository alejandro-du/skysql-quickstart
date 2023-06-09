const mariadb = require("mariadb");
const fs = require("fs");

async function main() {
	let serverCert = fs.readFileSync("/Users/alejandro/Downloads/skysql_chain_2022.pem");
	let connection;
	try {
		connection = await mariadb.createConnection({
			host: "dbpgf24938486.sysp0000.db.skysql.net",
			port: 3306,
			database: "demo",
			user: "dbpgf24938486",
			password: "1%E5pTCkW7.SFCZD27P4x7",
			ssl: { ca: serverCert }
		});

		let rows = await connection.query("select * from messages");
		rows.forEach(row => {
			console.log(row.content);
		});

	} catch (error) {
		console.log(error);
	} finally {
		if (connection) {
			await connection.close();
		}
	}
}

main();