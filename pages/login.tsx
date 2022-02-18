import {
	Box,
	Button,
	Container,
	FormControl,
	FormLabel,
	Heading,
	Input,
	Stack,
	Text,
	useColorModeValue,
} from "@chakra-ui/react";
import { Formik } from "formik";
import * as Yup from "yup";
import * as React from "react";

import MainLayout from "../components/layouts/MainLayout";
import { PasswordField } from "../components/PasswordInput";
import useProcApi, { LoginDto } from "../hooks/useProcApi";
import { ApiResponse } from "apisauce";
import useLogin from "../hooks/useLogin";

const loginSchema = Yup.object().shape({
	email: Yup.string().email().required().label("Email"),
	password: Yup.string().min(6).required().label("Password"),
});

const Login = () => {
	const { login } = useLogin();

	const formSubmit = async (
		values: { email: string; password: string },
		actions: any
	) => {
		const data: ApiResponse<LoginDto> = await useProcApi.login(
			values.email,
			values.password
		);

		if (data.data?.message && !data.data.jwt) {
			actions.setErrors({ password: data.data.message });
			actions.setSubmitting(false);
			return;
		}
		if (data.data?.jwt) {
			login(data.data.jwt);
			actions.setSubmitting(false);
		} else {
			actions.setErrors({ password: "An error occured" });
			actions.setSubmitting(false);
		}
	};

	return (
		<MainLayout title="Login">
			<Container maxW="lg" py="24" px={{ base: "0", sm: "8" }}>
				<Stack spacing="8">
					<Stack spacing="6">
						<Stack
							spacing={{ base: "2", md: "3" }}
							textAlign="center"
						>
							<Heading
								size={{
									base: "md",
									md: "lg",
								}}
							>
								Log in to your account
							</Heading>
						</Stack>
					</Stack>
					<Box
						py={{ base: "0", sm: "8" }}
						px={{ base: "4", sm: "10" }}
						bg={{
							base: "transparent",
							sm: "bg-surface",
						}}
						boxShadow={{
							base: "none",
							sm: useColorModeValue("md", "md-dark"),
						}}
						borderRadius={{ base: "none", sm: "xl" }}
					>
						<Stack spacing="6">
							<Formik
								onSubmit={formSubmit}
								initialValues={{ email: "", password: "" }}
								validationSchema={loginSchema}
							>
								{({
									values,
									errors,
									touched,
									handleChange,
									handleBlur,
									handleSubmit,
									isSubmitting,
									/* and other goodies */
								}) => (
									<form onSubmit={handleSubmit}>
										<Stack spacing="5">
											<FormControl>
												<FormLabel htmlFor="email">
													Email
												</FormLabel>
												<Input
													id="email"
													type="email"
													onChange={handleChange}
													onBlur={handleBlur}
													value={values.email}
												/>
												<Text color="red">
													{errors.email &&
														touched.email &&
														errors.email}
												</Text>
											</FormControl>
											<PasswordField
												onChange={handleChange}
												onBlur={handleBlur}
												value={values.password}
												name="password"
												id="password"
											/>
											<Text color="red">
												{errors.password &&
													touched.password &&
													errors.password}
											</Text>
										</Stack>

										<Stack spacing="6" pt={5}>
											<Button
												isLoading={isSubmitting}
												variant="primary"
												bgColor="#C5A47E"
												type="submit"
											>
												Sign in
											</Button>
										</Stack>
									</form>
								)}
							</Formik>
						</Stack>
					</Box>
				</Stack>
			</Container>
		</MainLayout>
	);
};

export default Login;
