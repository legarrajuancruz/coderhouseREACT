import { FormCheckoutPresentation } from "./FormCheckoutPresentation";
import { useFormik } from "formik";
import * as Yup from "yup";

export const FormCheckoutContainer = () => {
  const { handleSubmit, handleChange } = useFormik({
    initialValues: {
      nombre: "",
      email: "",
      password: "",
    },
    onSubmit: (data) => {
      console.log(data);
    },
  });

  return (
    <div>
      <FormCheckoutPresentation
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};
