import mongoose, { ConnectOptions } from "mongoose";

const MONGO_URI: string = process.env.MONGO_URI;

if (!MONGO_URI) {
	throw new Error(
		"Please define the MONGO_URI environment variable inside .env.local"
	);
}

// Realistically I should implement this in typescript properly
// @ts-ignore
let cached: GlobalConn = global.mongoose;

if (!cached) {
	/* @ts-ignore */
	cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
	if (cached.conn) {
		return cached.conn;
	}

	if (!cached.promise) {
		const opts: ConnectOptions = {
			bufferCommands: false,
		};
		cached.promise = mongoose.connect(MONGO_URI, opts).then((mongoose) => {
			return mongoose;
		});
	}
	cached.conn = await cached.promise;
	return cached.conn;
}

export default dbConnect;
