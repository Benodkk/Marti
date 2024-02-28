import { useEffect, useState } from "react";
import {
  StyledLatestNews,
  StyledLatestNewsContaienr,
  StyledMainPageSectionTitle,
  StyledMoreNewsButtonCotnainer,
  StyledMoreProductsButtonCotnainer,
} from "./MainPage.styled";
import { OneLatestNews } from "./components/OneLatestNews";
import TestPhoto from "@/assets/NewReleases.png";
import { fetchMainPageNews, fetchNews } from "@/API/strapiConfig";
import { useRouter } from "next/router";
import { StyledBack } from "../Adress/Adress.styled";
import { ArrowButton } from "@/components/ArrowButton/ArrowButton";

import { useSelector } from "react-redux";
import { selectLanguage } from "@/redux/languageSlice";

interface LatestNewsProps {}

export const LatestNews = ({}: LatestNewsProps) => {
  const language = useSelector(selectLanguage);
  const router = useRouter();
  const [news, setNews] = useState<any>();

  useEffect(() => {
    getNews();
  }, [router.query]);

  const getNews = async () => {
    const newNews: any = await fetchMainPageNews();

    setNews(newNews);
  };

  function extractDayAndMonth(dateString: any) {
    // Parsowanie stringa z datą do obiektu Date
    const date = new Date(dateString);

    // Pobieranie numeru dnia miesiąca
    const day = date.getDate();

    // Tablica z skróconymi nazwami miesięcy
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const monthNamesPL = [
      "Sty",
      "Lut",
      "Mar",
      "Kwi",
      "Maj",
      "Cze",
      "Lip",
      "Sie",
      "Wrz",
      "Paź",
      "Lis",
      "Gru",
    ];

    // Pobieranie skróconej nazwy miesiąca z tablicy, używając miesiąca z obiektu Date (getMonth() zwraca wartość od 0 do 11)

    const month =
      language === "pl"
        ? monthNamesPL[date.getMonth()]
        : monthNames[date.getMonth()];

    // Zwracanie numeru dnia i skróconej nazwy miesiąca
    return { day, month };
  }

  return (
    <StyledLatestNews>
      <StyledMainPageSectionTitle>
        {language == "pl" ? "Ostatnie posty" : "Latest Posts"}
      </StyledMainPageSectionTitle>
      <StyledLatestNewsContaienr>
        {news &&
          news.map((item: any, index: number) => {
            return (
              <OneLatestNews
                onClick={() => router.push("/news/" + item.id)}
                key={index}
                photoSource={
                  item?.attributes?.small_photo?.data?.attributes
                    ? item?.attributes?.small_photo?.data?.attributes.url
                    : item?.attributes?.big_photo?.data?.attributes.url
                }
                day={extractDayAndMonth(
                  item.attributes.publishedAt
                ).day.toString()}
                month={extractDayAndMonth(item.attributes.publishedAt).month}
                title={
                  language == "pl" && item.attributes.title_pl
                    ? item.attributes.title_pl
                    : item.attributes.title
                }
                newsType={
                  language == "pl" && item.attributes.type_pl
                    ? item.attributes.type_pl
                    : item.attributes.type
                }
              />
            );
          })}
      </StyledLatestNewsContaienr>
      <StyledMoreNewsButtonCotnainer>
        <ArrowButton onClick={() => router.push("/NewsList/")}>
          {language == "pl" ? "POKAŻ WSZYSTKIE" : "SHOW ALL POSTS"}
        </ArrowButton>
      </StyledMoreNewsButtonCotnainer>
    </StyledLatestNews>
  );
};
