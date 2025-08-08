import { FC, useContext, useRef, useState } from "react";
import "./SpecProjects.scss";
import FeedCard from "../../../UI/feedCard";
import { SideMenuContext } from "../../../../context/SideMenuContext";

const SpecProjects: FC = ({}) => {
  const { setSideMenuPoped } = useContext<any>(SideMenuContext);

  return (
    <section className={"specProjects"}>
      <section className={"specProjects__content content"}>
        <section className={"content__column content__firstColumn"}>
          <FeedCard
            type={"fullSpecProjects"}
            onClick={setSideMenuPoped}
            heading={"Дачницу из Волгограда оштрафовали за курятник на участке"}
          />
          <FeedCard
            type={"fullSpecProjects"}
            onClick={setSideMenuPoped}
            heading={"Дачницу из Волгограда оштрафовали за курятник на участке"}
          />
          <FeedCard
            type={"fullSpecProjects"}
            onClick={setSideMenuPoped}
            heading={"Дачницу из Волгограда оштрафовали за курятник на участке"}
          />
          <FeedCard
            type={"fullSpecProjects"}
            onClick={setSideMenuPoped}
            heading={"Дачницу из Волгограда оштрафовали за курятник на участке"}
          />
        </section>
        <section className={"content__column content__secondColumn"}>
          <h2 className={"column__heading"}>Спецпроекты</h2>
          <FeedCard
            type={"fullSpecProjects"}
            onClick={setSideMenuPoped}
            heading={"Дачницу из Волгограда оштрафовали за курятник на участке"}
          />
          <FeedCard
            type={"fullSpecProjects"}
            onClick={setSideMenuPoped}
            heading={"Дачницу из Волгограда оштрафовали за курятник на участке"}
          />
          <FeedCard
            type={"fullSpecProjects"}
            onClick={setSideMenuPoped}
            heading={"Дачницу из Волгограда оштрафовали за курятник на участке"}
          />
          <FeedCard
            type={"fullSpecProjects"}
            onClick={setSideMenuPoped}
            heading={"Дачницу из Волгограда оштрафовали за курятник на участке"}
          />
        </section>
      </section>
    </section>
  );
};

export default SpecProjects;
