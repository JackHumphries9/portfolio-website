import mongoose from "mongoose";

const alias = "users";

const UserSchema = new mongoose.Schema({
	email: String,
	password: String,
});

export default mongoose.models[alias] || mongoose.model(alias, UserSchema);
