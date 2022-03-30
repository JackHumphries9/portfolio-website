import React from "react";
import { motion } from "framer-motion";
import { FormControl, Input, useColorModeValue } from "@chakra-ui/react";

const FormInput = ({
	onChange,
	placeholder,
	type,
}: {
	onChange: React.ChangeEventHandler<HTMLInputElement>;
	placeholder: string;
	type: "text" | "email";
}) => {
	return (
		<motion.div
			whileHover={{
				scale: 1.01,
			}}
		>
			<FormControl>
				<Input
					_focus={{
						ring: 2,
						ringColor: useColorModeValue("brand.200", "brand.400"),
					}}
					type={type}
					placeholder={placeholder}
					rounded={"full"}
					backgroundColor={useColorModeValue("#F2F2F2", "#272727")}
					onChange={onChange}
					required
				/>
			</FormControl>
		</motion.div>
	);
};

export default FormInput;
