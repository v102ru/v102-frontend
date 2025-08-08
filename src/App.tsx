import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/page/main";
import { SideMenuContext } from "./context/SideMenuContext";
import { ScrollToTop } from "./hooks/hooks";
import { NewsCategoriesContext } from "./context/NewsCategoriesContext";
import { TNewsCategories } from "./types/api";
import { getNewsCategories } from "./api/api";
import { SiteLoader } from "./components/UI/SiteStates";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [newsCategories, setNewsCategories] = useState<TNewsCategories | null>(
    null
  );
  const [isSideMenuPoped, setSideMenuPop] = useState(false);
  const [isTopMenuPoped, setTopMenuPop] = useState(false);
  const [topMenuContent, setTopMenuContent] = useState<HTMLElement | null>(
    null
  );

  useEffect(() => {
    getNewsCategories()
      .then((res) => {
        if (res) {
          setNewsCategories(res);
        }
      })
      .finally(() => setIsLoading(false));
  }, []);

  const setSideMenuPoped = () => {
    if (isSideMenuPoped) {
      document.body.style.overflowY = "auto";
      return setSideMenuPop(!isSideMenuPoped);
    }

    document.body.style.overflowY = "hidden";
    return setSideMenuPop(!isSideMenuPoped);
  };

  const setTopMenuPoped = (state: boolean) => {
    if (!state) {
      document.body.style.overflowY = "auto";
      return setTopMenuPop(false);
    }

    document.body.style.overflowY = "hidden";
    return setTopMenuPop(true);
  };

  if (isLoading) {
    return <SiteLoader />;
  }

  return (
    <SideMenuContext.Provider
      value={{
        isSideMenuPoped,
        isTopMenuPoped,
        setSideMenuPoped,
        setTopMenuPoped,
        topMenuContent,
        setTopMenuContent,
      }}
    >
      <NewsCategoriesContext.Provider value={newsCategories}>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/*" element={<Main />} />
          </Routes>
        </BrowserRouter>
      </NewsCategoriesContext.Provider>
    </SideMenuContext.Provider>
  );
}

export default App;
