import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import { lighten } from "polished";

import Switch from "react-switch";

import { Container } from "./styles";

export default function Header({ toggleTheme }) {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
      Header
      <Switch
        onChange={toggleTheme}
        checked={title === "light"}
        uncheckedIcon={false}
        checkedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={colors.secundary}
        onColor={lighten(0.3, colors.actvitySwitcher)}
      />
    </Container>
  );
}
