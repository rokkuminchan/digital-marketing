import React from "react";
import "./EntryForm.css";
import { useTranslation } from "react-i18next";

export default function EntryForm({ data }) {
  const { t } = useTranslation();
  return (
    <section className="entry">
      <h3 className="entry__title">{t(data.title)}</h3>
      <form action={data.action}>
        {data.items.map((item, index) => {
          switch (item.type) {
            case "textarea":
              return (
                <div className="entry__row">
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
                      {item.choices.map((choice, index) => {
                        return [
                          <input
                            type="radio"
                            name={item.name}
                            value={t(choice)}
                          />,
                          <label for={t(choice)}>{t(choice)}</label>,
                          "  ",
                        ];
                      })}
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
                    />
                  </div>
                </div>
              );
          }
        })}
        <input
          type="submit"
          value={t(data.submit.value)}
          className="entry__btn"
        />
      </form>
    </section>
  );
}
