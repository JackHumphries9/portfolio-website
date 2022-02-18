import argon2 from "argon2";
import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../lib/dbConnect";
import User from "../../models/User";
import jwt from "jsonwebtoken";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { method } = req;

	await dbConnect();

	switch (method) {
		case "POST":
			try {
				if (req.body && req.body.email && req.body.password) {
					const email: string = req.body.email;
					const password: string = req.body.password;

					const user = await User.findOne({ email: email });

					if (await argon2.verify(user.password, password)) {
						console.log("Password is true");
					} else {
						console.log("Password is false");
					}

					const token = jwt.sign(
						{ _id: user.id, email: user.email },
						process.env.JWT_SECRET,
						{ expiresIn: "10h" }
					);

					res.status(201).json({ success: true, jwt: token });
				} else {
					console.log(req.body);
				}
			} catch (error) {
				console.error(error);
				res.status(400).json({
					success: false,
					message: "An error occured!",
				});
			}
			break;
		default:
			res.status(404);
			break;
	}
}
