import React, { PureComponent } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import { ChartContainer } from "./chart.styles";
import {
  Container,
  InfoContainer,
  Text,
  TextContainer,
  Icon,
  TextChartContainer,
  TitleChart,
  TextChart,
  ButtonContainer,
} from "./chart.styles";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
  { name: "Outros", value: 280 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#999"];

export default class Example extends PureComponent {
  render() {
    return (
      <Container>
        <ChartContainer>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart width={200} height={200}>
              <Pie
                data={data}
                cx={window.innerWidth > 950 ? 114 : 95}
                cy={window.innerWidth > 950 ? 90 : 100}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={2}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <TextChartContainer>
            <TitleChart>5K</TitleChart>
            <TextChart>740 / day</TextChart>
          </TextChartContainer>
        </ChartContainer>
        <InfoContainer>
          {data.map((item, index) => (
            <TextContainer>
              <Icon color={COLORS[index]} />
              <Text>{item.name}</Text>
              <Text percent>10%</Text>
            </TextContainer>
          ))}
          <ButtonContainer>
            <Text>Saiba Mais</Text>
          </ButtonContainer>
        </InfoContainer>
      </Container>
    );
  }
}
