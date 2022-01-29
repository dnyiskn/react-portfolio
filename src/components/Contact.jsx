import { contactInfo } from "../data";

function Contact() {
  return (
    <section>
      <h2 className="text-4xl">Contact</h2>
      {contactInfo.map((info) => (
        <ul className="text-lg">
          <li>Telephone: {info.phone}</li>
          <li>Email: {info.email}</li>
          <li>
            <a href={info.github}>Github: {info.github}</a>
          </li>
        </ul>
      ))}
    </section>
  );
}
export default Contact;
