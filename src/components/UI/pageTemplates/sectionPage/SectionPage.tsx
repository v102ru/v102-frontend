import {
  FC,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import "./SectionPage.scss";
import { useParams } from "react-router-dom";
import { getNewsByAlias } from "../../../../api/api";
import { NewsCategoriesContext } from "../../../../context/NewsCategoriesContext";
import { filterNewsByAlias } from "../../../../utils";
import { SiteError, SiteLoader } from "../../SiteStates";
import InfiniteScroll from "react-infinite-scroller";
import Loader from "../../loader";
import { Section } from "./Section";
import { TSplitNewsBySections } from "./types";
import { splitAdsBySections, splitNewsBySections } from "./utils";

const TAKE_AMOUNT = 37;
const SectionPage: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [ads, setAds] = useState<any[]>([]);
  const [news, setNews] = useState<TSplitNewsBySections>([]);
  const [page, setPage] = useState(0);
  const categories = useContext(NewsCategoriesContext);
  const { alias } = useParams();
  const isNewsFetched = useMemo(() => news.length, [news]);
  const currentCategory = categories
    ? categories.find((category) => category.alias === alias)
    : null;

  const fetchMoreData = useCallback(async () => {
    try {
      const data = await getNewsByAlias(
        Number(currentCategory?.id),
        page * TAKE_AMOUNT,
        TAKE_AMOUNT
      );

      if (data?.length) {
        setNews((prevState) => [
          ...prevState,
          splitNewsBySections(filterNewsByAlias(data)),
        ]);
        setPage((prevPage) => prevPage + 1);
      } else {
        throw Error();
      }
    } catch (e) {
      setIsError(true);
    }
  }, [currentCategory?.id, page]);

  const fetchInitialData = useCallback(async () => {
    try {
      setIsLoading(true);
      const data = await getNewsByAlias(
        Number(currentCategory?.id),
        0,
        TAKE_AMOUNT
      );

      if (data) {
        setNews([splitNewsBySections(filterNewsByAlias(data))]);
        setAds([splitAdsBySections(new Array(50))]);
        setPage((prevPage) => prevPage + 1);
      }
    } catch (e) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }, [currentCategory?.id]);

  /* eslint-disable */
  useEffect(() => {
    fetchInitialData();
  }, [currentCategory]);

  if (isError && !isNewsFetched) {
    return <SiteError />
  }

  if (isLoading || !currentCategory || !news) {
    return <SiteLoader />
  }

  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={fetchMoreData}
      initialLoad={true}
      hasMore={!isError}
      style={{
        width: "100%",
        margin: "0 auto",
      }}
      loader={
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "200px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Loader />
        </div>
      }
    ><section className={"sectionPage"}>
      <h1 className={"sectionPage__heading"}>{currentCategory.title}</h1>
      {news.map((section) => <Section {...section} ads={ads}/>)}
    </section>
    </InfiniteScroll>
  );
};

export default SectionPage;
