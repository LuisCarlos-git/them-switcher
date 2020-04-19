import styled from "styled-components";

export const Container = styled.div`
  color: #fff;
  background: ${(props) => props.theme.colors.primary};
  height: 75px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  font-weight: bold;

  font-size: 18px;
`;
