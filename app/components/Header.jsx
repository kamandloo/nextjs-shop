"use client";
import Link from "next/link";
import { useContext } from "react";
import { cartContext } from "../contexts/CortContext";

export default function Header() {
  const { cart } = useContext(cartContext);
  return (
    <div className="header">
      <div>
        <h2 className="header-title">
          <Link href="/" className="link-logo">
            Amir Kamandloo
          </Link>
        </h2>
      </div>
      <div>
        <ul className="header-menu">
          <li className="header-item-red">
            <Link href="/cart" className="header-item-red">
              Cart
            </Link>
            {cart.length === 0 ? (
              ""
            ) : (
              <span className="header-item-number">{cart.length}</span>
            )}
          </li>
          <li>
            <Link href="/" className="header-item-blue a">
              Home
            </Link>
          </li>
          <li>
            <a
              href="https://instagram.com/amirmohammadkamandlu3"
              className="header-item-blue a"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://github.com/kamandloo"
              className="header-item-blue a"
            >
              Github
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
