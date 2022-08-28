import { useFormikContext } from "formik";
import React from "react";

import ErrorMessage from "./ErrorMessage";
import ImageInput from "./ImageInput";

function FormImagePicker({ name }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  const handleChange = (uri) => setFieldValue(name, uri);

  return (
    <>
      <ImageInput imageUri={values[name]} onChangeImage={handleChange} />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default FormImagePicker;
