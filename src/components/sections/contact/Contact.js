import React from "react";
import "./Contact.css";
import Description from "../../common/Description";

const Contact = ({ data }) => {
  return (
    <section className="contact">
      <h3 className="contact_title">{data.title}</h3>
      <p className="contact_description">{data.description}</p>
      <form action={data.action}>
        {data.items.map((item, index) => {
          return (
            <div>
              <input
                className="contact__field"
                key={index}
                type={item.type}
                name={item.name}
                placeholder={item.placeholder}
              />
            </div>
          );
        })}
        <input type="submit" value="送信" className="contact__btn" />
      </form>
    </section>
  );
};
export default Contact;
