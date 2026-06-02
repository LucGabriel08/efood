import styled from "styled-components";

export const Card = styled.div`
  background-color: #e66767;
  padding: 8px;

  display: flex;
  flex-direction: column;

  min-height: 338px;
`;

export const Image = styled.img`
  width: 100%;
  height: 167px;
  object-fit: cover;
`;

export const Title = styled.h3`
  color: #ffeae6;
  font-size: 16px;
  font-weight: 900;
  margin: 8px 0;
`;

export const Description = styled.p`
  color: #ffeae6;
  font-size: 14px;
  line-height: 22px;

  margin-bottom: 8px;

  flex-grow: 1;
`;

export const Button = styled.button`
  width: 100%;
  border: none;
  padding: 4px;

  background-color: #ffeae6;
  color: #e66767;

  font-size: 14px;
  font-weight: 700;

  cursor: pointer;
`;
