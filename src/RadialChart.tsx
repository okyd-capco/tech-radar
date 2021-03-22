import React, { FC } from 'react';
import * as d3 from 'd3';
import Tooltip from '@material-ui/core/Tooltip';
import styled from 'styled-components/macro';
import StyledGroup from './StyledGroup';

const Wrapper = styled.div`
  svg {
    @-webkit-keyframes swirl-in-fwd {
      0% {
        -webkit-transform: rotate(-540deg) scale(0);
        transform: rotate(-540deg) scale(0);
        opacity: 0;
      }
      100% {
        -webkit-transform: rotate(0) scale(1);
        transform: rotate(0) scale(1);
        opacity: 1;
      }
    }
    @keyframes swirl-in-fwd {
      0% {
        -webkit-transform: rotate(-540deg) scale(0);
        transform: rotate(-540deg) scale(0);
        opacity: 0;
      }
      100% {
        -webkit-transform: rotate(0) scale(1);
        transform: rotate(0) scale(1);
        opacity: 1;
      }
    }

    -webkit-animation: swirl-in-fwd 0.6s ease-out both;
    animation: swirl-in-fwd 0.6s ease-out both;
  }
`;

type BarChartProps = {
  data: any;
};

const RadialChart: FC<BarChartProps> = ({ data }) => {
  const width = 900;
  const height = 900;
  const dataPointCircleRadius = 17;
  const innerCircleRadius = 100;
  const imageSize = 24;
  const color = d3
    .scaleLinear<string>()
    .domain([0, 8, 16, 24])
    .range(['#671114', '#592556', '#38379F']);
  //const createArc = d3.arc().padAngle(0.05).cornerRadius(3);

  const xScale = d3
    .scaleLinear()
    .domain([1, 24])
    .range([0, 2 * Math.PI]);

  const xScaleSegments = d3
    .scaleLinear()
    .domain([1, 3])
    .range([0, 2 * Math.PI]);

  return (
    <Wrapper>
      <svg
        width={width}
        height={height}
        style={{ overflow: 'visible', marginBottom: 50 }}
      >
        <g transform={`translate(${height / 2} ${width / 2})`}>
          <circle
            key={'last-circle'}
            cx={0}
            cy={0}
            r={height / 2}
            fill={'transparent'}
            stroke={'lightgrey'}
            strokeDasharray={3}
            opacity={0.4}
          />
          {new Array(24).fill(0).map((d: any, idx: number) => (
            <line
              key={`tech-line-${idx}`}
              transform={`rotate(${(360 / 24) * idx + 90})`}
              x1={0}
              y1={0}
              y2={height / 2}
              stroke={color(idx)}
              strokeWidth={1}
            />
          ))}
          <circle
            key={'inner-circle'}
            cx={0}
            cy={0}
            r={innerCircleRadius - 30}
            fill={'black'}
            stroke={'white'}
            strokeWidth={1}
          />
          {[1, 2, 3].map((idx: number) => (
            <line
              key={`segment-line-${idx}`}
              transform={`rotate(${120 * idx - 37})`}
              x1={0}
              y1={0}
              y2={height / 2}
              stroke={'white'}
              strokeWidth={3}
            />
          ))}
          {/* labels for segments */}
          {['preferred', 'skilled', 'scaling'].map(
            (segmentName: string, idx: number) => (
              <g
                key={`${segmentName}-line`}
                transform={`rotate(${20 + (idx + 1) * (360 / 3)})`}
              >
                <text
                  textAnchor='middle'
                  y={innerCircleRadius / 2 - 10}
                  fontSize={15}
                  transform={`rotate(180, ${xScaleSegments(1)} ${
                    innerCircleRadius / 2 - 10
                  })`} // rotate(a,x,y) rotate around a given point
                  fill={'white'}
                >
                  {segmentName}
                </text>
              </g>
            )
          )}
          {data.map((d: any, techIdx: number) => {
            return (
              <g key={`data-${d.name}`}>
                {/*labels for each line*/}
                {[1, 2, 3].map((segment: number) => (
                  <g
                    key={`line-label-${segment}`}
                    transform={`rotate(${
                      -30 + techIdx * (360 / 24) + 120 * segment
                    })`}
                  >
                    {/*rotate around the chart*/}
                    <text
                      textAnchor='middle'
                      y={height / 2}
                      fontSize={15}
                      fill={color(techIdx + (segment - 1) * 8)}
                      transform={`rotate(180, ${xScale(techIdx)} ${
                        height / 2 + 15
                      })`} // rotate(a,x,y) rotate around a given point
                    >
                      {d.name}
                    </text>
                  </g>
                ))}
                {d.preferred.map((dataPoint: any, idx: number) => {
                  idx += 1;
                  let r = innerCircleRadius + idx * Math.pow(0.7, 2) * 120; //adding decay for radius size increase
                  return (
                    <StyledGroup key={`preferred-${idx}`}>
                      <Tooltip
                        title={dataPoint.name}
                        aria-label='haha'
                        placement='right'
                      >
                        <g>
                          {/* background circle for icons */}
                          <circle
                            key={`preferred-${d.name}-${idx}`}
                            cx={`${
                              r *
                              Math.cos(
                                idx * 2 * Math.PI +
                                  (Math.PI / 12) * techIdx +
                                  Math.PI
                              )
                            }`}
                            cy={`${
                              r *
                              Math.sin(
                                idx * 2 * Math.PI +
                                  (Math.PI / 12) * techIdx +
                                  Math.PI
                              )
                            }`}
                            r={dataPointCircleRadius}
                            fill={'white'}
                            stroke={color(techIdx)}
                            strokeWidth={2}
                          />
                          <image
                            x={`${
                              r *
                                Math.cos(
                                  idx * 2 * Math.PI +
                                    (Math.PI / 12) * techIdx +
                                    Math.PI
                                ) -
                              12
                            }`}
                            y={`${
                              r *
                                Math.sin(
                                  idx * 2 * Math.PI +
                                    (Math.PI / 12) * techIdx +
                                    Math.PI
                                ) -
                              12
                            }`}
                            href={dataPoint.link}
                            height={imageSize}
                            width={imageSize}
                          />
                        </g>
                      </Tooltip>
                    </StyledGroup>
                  );
                })}
                {d.skilled.map((dataPoint: any, idx: number) => {
                  idx += 1;
                  let r = innerCircleRadius + idx * Math.pow(0.7, 2) * 120; //adding 0.7^2 decay for radius size increase
                  return (
                    <StyledGroup key={`skilled-${idx}`}>
                      <Tooltip
                        title={dataPoint.name}
                        aria-label='haha'
                        placement='right'
                      >
                        <g>
                          {/* background circle for icons */}
                          <circle
                            cx={`${
                              r *
                              Math.cos(
                                idx * 2 * Math.PI +
                                  (Math.PI / 12) * techIdx -
                                  Math.PI / 3
                              )
                            }`}
                            cy={`${
                              r *
                              Math.sin(
                                idx * 2 * Math.PI +
                                  (Math.PI / 12) * techIdx -
                                  Math.PI / 3
                              )
                            }`}
                            r={dataPointCircleRadius}
                            fill={'white'}
                            stroke={color(techIdx + 8)}
                            strokeWidth={2}
                          />
                          <image
                            x={`${
                              r *
                                Math.cos(
                                  idx * 2 * Math.PI +
                                    (Math.PI / 12) * techIdx -
                                    Math.PI / 3
                                ) -
                              12
                            }`}
                            y={`${
                              r *
                                Math.sin(
                                  idx * 2 * Math.PI +
                                    (Math.PI / 12) * techIdx -
                                    Math.PI / 3
                                ) -
                              12
                            }`}
                            href={dataPoint.link}
                            height={imageSize}
                            width={imageSize}
                          />
                        </g>
                      </Tooltip>
                    </StyledGroup>
                  );
                })}
                {d.scaling.map((dataPoint: any, idx: number) => {
                  idx += 1;
                  let r = innerCircleRadius + idx * Math.pow(0.7, 2) * 120; //adding decay for radius size increase
                  return (
                    <StyledGroup key={`scaling-${idx}`}>
                      <Tooltip
                        title={dataPoint.name}
                        aria-label='haha'
                        placement='right'
                      >
                        <g>
                          {/* background circle for icons */}
                          <circle
                            cx={`${
                              r *
                              Math.cos(
                                idx * 2 * Math.PI +
                                  (Math.PI / 12) * techIdx +
                                  Math.PI / 3
                              )
                            }`}
                            cy={`${
                              r *
                              Math.sin(
                                idx * 2 * Math.PI +
                                  (Math.PI / 12) * techIdx +
                                  Math.PI / 3
                              )
                            }`}
                            r={dataPointCircleRadius}
                            fill={'white'}
                            stroke={color(techIdx + 16)}
                            strokeWidth={2}
                          />
                          <image
                            x={`${
                              r *
                                Math.cos(
                                  idx * 2 * Math.PI +
                                    (Math.PI / 12) * techIdx +
                                    Math.PI / 3
                                ) -
                              12
                            }`}
                            y={`${
                              r *
                                Math.sin(
                                  idx * 2 * Math.PI +
                                    (Math.PI / 12) * techIdx +
                                    Math.PI / 3
                                ) -
                              12
                            }`}
                            href={dataPoint.link}
                            height={imageSize}
                            width={imageSize}
                          />
                        </g>
                      </Tooltip>
                    </StyledGroup>
                  );
                })}
              </g>
            );
          })}
        </g>
      </svg>
    </Wrapper>
  );
};

export default RadialChart;