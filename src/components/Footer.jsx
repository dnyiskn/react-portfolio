import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
function Footer() {
  return (
    <div className="flex justify-center items-center my-5">
      <ul className="flex gap-x-5">
        <a
          href="https://github.com/dnyiskn"
          target="_blank"
          rel="noreferrer noopener"
        >
          <li>
            <FontAwesomeIcon
              icon={faGithub}
              size="2x"
              className="hover:animate-bounce hover:text-git"
            />
          </li>
        </a>
        <a
          href="https://www.linkedin.com/in/daniel-isaksen-895483231/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <li>
            <FontAwesomeIcon
              icon={faLinkedinIn}
              size="2x"
              className="hover:animate-bounce hover:text-linkedIn"
            />
          </li>
        </a>
      </ul>
    </div>
  );
}
export default Footer;
