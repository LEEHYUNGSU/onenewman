"use client";

import { HomeIcon } from "@/Icons/HomeIcons";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

const NavbarContainer = styled.div`
  width: 100vw;
  height: 5.5vh;
  background-color: #73D674;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  padding-left: 13px;
`;

const HomeBtn = styled.div`
  width: 70px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 7px;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Link href="/">
        <HomeBtn>
          <HomeIcon />
        </HomeBtn>
      </Link>
    </NavbarContainer>
  );
};

export default Navbar;
