import React, { useEffect, useState } from "react";

function Header() {
  const [navtoggle, setNavToggle] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false)

  const onMenuClick = () => {
    setNavToggle(!navtoggle);
  };

  useEffect (() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);
    return () => {
        mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = (mediaQuery) => {
    setIsSmallScreen(mediaQuery.matches)
  };

  return (
    <>
      <main className="fixContainer">
        <nav className="container">
          <figure className="menuIcon">
            <a id="menuIcon" onClick={onMenuClick}>
              <img src="/icon-menu.svg" alt="menu" />
            </a>
          </figure>
          <figure>
            <a href="#">
              <img src="/logo.svg" alt="logo" />
            </a>
          </figure>
          {(!isSmallScreen || navtoggle) && (
            <ul className="minContainer" id="minContainer">
              <li className="lStyle">
                <a href="#">Collections</a>
              </li>
              <li className="lStyle">
                <a href="#">Men</a>
              </li>
              <li className="lStyle">
                <a href="#">Women</a>
              </li>
              <li className="lStyle">
                <a href="#">About</a>
              </li>
              <li className="lStyle">
                <a href="#">Contact</a>
              </li>
            </ul>
          )}
          <figure>
            <a href="">
              <img src="/icon-cart.svg" alt="cart" />
            </a>
          </figure>
          <figure>
            <a href="">
              <img className="fixImg" src="/image-avatar.png" alt="avatar" />
            </a>
          </figure>
        </nav>
        <div className="fixW">
          <hr />
        </div>
      </main>
    </>
  );
}

export default Header;
