import { contactInfo } from "../data";

function Contact() {
  return (
    <section className="max-w-screen-lg my-5 mx-auto p-5 text-slate-900 shadow-sm bg-slate-50 rounded hover:animation-bounce">
      <h2 className="text-4xl pb-3">Contact</h2>
      {contactInfo.map((info) => (
        <ul className="text-lg">
          <li>
            <span className="font-medium">Telephone</span>: {info.phone}
          </li>
          <li>
            <span className="font-medium">Email</span>: {info.email}
          </li>
          <li>
            <a href={info.github}>
              <span className="font-medium">Github</span>: {info.github}
            </a>
          </li>
        </ul>
      ))}
    </section>
  );
}
export default Contact;
