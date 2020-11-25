import { useState, useEffect } from "react";

const EntryValidatation = (callback, validate, translate) => {
  const [values, setValues] = useState({
    entry__name: "",
    entry__mail: "",
    entry__furigana: "",
    entry__date: "",
    entry__phone: "",
    entry__current_job: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (name, e) => {
    setValues({
      ...values,
      [name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validate(values, translate));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  return { handleChange, handleSubmit, values, errors };
};

export default EntryValidatation;
