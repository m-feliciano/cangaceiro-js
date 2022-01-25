class DaoFactory {
	static async getNegotiationDAO() {
		const conn = await ConnectionFactory.getConnection();
		return new NegotiationDAO(conn);
	}
}

// ON CONSOLE
// DaoFactory.getNegotiationDAO().then((dao) => console.log(dao));
