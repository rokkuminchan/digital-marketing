import React from "react";
import ContactForm from "../sections/contact/ContactForm";

export default function contact({ data }) {
  return <ContactForm data={data.contact} />
}
