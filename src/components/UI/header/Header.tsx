import { FC, useContext, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";

import "./Header.scss";
import CustomLink from "../customLink";
import SocialMediaExpandedList from "../socialMediaExpandedList";








import SectionLink from "../sectionLink";
import { NewsCategoriesContext } from "../../../context/NewsCategoriesContext";
import { useMediaQuery } from "react-responsive";

const Header: FC = ({}) => {
  const mobileHeaderRef = useRef<HTMLElement | null>(null);
  const location = useLocation();
  const isMobile = useMediaQuery({ maxWidth: "1024px" });
  const [isMobileOpen, setMobileOpen] = useState(false);
  const newsCategories = useContext(NewsCategoriesContext);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <header className={"mainHeader"}>
      <section className={`mainHeader_fixed`}>
        <section
          ref={mobileHeaderRef}
          className={`mainHeader__wrapper wrapper`}
        >
          <nav className={"wrapper__navigation navigation"}>
            <CustomLink to="" className={"navigation__logo"}>
              <Logo />
            </CustomLink>
            {/*<div className={"navigation__links links"}>*/}
            {/*  {headerLinks.map((link: ILink) => (*/}
            {/*    <CustomLink*/}
            {/*      className={"links__item"}*/}
            {/*      activeClassName={"links__item_active"}*/}
            {/*      to={link.href}*/}
            {/*    >*/}
            {/*      {link.name}*/}
            {/*    </CustomLink>*/}
            {/*  ))}*/}
            {/*</div>*/}
            <div className={"navigation__rest rest"}>
              {/*<div className={"rest__weather weather"}>*/}
              {/*  <Weather type={"cloudy"} temp={21} />*/}
              {/*</div>*/}
              <div className={"rest__socialMedia"}>
                <SocialMediaExpandedList />
              </div>
              {isMobile && (
                <div className={"rest__buttons buttons"}>
                  {/*<CustomLink className={"buttons__link"} to={""}>*/}
                  {/*  <Edition />*/}
                  {/*</CustomLink>*/}
                  {/*<CustomLink className={"buttons__link"} to={""}>*/}
                  {/*  <Notification />*/}
                  {/*</CustomLink>*/}
                  {/*<CustomLink className={"buttons__link"} to={""}>*/}
                  {/*  <Search />*/}
                  {/*</CustomLink>*/}
                  <div
                    onClick={() => setMobileOpen(!isMobileOpen)}
                    className={"buttons__mobileMenu"}
                  >
                    {isMobileOpen ? <Cancel /> : <Burger />}
                  </div>
                </div>
              )}
            </div>
          </nav>
        </section>
        <section
          className={`mainHeader__mobileLinks mobileLinks ${
            isMobileOpen ? " mobileLinks_opened" : ""
          }`}
        >
          <section className={"mobileLinks__social"}>
            {isMobileOpen ? <SocialMediaExpandedList /> : null}
          </section>
          {/*<section className={"mobileLinks__links links"}>*/}
          {/*  {headerLinks.map((link: ILink) => (*/}
          {/*    <CustomLink*/}
          {/*      className={"links__item"}*/}
          {/*      activeClassName={"links__item_active"}*/}
          {/*      to={link.href}*/}
          {/*    >*/}
          {/*      {link.name}*/}
          {/*    </CustomLink>*/}
          {/*  ))}*/}
          {/*</section>*/}
          {/*<section className={"mobileLinks__rest rest"}>*/}
          {/*  <CustomLink className={"rest__link"} to={""}>*/}
          {/*    <Edition />*/}
          {/*  </CustomLink>*/}
          {/*  <CustomLink className={"rest__link"} to={""}>*/}
          {/*    <Notification />*/}
          {/*  </CustomLink>*/}
          {/*</section>*/}
          <section className={"mobileLinks__sections sections"}>
            {newsCategories &&
              newsCategories.map((category) => (
                <CustomLink
                  className={"sections__link"}
                  to={`/section/${category.alias}`}
                >
                  {category.title}
                </CustomLink>
              ))}
          </section>
        </section>
        {isMobileOpen ? (
          <div
            onClick={() => setMobileOpen(false)}
            className={"mobileLinks__outside"}
          />
        ) : null}
        <section className={"mainHeader__sections sections"}>
          <div className={"sections__list list"}>
            <ScrollingCarousel
              leftIcon={
                <div className={"list__arrow list__leftIcon"}>
                  <RightArrow transform={"scale(-1, 1)"} />
                </div>
              }
              rightIcon={
                <div className={"list__arrow list__rightIcon"}>
                  <RightArrow />
                </div>
              }
            >
              {newsCategories?.map((category) => (
                <SectionLink
                  name={category.title}
                  to={`/section/${category.alias}`}
                />
              )) || []}
            </ScrollingCarousel>
          </div>
        </section>
      </section>
      {/*<section className={"mainHeader__notification notification"}>*/}
      {/*  <div className={"notification__content content"}>*/}
      {/*    <div className={"content__logo"}>*/}
      {/*      <Ruport />*/}
      {/*    </div>*/}
      {/*    /!*<span className={"content__text"}>*!/*/}
      {/*    /!*  Представители АО «КАУСТИК» участвуют в четырех номинациях областного*!/*/}
      {/*    /!*  конкурса «Лучший по профессии»*!/*/}
      {/*    /!*</span>*!/*/}
      {/*  </div>*/}
      {/*</section>*/}
    </header>
  );
};

export default Header;
