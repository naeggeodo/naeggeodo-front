import styled from 'styled-components';
import palette from '../../styles/palette';
import naverlogo from '../../assets/icons/naverlogo.svg';
import Image from 'next/image';
const NaverLoginBtn = () => {
  return (
    <Wrap>
      <Image src={naverlogo} alt='naver logo' width={14} height={14} />
      <span>네이버 계정으로 로그인</span>
    </Wrap>
  );
};

export default NaverLoginBtn;
const Wrap = styled.button`
  width: 100%;
  border: none;
  outline: none;
  border-radius: 10px;
  height: 28%;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${palette.naverGreen};
  font-family: 'Spoqa';
  cursor: pointer;
  font-size: 17px;
  margin-bottom: 10px;
  gap: 6px;
`;
