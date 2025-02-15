import React, { FC } from "react";
import styled from "styled-components/macro";
import { KeyTooltip } from "./StyledTooltip";
import { radarKeysText } from "../data/data";

const StyledRadarKey = styled.div`
  margin-left: 90px;
  position: absolute;
  width: 100px;
  margin-top: 50px;
  text-align: left;
  font-size: 16px;
  div:first-child {
    font-size: 20px;
    border-bottom: 0.1px solid #c9c6c657;
  }
  div {
    padding-bottom: 8px;
    margin-bottom: 8px;
    svg {
      margin-right: 8px;
    }
    div.title {
      color: #e6236d;
    }
  }
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

const TooltipTitle = styled.div`
  font-size: 20px;
  color: #e6236d;
  padding-bottom: 10px;
`;

const TooltipContent = styled.div`
  font-family: Poppins, sans-serif;
`;

type KeyCircleProps = {
  color1: string;
  color2: string;
  color3: string;
};

const KeyCircle: FC<KeyCircleProps> = ({ color1, color2, color3 }) => (
  <svg width={24} height={24}>
    <circle cx={12} cy={12} r={12} fill={color1} />
    <circle cx={12} cy={12} r={8} fill={color2} />
    <circle cx={12} cy={12} r={4} fill={color3} />
  </svg>
);

const RadarKey = () => (
  <StyledRadarKey>
    <div>Key</div>
    <KeyTooltip
      title={
        <>
          <TooltipTitle>Scaling</TooltipTitle>
          <TooltipContent>{radarKeysText.scaling}</TooltipContent>
        </>
      }
      aria-label={"Scaling"}
      placement="right"
      arrow
    >
      <div>
        <KeyCircle
          color1={"#c4c4c41a"}
          color2={"#c4c4c41a"}
          color3={"#e6236d"}
        />
        <span>Scaling</span>
      </div>
    </KeyTooltip>
    <KeyTooltip
      title={
        <>
          <TooltipTitle>Skilled</TooltipTitle>
          <TooltipContent>{radarKeysText.skilled}</TooltipContent>
        </>
      }
      aria-label={"Skilled"}
      placement="right"
      arrow
    >
      <div>
        <KeyCircle color1={"#c4c4c41a"} color2={"#e6236d"} color3={"#222222"} />
        <span>Skilled</span>
      </div>
    </KeyTooltip>
    <KeyTooltip
      title={
        <>
          <TooltipTitle>Preferred</TooltipTitle>
          <TooltipContent>{radarKeysText.preferred}</TooltipContent>
        </>
      }
      aria-label={"Preferred"}
      placement="right"
      arrow
    >
      <div>
        <KeyCircle color1={"#e6236d"} color2={"#290738"} color3={"#391A46"} />
        <span>Preferred</span>
      </div>
    </KeyTooltip>
  </StyledRadarKey>
);

export default RadarKey;
