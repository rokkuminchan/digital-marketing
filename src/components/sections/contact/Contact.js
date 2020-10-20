import React from "react";
import "./Contact";
import Title from "../../common/Title";
import Description from "../../common/Description";

const Contact = ({ data }) => {
  return (
    <section className="contact">
      <Title data={data.title} />
      <Description data={data.description} />
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
