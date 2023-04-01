import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
	try {
		if (req.headers.authorization == undefined) {
			return res.status(401).json({ message: "Token not provided" });
		}
		const token = req.headers.authorization.split(" ")[1];

		let decodedData;

		if (token) {
			decodedData = jwt.verify(token, process.env.JWT_SECRET_KEY);

			req.body.id = decodedData.id;
		}

		next();
	} catch (error) {
		return res.status(500).json({ message: error.message });
	}
};

export default authMiddleware;
