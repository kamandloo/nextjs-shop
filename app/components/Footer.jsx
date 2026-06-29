import Link from "next/link";

export default function Footer() {
  return (
    <div className="footer">
      <div>
        <h2>
          <Link href="/" className="footer-logo">
            Amir Kamandloo
          </Link>
        </h2>
      </div>
      <div>
        <ul className="footer-menu">
          <li className="footer-item-red">Cart</li>
          <li className="footer-item-blue">Website</li>
          <li className="footer-item-blue">Instagram</li>
          <li className="footer-item-blue">Linkedin</li>
        </ul>
      </div>
    </div>
  );
}
