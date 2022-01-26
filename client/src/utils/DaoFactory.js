import {ConnectionFactory} from "./ConnectionFactory";
import NegotiationDAO from "../models/negotiation/NegotiationDAO";

export async function getNegotiationDAO() {
	return await ConnectionFactory.getConnection().then(
		(conn) => new NegotiationDAO(conn)
	);
}

// ON CONSOLE
// DaoFactory.getNegotiationDAO().then((dao) => console.log(dao));
