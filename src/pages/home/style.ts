import { styled } from "styled-components";

function PixelToRem(px: number) {
  return (px * 0.06).toPrecision(2);
}

export const Line = styled.p<{ fontSize?: number; bold?: boolean }>`
  font-size: ${(props) => PixelToRem(props.fontSize ?? 16)}rem;
  margin-bottom: 0.9rem;
  font-weight: ${(props) => (props.bold ? "750" : "normal")};
`;

export const TextOrange = styled.span`
  color: #ff9900;
`;
