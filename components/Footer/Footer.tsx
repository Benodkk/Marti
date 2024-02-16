import {
  StyledContactCol,
  StyledContactGroup,
  StyledContactRows,
  StyledCopyright,
  StyledCopyrightContainer,
  StyledFooter,
  StyledFooterLinksCol,
  StyledFooterLinksContainer,
  StyledFooterLinksTitle,
  StyledFooterPhotoContainer,
  StyledFooterText,
  StyledFooterTitleContainer,
  StyledGoldenCircle,
  StyledOneFooterLink,
  StyledOneFooterPhoto,
} from "./Footer.styled";

import { FaInstagram } from "react-icons/fa";
import { FaLocationDot, FaPhoneVolume, FaRegEnvelope } from "react-icons/fa6";

import Inspire1 from "@/assets/inspire1.png";
import Inspire2 from "@/assets/inspire2.png";
import Inspire3 from "@/assets/inspire3.png";
import Inspire4 from "@/assets/inspire4.png";
import Inspire5 from "@/assets/inspire5.png";
import {
  StyledMainPageSectionGold,
  StyledMainPageSectionTitle,
} from "@/templates/MainPage/MainPage.styled";
import { useEffect, useState } from "react";
import {
  fetchContacts,
  fetchFooterLinks,
  fetchFooterText,
  fetchNews,
} from "@/API/strapiConfig";
import { useRouter } from "next/router";

interface FooterProps {}

const Footer = ({}: FooterProps) => {
  const router: any = useRouter();
  const [links, setLinks] = useState<any>();
  const [newsId, setNewsId] = useState<any>();
  const [footerText, setFooterText] = useState<any>();
  const [contactsAdress, setContactsAdress] = useState<any>();
  const [contactsPhone, setContactsPhone] = useState<any>();
  const [contactsMail, setContactsMail] = useState<any>();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data: any = await fetchFooterLinks();
    const news: any = await fetchNews();
    const footerText: any = await fetchFooterText();
    const contacts: any = await fetchContacts();

    if (data) setLinks(data);
    if (news) setNewsId(news[0].id);
    if (footerText) setFooterText(footerText);
    if (contacts) {
      const adres: any = contacts.find(
        (contact: any) => contact.attributes.type == "adress"
      );
      const phone: any = contacts.find(
        (contact: any) => contact.attributes.type == "phone"
      );
      const mail: any = contacts.find(
        (contact: any) => contact.attributes.type == "email"
      );
      setContactsAdress(adres);
      setContactsPhone(phone);
      setContactsMail(mail);
    }
  };

  return (
    <StyledFooter>
      <StyledFooterTitleContainer>
        <StyledMainPageSectionTitle>Inspire me</StyledMainPageSectionTitle>
        <FaInstagram size={35} color="#caa871" />
        <StyledMainPageSectionGold>#MartiBikini</StyledMainPageSectionGold>
      </StyledFooterTitleContainer>
      <StyledFooterPhotoContainer>
        <StyledOneFooterPhoto src={Inspire1.src} />
        <StyledOneFooterPhoto src={Inspire2.src} />
        <StyledOneFooterPhoto src={Inspire3.src} />
        <StyledOneFooterPhoto src={Inspire4.src} />
        <StyledOneFooterPhoto src={Inspire5.src} />
      </StyledFooterPhotoContainer>
      <StyledFooterLinksContainer>
        <StyledFooterText>
          {footerText && footerText.attributes.text}
        </StyledFooterText>
        <StyledFooterLinksCol>
          <StyledFooterLinksTitle>Customer care</StyledFooterLinksTitle>
          <StyledOneFooterLink
            onClick={() => {
              router.push("/SignIn");
            }}
          >
            Sign in
          </StyledOneFooterLink>
          {links &&
            links.map((element: any) => {
              // Używamy instrukcji warunkowej if do sprawdzenia warunku
              if (element.attributes.type === "Cusomer care") {
                return (
                  <StyledOneFooterLink
                    key={element.id}
                    onClick={() => {
                      router.push("/info/" + element.id);
                    }}
                  >
                    {" "}
                    {element.attributes.title}
                  </StyledOneFooterLink>
                );
              }
              // Zwracamy null, gdy warunek nie jest spełniony, co oznacza, że żaden element nie zostanie wyrenderowany
              return null;
            })}
        </StyledFooterLinksCol>
        <StyledFooterLinksCol>
          <StyledFooterLinksTitle>Informations</StyledFooterLinksTitle>
          <StyledOneFooterLink
            onClick={() => {
              newsId && router.push("/news/" + newsId);
            }}
          >
            News
          </StyledOneFooterLink>
          {links &&
            links.map((element: any) => {
              // Używamy instrukcji warunkowej if do sprawdzenia warunku
              if (element.attributes.type === "Informations") {
                return (
                  <StyledOneFooterLink
                    key={element.id}
                    onClick={() => {
                      router.push("/info/" + element.id);
                    }}
                  >
                    {element.attributes.title}
                  </StyledOneFooterLink>
                );
              }

              return null;
            })}
        </StyledFooterLinksCol>
        <StyledContactCol>
          <StyledFooterLinksTitle>Contact info</StyledFooterLinksTitle>
          <StyledContactGroup>
            <StyledGoldenCircle>
              <FaLocationDot color="white" size={16} />
            </StyledGoldenCircle>
            <StyledContactRows>
              <div>
                {contactsAdress && contactsAdress.attributes?.first_line}
              </div>
              <div>
                {contactsAdress && contactsAdress.attributes?.second_line}
              </div>
            </StyledContactRows>
          </StyledContactGroup>
          <StyledContactGroup>
            <StyledGoldenCircle>
              <FaPhoneVolume color="white" size={16} />
            </StyledGoldenCircle>
            <StyledContactRows>
              <div>{contactsPhone && contactsPhone.attributes?.first_line}</div>
              <div>
                {contactsPhone && contactsPhone.attributes?.second_line}
              </div>
            </StyledContactRows>
          </StyledContactGroup>
          <StyledContactGroup>
            <StyledGoldenCircle>
              <FaRegEnvelope color="white" size={16} />
            </StyledGoldenCircle>
            <StyledContactRows>
              <div>{contactsMail && contactsMail.attributes?.first_line}</div>
              <div>{contactsMail && contactsMail.attributes?.second_line}</div>
            </StyledContactRows>
          </StyledContactGroup>
        </StyledContactCol>
      </StyledFooterLinksContainer>
      <StyledCopyrightContainer>
        <StyledCopyright>
          Copyright © 2024. All rights reserved.
        </StyledCopyright>
      </StyledCopyrightContainer>
    </StyledFooter>
  );
};

export default Footer;
