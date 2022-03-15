import React from 'react';
import { useFormik } from 'formik';
import * as Yup from "yup";
import './Signup.css';

const Signup = ({ getInfo }) => {
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            favSeason: "",
        },

        validationSchema: Yup.object({
            firstName: Yup.string().required("First name can't be empty!").matches(/^[a-zA-Z]+$/, "Alphabets only"),
            lastName: Yup.string().required("Last name can't be empty!").matches(/^[a-zA-Z]+$/, "Alphabets only"),
            email: Yup.string().email("Invalid email address").required("Email can't be empty!"),
            password: Yup.string().required("Password can't be empty!").matches(/^(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?#&])[A-Za-z\d$@$!%#*?&]/, "Must contain at least 1 Alphabet, 1 Number, 1 Special Character and 1 Upper case letter"),
        }),

        onSubmit: () => {
            const info = {
                valid: true,
                firstName: formik.values.firstName,
                lastName: formik.values.lastName,
                email: formik.values.email,
                favSeason: formik.values.favSeason,
            };
            getInfo(info);
        }
    });

    return (
        <div className="container mx-auto mt-5" id="Signup-main">
            <form onSubmit={formik.handleSubmit} className="border border-2 rounded" id="signup-form">
            <h1 className="text-center">Sign up</h1>
                <div className="container mt-3">
                    <div className="col">
                        {/*first name*/}
                        <label for="firstName">First Name:</label>
                        <input className="form-control mb-3"
                            id="firstName"
                            name="firstName"
                            type="text"
                            placeholder="First Name"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.firstName} />

                        {/*last name*/}
                        <label for="lastName">Last Name:</label>
                        <input className="form-control mb-3"
                            id="lastName"
                            name="lastName"
                            type="text"
                            placeholder="Last Name"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.lastName} />

                        {/*email*/}
                        <label for="email">Email:</label>
                        <input className="form-control mb-3"
                            id="email"
                            name="email"
                            type="email"
                            placeholder="email@address.domain"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email} />

                        {/*password*/}
                        <label for="password">Password:</label>
                        <input className="form-control mb-3"
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Must contain 1 Number, 1 Special Character and 1 Upper case letter"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password} />

                        {/*favourite season*/}
                        <label for="favSeason">Favourite Season:</label>
                        <select className="form-control mb-3"
                            id="favSeason"
                            name="favSeason"
                            onChange={formik.handleChange}
                            value={formik.values.favSeason}
                            onBlur={formik.handleBlur}
                        >
                            <option value="" label="Select a season">Select a season</option>
                            <option value="Spring" label="Spring">Spring</option>
                            <option value="Summer" label="Summer">Summer</option>
                            <option value="Fall" label="Fall">Fall</option>
                            <option value="Winter" label="Winter">Winter</option>
                        </select>

                        <button type="submit" className="form-control btn btn-primary mb-3">Submit</button>
                    </div>
                </div>
            </form>

            {/*display error message*/}
            <div className="row-md-6 text-danger text-center" id="errorMsg">
                {formik.touched.firstName && formik.errors.firstName ? <p>{formik.errors.firstName}</p> : null}
                {formik.touched.lastName && formik.errors.lastName ? <p>{formik.errors.lastName}</p> : null}
                {formik.touched.email && formik.errors.email ? <p>{formik.errors.email}</p> : null}
                {formik.touched.password && formik.errors.password ? <p>{formik.errors.password}</p> : null}
            </div>
        </div>
    )
}

export default Signup;