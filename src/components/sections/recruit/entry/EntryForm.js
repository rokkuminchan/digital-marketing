import React from "react";
import "./EntryForm.css";
import { useTranslation } from "react-i18next";
import entryValidatation from "./EntryValidatation";
import validate from "./ValidateInfo";

export default function EntryForm({ data, location }) {
  const { t } = useTranslation();

  const { handleChange, handleSubmit, values, errors } = entryValidatation(
    EntryForm,
    validate,
    t
  );

  var job = location.pathname.split("/")[
    location.pathname.split("/").length - 2
  ];

  function findJob(job) {
    let jobList = [
      "director",
      "designer",
      "frontend",
      "backend",
      "new-graduate",
    ];
    let result = false;
    jobList.map((item, index) => {
      if (job === item) {
        result = true;
      }
    });
    return result;
  }

  function displayError(errors, field) {
    let error_txt = "";
    switch (field) {
      case "entry__name":
        error_txt = errors.entry__name;
        break;
      case "entry__mail":
        error_txt = errors.entry__mail;
        break;
      case "entry__furigana":
        error_txt = errors.entry__furigana;
        break;
      case "entry__date":
        error_txt = errors.entry__date;
        break;
      case "entry__phone":
        error_txt = errors.entry__phone;
        break;
      case "entry__current_job":
        error_txt = errors.entry__current_job;
        break;
      case "entry__gender":
        error_txt = errors.entry__gender;
        break;
      default:
        break;
    }
    return error_txt;
  }

  function setClassRequired(is_required) {
    if (is_required === "entry__required") {
      return "entry__rect_required";
    } else {
      return "entry__rect_optional";
    }
  }

  function getGender(gender) {
    if (gender === "entry__male") {
      return "男性";
    } else {
      return "女性";
    }
  }

  return !findJob(job) ? (
    findJob(job)
  ) : (
    <section className="entry">
      <h3 className="entry__title">{t(data.title)}</h3>
      <form
        className="entry__form"
        name="entry"
        action={data.action}
        onSubmit={handleSubmit}
      >
        {data.items.map((item, index) => {
          switch (item.type) {
            case "textarea":
              return (
                <div className="entry__row_area">
                  <div className="entry__label">
                    <label className="">
                      {t(item.label)}
                      <rect className={setClassRequired(item.is_required)} />
                    </label>
                  </div>
                  <div className="entry__item">
                    <textarea
                      className="entry__field"
                      key={index}
                      name={item.name}
                    />
                  </div>
                </div>
              );
            case "select":
              return (
                <div className="entry__row">
                  <div className="entry__label">
                    <label className="">
                      {t(item.label)}
                      <rect className={setClassRequired(item.is_required)} />
                    </label>
                  </div>
                  <div className="entry__item">
                    <select
                      className="entry__field"
                      name={item.name}
                      value={t("entry__" + job)}
                      disabled
                    >
                      {item.option.map((option, index) => {
                        return <option value={t(option)}>{t(option)}</option>;
                      })}
                    </select>
                  </div>
                </div>
              );
            case "radio":
              return (
                <div className="entry__row">
                  <div className="entry__label">
                    <label className="">
                      {t(item.label)}
                      <rect className={setClassRequired(item.is_required)} />
                    </label>
                  </div>
                  <div className="entry__item">
                    <div className="entry__field">
                      {item.choices.map((choice, index) => {
                        return [
                          <input
                            
                            className= "entry__tiem-sex"
                            type="radio"
                            name={item.name}
                            value={t(choice)}
                            onChange={(e) => handleChange(item.placeholder, e)}
                          />,
                          <label for={t(choice)}>{t(choice)}</label>,
                          "  ",
                        ];
                      })}
                    </div>
                    <div className="entry__error">
                      {t(displayError(errors, item.placeholder))}
                    </div>
                  </div>
                </div>
              );

            default:
              return (
                <div className="entry__row">
                  <div className="entry__label">
                    <label className="">
                      {t(item.label)}
                      <rect className={setClassRequired(item.is_required)} />
                    </label>
                  </div>
                  <div className="entry__item">
                    <input
                      className="entry__field"
                      key={index}
                      type={item.type}
                      name={item.name}
                      placeholder={t(item.placeholder)}
                      onChange={(e) => handleChange(item.placeholder, e)}
                    />
                    <div className="entry__error">
                      {t(displayError(errors, item.placeholder))}
                    </div>
                  </div>
                </div>
              );
          }
        })}
        <div className="entry__btn">
         <input type="submit" value={t(data.submit)} className="entry__btn1" />
        </div>
      </form>
    </section>
  );
}
