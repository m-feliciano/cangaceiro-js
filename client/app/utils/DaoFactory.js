function getNegotiationDAO() {
	return ConnectionFactory.getConnection().then(
		(conn) => new NegotiationDAO(conn)
	);
}

// ON CONSOLE
// DaoFactory.getNegotiationDAO().then((dao) => console.log(dao));
