import styled from "styled-components";

export const NewsListListContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const StyledNewTitle = styled.h2`
  color: #232323;
  font-size: 35px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 50px;
  @media (max-width: 1020px) {
    font-size: 20px;
  }
`;
export const StyledNewsContainer = styled.div`
  display: flex;
  gap: 25px;
  margin-top: 70px;
  width: 80%;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  @media (max-width: 1020px) {
    margin-top: 40px;
    flex-direction: column;
    gap: 50px;
  }
`;
