"use client"

import styled from "styled-components";
import Navbar from "./components/Navbar";
import HomePart1 from "./components/HomePart1";
import HomePart2 from "./components/HomePart2";

const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: white;
`

export default function Home() {
  return (
    <HomeContainer>
      <Navbar />
      <HomePart1 />
      <HomePart2 />
    </HomeContainer>
  );
}
