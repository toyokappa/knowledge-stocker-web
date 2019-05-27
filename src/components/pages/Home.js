import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import BaseLayout from "../templates/BaseLayout";
import unknown from "../../images/home_unknown.svg";
import search from "../../images/home_search.svg";
import knowledge from "../../images/home_knowledge.svg";
import archievement from "../../images/home_archievement.svg";
import ranking from "../../images/home_ranking.svg";
import Button from "../atoms/Common/Button";

export default function Home() {
  return (
    <BaseLayout>
      <HomeContainer>
        <HomeTitle>このサービスの使い方</HomeTitle>
        <DescriptionContainer>
          <HomeDescription>
            <HomeIcon src={unknown} alt="unknown" />
            <HomeText>学習中や業務中、勉強会の中で出てきた「ワカラン」単語をストック</HomeText>
          </HomeDescription>
          <HomeDescription>
            <HomeIcon src={search} alt="search" />
            <HomeText>ストックした単語をあとでまとめて調べて「ナレッジ」を増やす</HomeText>
          </HomeDescription>
          <HomeDescription>
            <HomeIcon src={knowledge} alt="knowledge" />
            <HomeText>調べてみて「ワカッタ」サイトを単語に紐付ける</HomeText>
          </HomeDescription>
          <HomeDescription>
            <HomeIcon src={archievement} alt="archievement" />
            <HomeText>積み上げた学習成績を好きなときに振り返る</HomeText>
          </HomeDescription>
          <HomeDescription>
            <HomeIcon src={ranking} alt="ranking" />
            <HomeText>たくさんの「ワカッタ」を集めてランキング1位を目指そう！</HomeText>
          </HomeDescription>
        </DescriptionContainer>
        <HomeLink to="/sign_in">
          <HomeButton>新規登録/ログインしてみる</HomeButton>
        </HomeLink>
      </HomeContainer>
    </BaseLayout>
  );
}

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const HomeTitle = styled.h2`
  text-align: center;
  font-size: 30px;
  margin: 0 0 1rem;
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 900px;
`;

const HomeDescription = styled.div`
  width: 200px;
  text-align: center;
  margin: 2rem;
`;

const HomeIcon = styled.img`
  width: 100px;
  height: auto;
  margin-bottom: 1rem;
`;

const HomeText = styled.div`
  line-height: 1.5;
`;

const HomeButton = styled(Button)`
  padding: 1rem 2rem;
  margin-top: 1rem;
`;

const HomeLink = styled(Link)`
  color: black;
  text-decoration: none;
`;
