import emailJS from "@emailjs/browser";

const useEmailJS = () => {
	emailJS.init(process.env.NEXT_PUBLIC_EMAILJS_USER_ID);

	const send = async (
		name: string,
		email: string,
		message: string
	): Promise<boolean> => {
		try {
			const req = await emailJS.send(
				"default_service",
				"template_g1ph5p9",
				{
					reply_to: email,
					from_name: name,
					message: message,
				}
			);

			return true;
		} catch (e) {
			return false;
		}
	};

	return send;
};

export default useEmailJS;
