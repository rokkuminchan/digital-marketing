import React from "react";
import "./EntryForm.css";
import { useTranslation } from "react-i18next";
import entryValidatation from "./EntryValidatation";
import validate from "./ValidateInfo";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

export default function EntryForm({ data }) {
  const { t } = useTranslation();

  const { handleChange, handleSubmit, values, errors } = entryValidatation(
    EntryForm,
    validate,
    t
  );

  function displayError(errors, field) {
    let error_txt = "";
    if (field === "entry__name") {
      error_txt = errors.entry__name;
    } else {
      if (field === "entry__mail") {
        error_txt = errors.entry__mail;
      } else {
        if (field === "entry__furigana") {
          error_txt = errors.entry__furigana;
        } else {
          if (field === "entry__date") {
            error_txt = errors.entry__date;
          } else {
            if (field === "entry__phone") {
              error_txt = errors.entry__phone;
            } else {
              if (field === "entry__current_job") {
                error_txt = errors.entry__current_job;
              }
            }
          }
        }
      }
    }
    return error_txt;
  }

  return (
    <section className="entry">
      <h3 className="entry__title">{t(data.title)}</h3>
      <form className="form" action={data.action}>
        {data.items.map((item, index) => {
          switch (item.type) {
            case "textarea":
              return (
                <div className="entry__row_area">
                  <div className="entry__label">
                    <label className="">{t(item.label)}</label>
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
                    <label className="">{t(item.label)}</label>
                  </div>
                  <div className="entry__item">
                    <select className="entry__field" name="">
                      {item.option.map((option, index) => {
                        return <option value={option}>{option}</option>;
                      })}
                    </select>
                  </div>
                </div>
              );
            case "radio" /*duyet mang*/:
              return (
                <div className="entry__row">
                  <div className="entry__label">
                    <label className="">{t(item.label)}</label>
                  </div>
                  <div className="entry__item">
                    <div className="entry__field">
                      <RadioGroup row aria-label="position">
                        {item.choices.map((choice, index) => {
                          return [
                            <FormControlLabel
                              value={t(choice)}
                              control={<Radio color="primary" />}
                              label={t(choice)}
                            />,

                            /*<label>
                          <input type="radio" name={item.name} value={t(choice)}/>
                          {t(choice)}
                        </label>*/
                          ];
                        })}
                      </RadioGroup>
                    </div>
                  </div>
                </div>
              );

            default:
              return (
                <div className="entry__row">
                  <div className="entry__label">
                    <label className="">{t(item.label)}</label>
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
                      {displayError(errors, item.placeholder)}
                    </div>
                  </div>
                </div>
              );
          }
        })}
        <input type="submit" value={t(data.submit)} className="entry__btn" />
      </form>
    </section>
  );
}
