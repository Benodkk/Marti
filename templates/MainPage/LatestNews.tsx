import { useEffect, useState } from "react";
import {
  StyledLatestNews,
  StyledLatestNewsContaienr,
  StyledMainPageSectionTitle,
} from "./MainPage.styled";
import { OneLatestNews } from "./components/OneLatestNews";
import TestPhoto from "@/assets/NewReleases.png";
import { fetchNews } from "@/API/strapiConfig";
import { useRouter } from "next/router";
import { StyledBack } from "../Adress/Adress.styled";

interface LatestNewsProps {}

export const LatestNews = ({}: LatestNewsProps) => {
  const router = useRouter();
  const [news, setNews] = useState<any>();

  useEffect(() => {
    getNews();
  }, [router.query]);

  const getNews = async () => {
    const newNews: any = await fetchNews();
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

    // Pobieranie skróconej nazwy miesiąca z tablicy, używając miesiąca z obiektu Date (getMonth() zwraca wartość od 0 do 11)
    const month = monthNames[date.getMonth()];

    // Zwracanie numeru dnia i skróconej nazwy miesiąca
    return { day, month };
  }

  return (
    <StyledLatestNews>
      <StyledMainPageSectionTitle>Latest Posts</StyledMainPageSectionTitle>
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
                title={item.attributes.title}
                newsType={item.attributes.type}
              />
            );
          })}
      </StyledLatestNewsContaienr>
    </StyledLatestNews>
  );
};
