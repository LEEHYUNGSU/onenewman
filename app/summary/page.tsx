"use client";

import Navbar from "@/app/components/Navbar";
import React, { useState } from "react";
import styled from "styled-components";
import { SummaryPartData } from "@/data/summaryPart/summaryPartData";
import Image from "next/image";
import { SummaryPart1 } from "@/data/summary/summary1";

const TotalContainer = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 5vh;
  padding-top: 2vh;
  padding-bottom: 10vh;
`;

const UpperSect = styled.div`
  width: 80%;
  margin-top: 10px;
  height: 4.5vh;
  background-color: #F7665E;
  border-radius: 10px;
  color: white;
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DownSect = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const SummaryOneBox = styled.div`
  width: 85vw;
  height: 16vh;
  border-radius: 10px;
  background-color: #f7f7f7;
  display: flex;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 15px;
  padding-left: 5px;
  padding-right: 5px;
`;

const SummaryImageSect = styled.div`
  height: 90%;
  width: 28vw;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const SummaryImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

const SummaryContent = styled.div`
  width: 57vw;
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  padding-right: 3vw;
`;

const SummaryTop = styled.div`
  width: 100%;
  height: 25%;
  padding-left: 20px;
  padding-top: 3px;
  display: flex;
  align-items: end;
  font-size: 13px;
  font-weight: bold;
`;

const SummaryBottom = styled.div`
  width: 100%;
  height: 75%;
  display: flex;
  font-size: 10px;
  line-height: 1.6;
  padding-left: 20px;
  padding-top: 10px;
  text-align: justify;
`;

const BibleBox = styled.div`
  width: 70px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 9px;
  padding-left: 5px;
  padding-right: 5px;
  background-color: #465474;
  color: white;
  position: absolute;
  bottom: 0;
  right: -2%;
  border-radius: 5px;
`;

const PositionBox = styled.div`
  width: 120px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: bold;
  color: black;
  position: absolute;
  bottom: 0;
  left: 15px;
  border-radius: 5px;
  color: #e2485d;
`;

const BackBtnSect = styled.div`
  width: 100%;
  height: 40px;
  position: fixed;
  top: 5.5vh;
  left: 15px;
  z-index: 100;
  background-color: inherit;
  display: flex;
  align-items: center;
  padding-left: 5px;
  background-color: white;
`;

const BackBtn = styled.div`
  width: 80px;
  height: 25px;
  border-radius: 5px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  font-size: 13px;
`;

const OneContentBox = styled.div`
  width: 90vw;
  height: auto;
  border-radius: 5px;
  background-color: #f7f7f7;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-bottom: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const ContentTop = styled.div`
  width: 100%;
  height: 3vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 17px;
  color: #e2485d;
`;

const ContentBottom = styled.div`
  width: 100%;
  height: auto;
  padding-left: 30px;
  padding-right: 30px;
  text-align: justify;
  font-size: 12px;
  padding-top: 10px;
  padding-bottom: 10px;
  letter-spacing: 1.3px;
  line-height: 1.7;
`;

const Summary = () => {
  const [summaryData, setSummaryData] = useState(SummaryPart1);
  const [pageNumber, setPageNumber] = useState(0);

  const dataFunc = (data: typeSummary[]) => {
    setPageNumber(1);
    setSummaryData(data);
    window.scrollTo({
      top: 0, // 맨 위 위치
      behavior: "smooth", // 부드럽게 이동
    });
  };

  const BackFunc = () => {
    setPageNumber(0);
    window.scrollTo({
      top: 0, // 맨 위 위치
      behavior: "smooth", // 부드럽게 이동
    });
  };

  return (
    <>
      <Navbar />
      <TotalContainer>
        {pageNumber === 0 ? (
          <>
            <UpperSect>여호와의 절기 시리즈</UpperSect>
            <DownSect>
              {SummaryPartData.map((data, idx) => (
                <>
                  <SummaryOneBox
                    key={idx}
                    onClick={() => dataFunc(data.summaryData)}
                  >
                    <SummaryImageSect>
                      <SummaryImage src={data.imgSrc} alt="" />
                    </SummaryImageSect>
                    <SummaryContent>
                      <SummaryTop>{data.title}</SummaryTop>
                      <SummaryBottom>{data.theme}</SummaryBottom>
                      <BibleBox>{data.bible}</BibleBox>
                      <PositionBox>{data.position}</PositionBox>
                    </SummaryContent>
                  </SummaryOneBox>
                </>
              ))}
            </DownSect>
          </>
        ) : null}

        {pageNumber === 1 ? (
          <DownSect>
            <BackBtnSect>
              <BackBtn onClick={BackFunc}>뒤로가기</BackBtn>
            </BackBtnSect>
            {summaryData.map((data, idx) => (
              <OneContentBox key={idx}>
                <ContentTop>
                  {idx + 1} {data.question}
                </ContentTop>
                <ContentBottom>{data.answer}</ContentBottom>
              </OneContentBox>
            ))}
          </DownSect>
        ) : null}
      </TotalContainer>
    </>
  );
};

export default Summary;
