import { FormCheckoutPresentation } from "./FormCheckoutPresentation";
import { useFormik } from "formik";
import * as Yup from "yup";

export const FormCheckoutContainer = () => {
  const { handleSubmit, handleChange, errors, values } = useFormik({
    initialValues: {
      nombre: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (data) => {
      console.log(data);
    },
    validationSchema: Yup.object().shape({
      nombre: Yup.string()
        .required("campo obligatorio")
        .min(3, "El nombre debe tener al  menos 3 caracteres")
        .max(
          15,
          "El nombre es demasiado largo, debe tener menos de 15 caracteres"
        ),
      email: Yup.string()
        .email("Escribe un email valido")
        .required("campo obligatorio"),
      password: Yup.string()
        .required("campo obligatorio")
        .matches(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,15}$/, {
          message:
            "Debe tener al menos una letra mayuscula, una letra minuscula, un minimo de 6 caracteres y un maximo de 15 caracteres, un numero y un caracter especial",
        }),
      confirmPassword: Yup.string()
        .required("Campo Obligatorio")
        .oneOf([Yup.ref("password")], "Las contraseñas no coinciden"),
    }),
    validateOnChange: false,
  });

  return (
    <div>
      <FormCheckoutPresentation
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        errors={errors}
        values={values}
      />
    </div>
  );
};
