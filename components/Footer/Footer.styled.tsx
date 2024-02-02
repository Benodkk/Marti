import styled from "styled-components";

export const StyledFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 150px;
`;

// styled insta

export const StyledFooterTitleContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  gap: 5px;
`;

export const StyledFooterPhotoContainer = styled.div`
  display: grid;
  width: 100vw;
  grid-template-columns: repeat(5, 20%);
  grid-auto-rows: 0;
  grid-template-rows: 1fr;
  margin-top: 50px;
`;

export const StyledOneFooterPhoto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;
// style footer links

export const StyledFooterLinksContainer = styled.div`
  display: flex;
  align-items: center;
  width: 1020px;
  padding: 50px 0;
`;

export const StyledFooterText = styled.div`
  color: #646464;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 175% */
  max-width: 400px;
  padding-bottom: 30px;
`;
export const StyledFooterLinksCol = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50px;
  align-self: flex-start;
`;

export const StyledFooterLinksTitle = styled.div`
  position: relative;
  color: #080808;
  font-family: Jost;
  font-size: 23px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 20px;
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 25%;
    border-bottom: 2px solid #caa871;
  }
`;

export const StyledOneFooterLink = styled.div`
  position: relative;
  color: #5c5b5b;
  font-family: Roboto;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  margin-bottom: 15px;
  padding-bottom: 2px;
  cursor: pointer;
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 20%;
    border-bottom: 2px solid #dfdfdf;
    transition: all 0.3s;
  }
  &:hover::after {
    border-bottom: 2px solid #caa871;
    width: 100%;
  }
`;

export const StyledContactCol = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50px;
  align-self: flex-start;
`;

export const StyledContactGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  border-bottom: 2px solid #dfdfdf;
  padding-bottom: 10px;
  margin-bottom: 10px;
  &:last-child {
    border-bottom: none;
  }
`;

export const StyledGoldenCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #caa871;
  padding: 10px;
  border-radius: 100px;
`;

export const StyledContactRows = styled.div`
  display: flex;
  flex-direction: column;
  color: #5c5b5b;
  font-family: Roboto;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
`;

export const StyledCopyrightContainer = styled.div`
  border-top: 2px solid #dfdfdf;
  color: #727272;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 10px 0;
`;

export const StyledCopyright = styled.div`
  width: 1020px;
`;
