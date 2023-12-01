const initHeader = (): void => {
  const pathname: string = location.pathname;
  const menuLinks: JQuery<HTMLAnchorElement> = $(
    ".header"
  ).find<HTMLAnchorElement>(".header__menu__link");

  for (const menuLink of menuLinks) {
    if (pathname === $(menuLink).attr("href")) {
      $(menuLink).addClass("header__menu__link--active");
      break;
    }
  }
};

export { initHeader };
