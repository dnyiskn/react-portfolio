import { contactInfo } from "../data";

function Contact() {
  return (
    <section className="max-w-screen-md mt-5 bg-gradient-to-r from-green-800 to-green-500 rounded">
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
