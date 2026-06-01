import styled from "styled-components";
import { cores } from "../../styles/Global";

export const Container = styled.footer`
  background-color: ${cores.salmaoClaro};
  padding: 40px 0;
  text-align: center;
`;

export const Logo = styled.img`
  width: 125px;
  margin-bottom: 24px;
`;

export const Text = styled.p`
  max-width: 480px;
  margin: 0 auto;

  color: ${cores.salmao};
  font-size: 10px;
  line-height: 14px;
`;

export const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;

  margin-bottom: 80px;
`;

export const SocialIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const SocialLink = styled.a`
  display: flex;
`;
