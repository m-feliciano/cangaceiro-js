import {ConnectionFactory} from "./ConnectionFactory";
import NegotiationDAO from "../models/negotiation/NegotiationDAO";

export async function getNegotiationDAO() {
	let conn = await ConnectionFactory.getConnection();
    return new NegotiationDAO(conn);
}

// ON CONSOLE
// DaoFactory.getNegotiationDAO().then((dao) => console.log(dao));
