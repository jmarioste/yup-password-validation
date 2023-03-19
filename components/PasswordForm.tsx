import React from "react";
import { Field, Formik, Form } from "formik";
import { passwordSchema } from "schema/passwordSchema";
const PasswordForm = () => {
  return (
    <Formik
      initialValues={{ password: "", confirmPassword: "" }}
      onSubmit={(values) => {
        console.log(values);
      }}
      validationSchema={passwordSchema}
    >
      {/* use renderProp to get the all the errrors */}
      {({ errors }) => {
        return (
          <Form className="flex flex-col gap-2">
            <Field name="password" className="input input-bordered"></Field>
            {/* render password error in the UI */}
            {!!errors.password && (
              <p className="text-error">{errors.password}</p>
            )}
            <Field
              name="confirmPassword"
              className="input input-bordered"
            ></Field>
            {/* render confirmPassword error in the UI */}
            {!!errors.confirmPassword && (
              <p className="text-error">{errors.confirmPassword}</p>
            )}
            <button className="btn btn-accent"> Submit </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default PasswordForm;
