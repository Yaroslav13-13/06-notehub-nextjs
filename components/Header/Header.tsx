"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import css from "./Header.module.css";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className={css.header}>
      <Link href="/" className={css.logo}>
        NoteHub
      </Link>
      <nav>
        <ul className={css.nav}>
          <li>
            <Link href="/" className={pathname === "/" ? css.active : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/notes"
              className={pathname === "/notes" ? css.active : ""}
            >
              Notes
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={pathname === "/about" ? css.active : ""}
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
      <button className={css.signIn}>Sign In</button>
    </header>
  );
}
