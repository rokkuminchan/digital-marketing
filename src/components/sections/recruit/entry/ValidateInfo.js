export default function ValidateInfo(values, translate) {
  let errors = {};

  if (!values.entry__name.trim()) {
    errors.entry__name = translate("entry__required_error_message");
  }

  if (!values.entry__mail.trim()) {
    errors.entry__mail = translate("entry__required_error_message");
  } else if (!/\S+@\S+\.\S+/.test(values.entry__mail)) {
    errors.entry__mail = translate("entry__email_invalid_error_message");
  }

  if (!values.entry__furigana.trim()) {
    errors.entry__furigana = translate("entry__required_error_message");
  }

  if (!values.entry__date.trim()) {
    errors.entry__date = translate("entry__required_error_message");
  }

  if (values.entry__phone.trim() && !/[0-9]{11}/.test(values.entry__phone)) {
    errors.entry__phone = translate("entry__required_error_message");
  }

  if (!values.entry__current_job.trim()) {
    errors.entry__current_job = translate("entry__required_error_message");
  }

  if (!values.entry__gender.trim()) {
    errors.entry__gender = translate("entry__required_error_message");
  }

  return errors;
}
