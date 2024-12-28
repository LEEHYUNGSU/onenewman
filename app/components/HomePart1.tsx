"use client";

import React from "react";
import Image from "next/image";
import SampleImage1 from "../../public/sample_image/JesusCross.png";
import styled from "styled-components";

const TotalContainer = styled.div`
  width: 100vw;
  top: 10%;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 70%;
`;

const ImageContainer = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 5px;
`;

const SampleImage = styled(Image)`
  width: 100%;
  height: 100%;
  overflow: hidden;
  object-fit: cover;
`;

const SampleText = styled.div`
  width: 300px;
  height: 5vh;
  background-color: #c75a59;
  border-radius: 5px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

const SampleText2 = styled.div`
  width: 300px;
  height: 20vh;
  background-color: #F0E675;
  border-radius: 5px;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #8b8b8b;
  padding-left: 40px;
  padding-right: 40px;
  text-align: justify;
`

const HomePart1 = () => {
  return (
    <>
      <TotalContainer>
        <ImageContainer>
          <SampleImage src={SampleImage1} alt="" />
        </ImageContainer>
        <SampleText>주의 이름으로 오시는 이여</SampleText>
        <SampleText2> 예수께서 신 포도주를 받으신 후에 이르시되 다 이루었다 하시고 머리를 숙이니 영혼이 떠나가시니라</SampleText2>
      </TotalContainer>
    </>
  );
};

export default HomePart1;
