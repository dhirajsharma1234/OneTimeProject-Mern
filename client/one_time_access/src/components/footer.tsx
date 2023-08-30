import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
        <section className="footer">
        <ul>
            <li>
            <Link to="/" className="link-style">home</Link>
            </li>
            <li>
            <Link to="/services" className="link-style">services</Link>
            </li>
            <li>
            <Link to="/about" className="link-style">about</Link>
            </li>
            <li>
            <Link to="/privacy-policy" className="link-style">privacy policy</Link>
            </li>
      </ul>
      <p className="copyright">
            Future Coders @2023
      </p>
        </section>
    </>
  )
}

export default Footer