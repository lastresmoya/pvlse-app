export default async function getPopular(req) {
	const pvlses = await req.db.collection("pvlses").find({});
	return pvlses
}
