"use client";

import Navbar from "@/app/components/Navbar";
import React, { useState } from "react";
import styled from "styled-components";
import { SummaryPartData } from "@/data/summaryPart/summaryPartData";
import Image from "next/image";
import Navbar2 from "@/app/components/Navbar2";
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
  width: 55%;
  height: 4.5vh;
  background-color: #e2485d;
  border-radius: 10px;
  color: white;
  font-size: 15px;
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
  width: 360px;
  height: 15vh;
  border-radius: 10px;
  background-color: #f7f7f7;
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
  padding-left: 5px;
  padding-right: 5px;
`;

const SummaryImageSect = styled.div`
  height: 13vh;
  aspect-ratio: 1;
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
  width: 205px;
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
`;

const SummaryTop = styled.div`
  width: 100%;
  height: 25%;
  padding-left: 20px;
  padding-top: 3px;
  display: flex;
  align-items: end;
  font-size: 14px;
  font-weight: bold;
`;

const SummaryBottom = styled.div`
  width: 100%;
  height: 75%;
  display: flex;
  font-size: 12px;
  line-height: 1.6;
  padding-left: 20px;
  padding-top: 10px;
  text-align: justify;
`;

const BibleBox = styled.div`
  width: 85px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  background-color: #465474;
  color: white;
  position: absolute;
  bottom: 0;
  right: -30px;
  border-radius: 5px;
`;

const PositionBox = styled.div`
  width: 120px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
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
  top: 4.5vh;
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
  width: 360px;
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
  font-size: 14px;
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
      top: 0,          // 맨 위 위치
      behavior: "smooth", // 부드럽게 이동
    });
  };

  const BackFunc = () => {
    setPageNumber(0);
    window.scrollTo({
      top: 0,          // 맨 위 위치
      behavior: "smooth", // 부드럽게 이동
    });
  };

  

  return (
    <>
      <Navbar />
      <TotalContainer>
        {pageNumber === 0 ? (
          <>
            <UpperSect>
              <i
                className="fi fi-tr-cloud-sun-rain"
                style={{ fontSize: "24px", color: "#E8D18B" }}
              ></i>{" "}
              &nbsp; 절기 시리즈 개념 요약
            </UpperSect>
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
              <BackBtn onClick={BackFunc}>
                뒤로가기
              </BackBtn>
            </BackBtnSect>
            {summaryData.map((data, idx) => (
              <OneContentBox key={idx}>
                <ContentTop>
                  {idx + 1} {data.question}
                </ContentTop>
                <ContentBottom>
                  {data.answer}
                </ContentBottom>
              </OneContentBox>
            ))}
          </DownSect>
        ) : null}
      </TotalContainer>
      <Navbar2 />
    </>
  );
};

export default Summary;
