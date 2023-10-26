import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import logo1 from "../public/images/logo1.png";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string>("");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isRenderActive, setIsRenderActive] = useState<boolean>(false)
  const router = useRouter();

  useEffect(() => {
    const pathname = router.pathname;
    if (pathname === "/") {
      setActiveMenu("/");
    } else if (pathname.startsWith("/game")) {
      setActiveMenu("/game");
    } else if (pathname.startsWith("/recruit")) {
      setActiveMenu("/recruit");
    }
    else {
      setActiveMenu(pathname.substr(0));
    }
  }, [router.pathname, isRenderActive]);


  const handleMenuClick = (
    menuName: string,
  ) => {
    const pathname = router.pathname
    const menuNameFull = menuName
    if (pathname === menuNameFull) {
      setIsRenderActive(!isRenderActive) //để active lại cái navbar đang đứng hiện tại khi user click lại đúng thẻ đang đứng
      const windowWidth = window.innerWidth;
      // Kiểm tra điều kiện để đóng menu
      if (windowWidth > 1300) { //1300 là breakpoint active navbar trong css
        setIsMenuOpen(false);
        const checkboxElement = document.getElementById('checkbox') as HTMLInputElement;
        if (checkboxElement) {
          checkboxElement.checked = isMenuOpen;
        }
      } else {
        setIsMenuOpen(!isMenuOpen);
        const checkboxElement = document.getElementById('checkbox') as HTMLInputElement;
        if (checkboxElement) {
          checkboxElement.checked = !isMenuOpen;
        }
      }
    }
    router.push(menuName);
  };


  // bắt sự kiện thay đổi navbar khi thay đổi kích thước màn hình
  useEffect(() => {

    const handleResize = () => {
      // Lấy kích thước màn hình hiện tại
      const windowWidth = window.innerWidth;
      // Kiểm tra điều kiện để đóng menu
      if (windowWidth > 1300) {
        setIsMenuOpen(false);
        const checkboxElement = document.getElementById('checkbox') as HTMLInputElement;
        if (checkboxElement) {
          checkboxElement.checked = isMenuOpen;
        }
      }
    };
    // Đăng ký sự kiện resize để lắng nghe thay đổi kích thước màn hình
    window.addEventListener('resize', handleResize);
    // Hủy đăng ký sự kiện khi component bị unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  useEffect(() => {
    const checkboxElement = document.getElementById('checkbox') as HTMLInputElement;
    if (checkboxElement) {
      checkboxElement.checked = false;
    }
  }, [router.pathname])


  const handleMenuToggle = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className="navbar aos-init aos-animate"
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
    >
      <div
        className="navbar-header"
        data-aos="fade-down"
        data-aos-delay="100"
      >
        <Link href="/">
          <Image src={logo1} alt="Logo" className="navbar-logo" />
        </Link>
        <input type="checkbox" id="checkbox"></input>
        <label onClick={handleMenuToggle} htmlFor="checkbox" className="navbar-toggler">
          <div className="bars" id="bar1"></div>
          <div className="bars" id="bar2"></div>
          <div className="bars" id="bar3"></div>
        </label>
      </div>
      <ul
        className={`navbar-nav ${isMenuOpen ? "open" : "close"} aos-init aos-animate`}
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <li
          className={activeMenu === "/" ? "active" : ""}
          data-aos="fade-down"
          data-aos-delay="100"
        >
          <Link href="/" className="nav_li"
            onClick={() => handleMenuClick("/")}
          >
            Home
          </Link>
        </li>
        <li
          className={activeMenu === "/aboutus" ? "active" : ""}
          data-aos="fade-down"
          data-aos-delay="100"
        >
          <Link
            href="/aboutus"
            onClick={() => handleMenuClick("/aboutus")}
            className="nav_li"
          >
            About
          </Link>
        </li>
        <li
          className={activeMenu === "/game" ? "active" : ""}
          data-aos="fade-down"
          data-aos-delay="100"
        >
          <Link
            href="/game"
            onClick={() => handleMenuClick("/game")}
            className="nav_li"
          >
            Game
          </Link>
        </li>
        <li
          className={activeMenu === "/recruit" ? "active" : ""}
          data-aos="fade-down"
          data-aos-delay="100"
        >
          <Link
            href="/recruit"
            onClick={() => handleMenuClick("/recruit")}
            className="nav_li"
          >
            Recruit
          </Link>
        </li>
        <li
          className={activeMenu === "/contact" ? "active" : ""}
          data-aos="fade-down"
          data-aos-delay="100"
        >
          <Link
            href="/contact"
            onClick={() => handleMenuClick("/contact")}
            className="nav_li"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
