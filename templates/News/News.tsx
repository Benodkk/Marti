import { BackButton } from "@/components/BackButton/BackButton";
import {
  StyledHeaderPhoto,
  StyledNews,
  StyledNewsContainer,
  StyledNewsContent,
  StyledNewsDateConainer,
  StyledNewsSubtitle,
  StyledNewsText,
  StyledNewsTitle,
  StyledNewsTitleContainer,
  StyledNewsType,
  StyledOneLatestDate,
  StyledOneLatestDay,
} from "./News.styled";

import HeaderPhoto from "@/assets/NewReleases.png";
import { useRouter } from "next/router";
import { StyledBack } from "../Adress/Adress.styled";
import { useEffect, useState } from "react";
import { fetchOneNews } from "@/API/strapiConfig";

export default function NewsTemplate() {
  const router = useRouter();

  const [newsData, setNewsData] = useState<any>();

  useEffect(() => {
    getNews(router.query.news);
  }, [router.query]);

  const getNews = async (id: any) => {
    const newNews: any = await fetchOneNews(id);
    if (newNews) {
      setNewsData(newNews);
    }
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
    <StyledNewsContainer>
      <StyledNews>
        {/* <BackButton /> */}
        <StyledBack onClick={() => router.back()}>{"< Back"}</StyledBack>
        <StyledNewsType>
          {" "}
          {newsData && newsData?.attributes?.type.toUpperCase()}
        </StyledNewsType>
        <StyledNewsTitleContainer>
          <StyledNewsDateConainer>
            <StyledOneLatestDate>
              <StyledOneLatestDay>
                {newsData &&
                  extractDayAndMonth(newsData.attributes.publishedAt).day}
              </StyledOneLatestDay>
              <StyledOneLatestDay>
                {" "}
                {newsData &&
                  extractDayAndMonth(newsData.attributes.publishedAt).month}
              </StyledOneLatestDay>
            </StyledOneLatestDate>
          </StyledNewsDateConainer>
          <StyledNewsTitle>
            {newsData && newsData?.attributes?.title}
          </StyledNewsTitle>
        </StyledNewsTitleContainer>
        {newsData &&
          !newsData?.attributes.photo_on_bottom &&
          newsData?.attributes?.big_photo?.data?.attributes?.url && (
            <StyledHeaderPhoto
              src={
                newsData &&
                newsData?.attributes?.big_photo?.data?.attributes?.url
              }
            />
          )}

        <StyledNewsContent>
          {newsData &&
            newsData?.attributes?.contnet?.map((oneSection: any) => {
              return (
                <>
                  <StyledNewsSubtitle>
                    {oneSection.section_title}
                  </StyledNewsSubtitle>
                  {oneSection.content.map((paragraph: any) => {
                    return paragraph.children.map((be: any) => {
                      return <StyledNewsText>{be.text}</StyledNewsText>;
                    });
                  })}
                </>
              );
            })}
        </StyledNewsContent>
        {newsData && newsData?.attributes.photo_on_bottom && (
          <StyledHeaderPhoto
            src={
              newsData && newsData?.attributes?.big_photo?.data?.attributes?.url
            }
          />
        )}
      </StyledNews>
    </StyledNewsContainer>
  );
}
