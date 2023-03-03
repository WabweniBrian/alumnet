import * as Yup from "yup";

export const signInValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email address is required"),
  password: Yup.string().required("Password is required").min(4),
});

export const signUpValidationSchema = Yup.object().shape({
  username: Yup.string().required("Username is required").min(4),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email address is required"),
  password: Yup.string().required("Password is required").min(4),
});
