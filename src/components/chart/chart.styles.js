import styled from "styled-components";
import { RiCheckboxBlankFill } from "react-icons/ri";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  max-width: 230px;
  max-height: 400px;
  align-items: center;
  background: #fff;
  border-radius: 2px;
  -webkit-box-shadow: 0px 0px 15x 0px rgba(0, 0, 0, 0.17);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.17);
  margin-bottom: auto;

  @media screen and (max-width: 1000px) {
    flex-direction: row;
    max-width: 98%;
    max-height: 380px;
    margin-bottom: 1rem;
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;
    max-width: 98%;
    max-height: 410px;
    margin-bottom: 1rem;
  }
`;

export const ChartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    max-width: 200px;
  }

  @media screen and (max-width: 600px) {
    align-items: center;
    max-width: 200px;
    height: 200px;
  }
`;

export const TextChartContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: absolute;
`;

export const TitleChart = styled.p`
  font-weight: 700;
  font-size: 1.4rem;
`;

export const TextChart = styled.p`
  font-weight: 200;
  font-size: 0.9rem;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0.8rem;

  @media screen and (max-width: 1000px) {
    padding-right: 1rem;
  }
`;

export const Text = styled.p`
  font-size: ${({ percent }) => (percent ? "0.6rem" : "0.7rem")};
  color: ${({ percent }) => (percent ? "#787878" : "#484848")};
  text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);

  margin-left: ${({ percent }) => (percent ? "auto" : "0rem")};
`;

export const TextContainer = styled.span`
  display: flex;
  align-items: center;
  margin-bottom: 0.2rem;
  border-bottom: 1px solid #ededed;
  padding: 0.2rem 0rem;
`;
export const Icon = styled(RiCheckboxBlankFill)`
  width: 0.8rem;
  height: 0.8rem;
  fill: ${({ color }) => color ?? "#999"};
  margin-right: 0.4rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  margin-top: 1rem;
  background: #fff;
  -webkit-box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.17);
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.17);
  cursor: pointer;
`;
