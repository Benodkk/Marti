import styled from "styled-components";

export const StyledOneDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  gap: 6px;
  width: 110px;
`;

interface OneDetailsProps {
  $active?: boolean;
}

export const StyledOneDetail = styled.div<OneDetailsProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  height: 110px;
  width: 110px;
  overflow: hidden;
  margin-bottom: 5px;
  border: ${(props) =>
    props.$active ? "4px solid #caa871" : "1px solid #d1d5db"};
  &:hover {
    border: ${(props) =>
      props.$active ? "4px solid #caa871" : "2px solid #caa871"};
  }
`;

export const StyledDetailPhotoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s all;
  width: 110px;
  height: 110px;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;

export const StyledDetailPhoto = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
`;

export const StyledDetailLabel = styled.div`
  color: #1f2937;
  font-family: "Roboto";
  font-size: 16px;
  font-weight: 500;
  text-align: center;
`;

export const StyledName = styled.div`
  color: #1f2937;
  font-family: "Roboto";
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px; /* 123.077% */
  text-align: center;
`;

export const StyledPrice = styled.div`
  color: #1f2937;
  font-family: "Roboto";
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 123.077% */
`;

export const StyledIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 4px;
  top: 4px;
  padding: 5px;
  background-color: #b3a6916c;
  border-radius: 100%;
  z-index: 5;
  cursor: pointer;
`;

export const StyledFullInfoContainer = styled.div`
  position: fixed;
  width: 100vw;
  height: 10vh;
`;

export const StyledDetailTitle = styled.div`
  color: #1d1d1f;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: -0.36px;
  padding: 20px 0 10px 8px;
`;

// for modal content

export const StyledModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledImage = styled.img`
  height: 60vh;
  max-width: 70vw;
  width: auto;
  object-fit: contain;
`;

export const StyledDesctiption = styled.div`
  max-width: 40vw;
`;
