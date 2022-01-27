export function required(parametro) {
    throw new Error(`${parametro}	is a param required`);
}