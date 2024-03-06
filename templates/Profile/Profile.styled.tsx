import styled from "styled-components";

export const StyledProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const StyledProfile = styled.div`
  display: flex;
  width: 1024px;
  padding: 50px 0;
`;

export const StyledNavBar = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  margin-top: 30px;
`;

export const StyledBoldText = styled.div`
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 10px;
`;

export const StyledText = styled.div`
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  line-height: normal;
  margin: 15px 0 0 2px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const StyledRightContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  align-items: center;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableCell = styled.td`
  padding: 8px;
  border: 1px solid #ddd;
`;

export const Container = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 10px;
  padding-right: 10px;
`;

export const Title = styled.h2`
  font-size: 26px;
  margin: 20px 0;
  text-align: center;

  small {
    font-size: 0.5em;
  }
`;

export const ResponsiveTable = styled.ul`
  list-style: none;
  padding: 0;

  li {
    border-radius: 3px;
    padding: 25px 30px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
  }

  .table-header {
    background-color: #95a5a6;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }

  .table-row {
    background-color: #ffffff;
    box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.1);
  }

  .col {
    flex-basis: 10%;

    &-1 {
      flex-basis: 20%;
    }
    &-2 {
      flex-basis: 20%;
    }
    &-3 {
      flex-basis: 20%;
    }
    &-4 {
      flex-basis: 30%;
    }
  }

  @media all and (max-width: 767px) {
    .table-header {
      display: none;
    }

    li {
      display: block;
    }

    .col {
      flex-basis: 100%;
      display: flex;
      padding: 10px 0;

      &:before {
        color: #6c7a89;
        padding-right: 10px;
        content: attr(data-label);
        flex-basis: 50%;
        text-align: right;
      }
    }
  }
`;
export const TableList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const TableHeader = styled.li`
  border-radius: 3px;
  padding: 25px 30px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  background-color: #95a5a6;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.03em;
`;

export const TableRow = styled.li`
  border-radius: 3px;
  padding: 25px 30px;
  display: flex;
  text-align: center;
  justify-content: space-between;
  margin-bottom: 25px;
  background-color: #ffffff;
  box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.1);
`;

export const Col = styled.div`
  flex-basis: 25%;
  text-align: center;

  &:nth-child(1) {
    flex-basis: 10%;
  }
  &:nth-child(2) {
    flex-basis: 20%;
  }
  &:nth-child(3) {
    flex-basis: 20%;
  }
  &:nth-child(4) {
    flex-basis: 15%;
  }
  &:nth-child(5) {
    flex-basis: 25%;
  }
`;

// Dla responsywności
export const ResponsiveCol = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: center;
  @media all and (max-width: 767px) {
    flex-basis: s 100%;
    display: flex;
    padding: 10px 0;
    text-align: center;

    &:before {
      color: #6c7a89;
      padding-right: 10px;
      content: attr(data-label);
      flex-basis: 50%;
      text-align: right;
    }
  }
`;
