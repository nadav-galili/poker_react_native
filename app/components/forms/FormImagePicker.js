import React from "react";
import { useFormikContext } from "formik";

import ErrorMessage from "./ErrorMessage";
import ImageInputList from "../ImageInputList";

function FormImagePicker({ name }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  const imageUri = values[name];
  console.log("uuri", imageUri);

  const handleAdd = (uri) => {
    setFieldValue(name, uri);
    console.log(uri);
  };

  // const handleRemove = (uri) => {
  //   setFieldValue(
  //     name,
  //     imageUris.filter((imageUri) => imageUri !== uri)
  //   );
  // };

  return (
    <>
      <ImageInputList
        imageUri={imageUri}
        onAddImage={handleAdd}
        // onRemoveImage={handleRemove}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default FormImagePicker;
