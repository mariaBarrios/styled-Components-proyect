import React from "react";

import { GlobalStyles } from "./ui/theme/GlobalStyles";
import { Container } from "./views/_components/Container";
import {
  AppName,
  Header,
  HeaderLogo,
  LogoWrapper,
} from "./views/_components/Header/Header";

import {
  SearchBox,
  SearchButton,
  SearchInput,
} from "./views/_components/SearchBox";
import { GoSearch } from "react-icons/go";

import { memes } from "../src/services/Memes.json";
import { MemeList } from "./views/MemeList/MemeList";
import { colors } from "./ui/theme/theme";

function App() {
  return (
    <Container>
      <GlobalStyles />
      <Header>
        <LogoWrapper>
          <HeaderLogo />
          <AppName>GUIFAFFINITY</AppName>
        </LogoWrapper>
      </Header>

      <SearchBox>
        <SearchInput />
        <SearchButton>
          <GoSearch color={colors.white} />
        </SearchButton>
      </SearchBox>

      <MemeList memes={memes} />
    </Container>
  );
}

export default App;
