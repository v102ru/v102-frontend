import { FC, useEffect, useState } from "react";
import "./Popular.scss";
import PopularCard from "./popularCard";
import Loader from "../loader";
import Error from "../SiteStates/Error/Error";
import { getEconomics } from "../../../api/api";
import { filterNewsByAlias } from "../../../utils";
import { TFilteredNewsByAlias } from "../../../types/api";

const Popular: FC = ({}) => {
  const [economics, setEconomics] = useState<TFilteredNewsByAlias>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getEconomics()
      .then((economicsRes) => setEconomics(filterNewsByAlias(economicsRes!)))
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  }, []);

  const getContent = () => {
    if (isError) {
      return <Error />;
    }

    if (isLoading) {
      return <Loader />;
    }

    return economics.map((economicCard) => <PopularCard {...economicCard} />);
  };

  return (
    <section className={"popular"}>
      <span className={"popular__heading"}>Экономика</span>
      <div className={"popular__list"}>{getContent()}</div>
    </section>
  );
};

export default Popular;
