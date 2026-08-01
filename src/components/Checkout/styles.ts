import styled from "styled-components";
import { cores } from "../../styles/Global";

export const Title = styled.h3`
  color: ${cores.salmaoClaro};
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 16px;
`;

export const Text = styled.p`
  color: ${cores.salmaoClaro};
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const InputGroup = styled.div`
  margin-bottom: 8px;
  flex: 1;
`;

export const Label = styled.label`
  display: block;
  color: ${cores.salmaoClaro};
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 8px;
`;

export const Input = styled.input`
  width: 100%;
  height: 32px;
  border: none;
  padding: 8px;
  background-color: ${cores.salmaoClaro};
  box-sizing: border-box;
`;

export const Row = styled.div`
  display: flex;
  gap: 16px;
`;

export const Button = styled.button`
  width: 100%;
  height: 24px;
  border: none;
  cursor: pointer;
  background-color: ${cores.salmaoClaro};
  color: ${cores.salmao};
  font-size: 14px;
  font-weight: 700;
  margin-top: 8px;
`;
