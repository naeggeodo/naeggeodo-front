import Image from 'next/image';
import styled from 'styled-components';
import { Naeggeotalk } from '../../modules/naeggeotalk/types';

type StyledType = {
  isActive?: boolean;
};

const NaeggeotalkListItem = ({ data }: { data: Naeggeotalk }) => {
  return (
    <Container isActive={true}>
      <Content>
        <div>
          <Image src='/assets/images/hamburger.svg' width={44} height={44} />
          <div>
            <Title>{data.title}</Title>
            <Date>{data.createDate}</Date>
          </div>
        </div>
        {/* <Image src='/assets/images/yellowstar.svg' width={18} height={24} /> */}
        <Image src='/assets/images/graystar.svg' width={18} height={24} />
      </Content>
    </Container>
  );
};

const Container = styled.div<StyledType>`
  border-bottom: 1px solid #f2f2f8;
  background: ${(props) => (props.isActive ? ' #f2f2f8;' : '#fff')};
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;

  width: 90%;

  margin: 0 auto;
  padding: 20px 0;
`;

const Title = styled.h3`
  font-size: 0.9375rem;
  margin-bottom: 5px;
  line-height: 20px;
`;

const Date = styled.span`
  font-size: 0.75rem;
  color: #696969;
  background: #ebebeb;
  padding: 2px 5px;
  margin-right: 5px;
  border-radius: 3px;
`;

export default NaeggeotalkListItem;
