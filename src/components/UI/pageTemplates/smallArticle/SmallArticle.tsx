import {
  FC,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import "./SmallArticle.scss";
import { useMediaQuery } from "react-responsive";
import InfiniteScroll from "react-infinite-scroller";
import Loader from "../../loader";
import { getNewsByAlias, getNewsById, getNewsLine } from "../../../../api/api";
import { filterNewsById, filterNewsLine } from "../../../../utils";
import { TFilteredNewsById, TNewsLine } from "../../../../types/api";
import { useParams } from "react-router-dom";
import { NewsCategoriesContext } from "../../../../context/NewsCategoriesContext";
import DOMPurify from "dompurify";
import { SiteError, SiteLoader } from "../../SiteStates";
import { Content } from "./Content";

interface QueryParams {
  id: number;
}

const SmallArticle: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 767 });
  const { id } = useParams() as unknown as QueryParams;
  const childArticleRefs = useRef<Element[]>([]);
  const [newsLine, setNewsLine] = useState<TNewsLine>([]);
  const [items, setItems] = useState<TFilteredNewsById[]>([]);
  const [ignoredId, setIgnoredId] = useState<string>();
  const [skipAmount, setSkipAmount] = useState(0);
  const isItemsFetched = useMemo(() => items.length, [items]);
  const categories = useContext(NewsCategoriesContext);
  const currentCategoryId = items?.[0]?.id_menu;
  const sanitize = useCallback((string: string) => {
    return DOMPurify.sanitize(string, { ADD_TAGS: ["iframe"] });
  }, []);

  const observerCallback = (entries: any, heading: string) => {
    entries.forEach((entry: any) => {
      if (entry.isIntersecting) {
        if (heading) {
          document.title = heading;
        }
        history.pushState(
          {},
          "",
          `/news/${entry.target.getAttribute("data-id")}`
        );
      }
    });
  };

  useEffect(() => {
    childArticleRefs.current.map((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          (entries) => {
            observerCallback(entries, items[index]?.heading);
          },
          { threshold: 0.25 }
        );
        observer.observe(ref);
      }
    });
  }, [items]);

  const fetchMoreData = useCallback(async () => {
    try {
      const data = await getNewsByAlias(
        Number(currentCategoryId),
        skipAmount,
        1,
        ignoredId
      );

      if (data) {
        setItems([...items, filterNewsById(data[0])]);
        setSkipAmount((prev) => prev + 1);
      }
    } catch (e) {
      setIsError(true);
    }
  }, [currentCategoryId, ignoredId, items, skipAmount]);

  const fetchInitialData = useCallback(async () => {
    try {
      setIsLoading(true);
      const data = await getNewsById(id, { doesNeedActualId: true });

      if (data) {
        const { id: newsId } = data;
        setItems([...items, filterNewsById(data)]);
        setIgnoredId(newsId);
      }
    } catch (e) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }, [id, items]);
  /* eslint-disable */
  useEffect(() => {
    fetchInitialData();
  }, []);

  useEffect(() => {
    getNewsLine("new", String(id)).then((res) => {
      if (res) {
        setNewsLine(filterNewsLine(res));
      }
    });
  }, []);

  if (isError && !isItemsFetched) {
    return <SiteError />
  }

  if (isLoading && !isItemsFetched) {
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
          <Loader/>
        </div>
      }
    >
      {items.map((newsItem, index) =>
        <Content newsItem={newsItem} newsLine={newsLine} index={index} categories={categories} childArticleRefs={childArticleRefs} isMobile={isMobile} />
      )}
      {isError && <SiteError />}
    </InfiniteScroll>
  );
};

export default SmallArticle;
