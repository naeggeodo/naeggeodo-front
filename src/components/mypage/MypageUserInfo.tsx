import React from 'react';
import { useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import { useCustomRouter } from '../../hooks/utils/useCustomRouter';
import { RootState } from '../../modules';
import palette from '../../styles/palette';

type StyledType = {
  isActive?: boolean;
};

const MypageUserInfo = () => {
  const { shiftPage } = useCustomRouter('/progress');

  const nickName = useSelector(
    (state: RootState) => state.myPageState.userInfo.nickname,
  );
  const myOrdersCount = useSelector(
    (state: RootState) => state.myPageState.userInfo.myOrdersCount,
  );
  const participatingChatCount = useSelector(
    (state: RootState) => state.myPageState.userInfo.participatingChatCount,
  );

  return (
    <Container>
      <Title>안녕하세요,</Title>
      <Title>
        <Name>{nickName}</Name>
        <span>님</span>
      </Title>
      <InfoBox>
        <InfoDiv>
          <P>전체 주문 건수</P>
          <P isActive={true}>{myOrdersCount}건</P>
        </InfoDiv>
        <InfoButton onClick={shiftPage}>
          <P>참여 중인 내꺼톡</P>
          <P isActive={true}>{participatingChatCount}건</P>
        </InfoButton>
      </InfoBox>
    </Container>
  );
};

const Container = styled.div`
  padding: 0 24px;

  background-color: #fff;
`;

const Title = styled.p`
  font-size: 1.5rem;
  line-height: 30px;
  padding: 0 6px;
`;

const Name = styled.span`
  font-family: SpoqaBold;
`;

const InfoBox = styled.div`
  display: flex;
  justify-content: space-around;

  margin-top: 16px;
  padding: 24px;

  background: #f5f5f5;
  border-radius: 8px;
  &::before {
    content: '';
    width: 1px;
    height: 46px;

    position: absolute;
    left: 50%;
    transform: translateX(-50%);

    background: #dddddd;
  }
`;

const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const InfoButton = styled(InfoDiv)`
  cursor: pointer;
`;

const P = styled.p<StyledType>`
  font-size: ${(props) => (props.isActive ? '1.25rem' : '0.875rem')};
  ${(props) =>
    props.isActive &&
    css`
      color: ${palette.mainOrange};
      font-family: 'SpoqaBold';
    `};
`;

export default MypageUserInfo;
