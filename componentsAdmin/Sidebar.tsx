import { useRouter } from "next/router";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/images/logo.png";
import { auth } from "../firebase.config"

export interface NavbarProps { }

export default function Navbar(props: NavbarProps) {
  const router = useRouter();

  const hanleLogout = () => {
    auth.signOut().then(() => {
      router.push("/admin");
    }).catch((error) => {
      console.error('Đăng xuất thất bại:', error);
    });
  };
  return (
    <div>
      <div className="sidebar">
        <div className="sidebar_logo">
          <Link href='/'><Image src={logo} alt="Logo" className="sidebar_logo_images" /></Link>
        </div>
        <ul className="sidebar_menu">
          <li
            onClick={() => router.push("/admin/allJd")}
            className={
              router.pathname === "/admin/allJd" ? "active" : "li_custom"
            }
          >
            <Link href="/admin/allJd">All Job Description</Link>
          </li>
          <li
            onClick={() => router.push("/admin/addJd")}
            className={
              router.pathname === "/admin/addJd" ? "active" : "li_custom"
            }
          >
            <Link href="/admin/addJd">Add Job Description</Link>
          </li>
          <li
            onClick={() => router.push("/admin/emails")}
            className={
              router.pathname === "/admin/emails" ? "active" : "li_custom"
            }
          >
            <Link href="/admin/emails">Emails</Link>
          </li>
          <li className="navbar_li li_custom li_logout">
            <button onClick={hanleLogout} className="sidebar_logout_button">
              Log Out
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
