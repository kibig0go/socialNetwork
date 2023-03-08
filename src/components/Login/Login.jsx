import React from "react";
import {compose} from "redux";
// import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {connect} from "react-redux";
// import state from "../../redux/state";
// import ProfileContainer from "../Profile/ProfileContainer";
import {Navigate} from "react-router-dom";
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import {login} from "../../redux/reducer/header_reducer";

const MyTextInput = ({ label, ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input>. We can use field meta to show an error
    // message if the field is invalid and it has been touched (i.e. visited)
    const [field, meta] = useField(props);
    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className="text-input" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </>
    );
};

const MyCheckbox = ({ children, ...props }) => {
    // React treats radios and checkbox inputs differently other input types, select, and textarea.
    // Formik does this too! When you specify `type` to useField(), it will
    // return the correct bag of props for you -- a `checked` prop will be included
    // in `field` alongside `name`, `value`, `onChange`, and `onBlur`
    const [field, meta] = useField({ ...props, type: 'checkbox' });
    return (
        <div>
            <label className="checkbox-input">
                <input type="checkbox" {...field} {...props} />
                {children}
            </label>
            {/*{meta.touched && meta.error ? (*/}
            {/*    <div className="error">{meta.error}</div>*/}
            {/*) : null}*/}
        </div>
    );
};


const SignupForm = (props) => {
    return (
        <>
            <h1>Login</h1>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                    rememberMe: false, // added for our checkbox
                }}
                validationSchema={Yup.object({
                    email: Yup.string()
                        .email('Invalid email address')
                        .required('Required'),
                    password: Yup.string()
                        .required('Required')
                })}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert((JSON.stringify(values, null, 2)));
                        console.log(values)
                        setSubmitting(false);
                        props.login(values.email, values.password, values.rememberMe)
                    }, 400);
                }}
            >
                <Form>

                    <MyTextInput
                        label="Email"
                        name="email"
                        type="email"
                        placeholder="some@mail.com"
                    />

                    <MyTextInput
                        label="Password"
                        name="password"
                        type="password"
                        placeholder=""
                    />

                    <MyCheckbox name="rememberMe">
                        Remember me
                    </MyCheckbox>

                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </>
    );
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
const Login = (props) => {
    // console.log(props)

    if (props.isAuth) {
        return <Navigate to='/profile'/>
    }

    return (
        <>
            {/*{props.isAuth ? <ProfileContainer  /> : <h1>Login</h1>} //parasha*/}
            <SignupForm login={props.login}/>
        </>

    )
}

export default compose(connect(mapStateToProps, {login}))(Login);