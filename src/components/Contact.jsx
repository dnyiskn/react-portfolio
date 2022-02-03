import { contactInfo } from "../data";

function Contact() {
  return (
    <section className="max-w-screen-lg my-5 mx-auto p-5 text-slate-900 shadow-sm rounded hover:animation-bounce">
      <h2 className="text-4xl pb-3">Contact</h2>
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
