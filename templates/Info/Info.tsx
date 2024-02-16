import { fetchInfo } from "@/API/strapiConfig";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  StyledHeaderPhoto,
  StyledInfo,
  StyledInfoContainer,
  StyledInfoContent,
  StyledInfoSubtitle,
  StyledInfoText,
  StyledInfoTitle,
  StyledInfoTitleContainer,
  StyledInfoType,
} from "./Info.styled";
import { StyledBack } from "../Adress/Adress.styled";

interface InfoProps {}

export default function Info({}: InfoProps) {
  const router: any = useRouter();
  const [infoData, setInfoData] = useState<any>();

  useEffect(() => {
    if (router.query.info) {
      fetchData(router.query.info);
    }
  }, [router.query]);

  const fetchData = async (id: any) => {
    const data: any = await fetchInfo(id);
    if (data) setInfoData(data);
  };

  return (
    <StyledInfoContainer>
      <StyledInfo>
        {/* <BackButton /> */}
        <StyledBack onClick={() => router.back()}>{"< Back"}</StyledBack>
        <StyledInfoTitleContainer>
          <StyledInfoTitle>
            {infoData && infoData?.attributes?.title}
          </StyledInfoTitle>
        </StyledInfoTitleContainer>
        {infoData &&
          !infoData?.attributes.photo_on_bottom &&
          infoData?.attributes?.big_photo?.data?.attributes?.url && (
            <StyledHeaderPhoto
              src={
                infoData &&
                infoData?.attributes?.big_photo?.data?.attributes?.url
              }
            />
          )}

        <StyledInfoContent>
          {infoData &&
            infoData?.attributes?.content?.map((oneSection: any) => {
              return (
                <>
                  <StyledInfoSubtitle>
                    {oneSection.section_title}
                  </StyledInfoSubtitle>
                  {oneSection.content.map((paragraph: any) => {
                    return paragraph.children.map((be: any) => {
                      return <StyledInfoText>{be.text}</StyledInfoText>;
                    });
                  })}
                </>
              );
            })}
        </StyledInfoContent>
        {infoData && infoData?.attributes.photo_on_bottom && (
          <StyledHeaderPhoto
            src={
              infoData && infoData?.attributes?.big_photo?.data?.attributes?.url
            }
          />
        )}
      </StyledInfo>
    </StyledInfoContainer>
  );
}
