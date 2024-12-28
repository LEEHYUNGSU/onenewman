"use client"

import Image from "next/image";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import HomePart1 from "./components/HomePart1";
import HomePart2 from "./components/HomePart2";
import Navbar2 from "@/app/components/Navbar2";

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
      <Navbar2 />
    </HomeContainer>
  );
}
