import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-bottom: 2rem;
`;

export const SubContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 900px) {
    flex-direction: column-reverse;
  }
`;

export const ChartContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  max-width: 230px;
  max-height: 400px;
  align-items: center;
  justify-content: center;
  background: #fff;
  border-radius: 2px;
  -webkit-box-shadow: 0px 0px 15x 0px rgba(0, 0, 0, 0.17);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.17);
  margin-bottom: auto;
`;
