import styled from 'styled-components';

const CastList = styled.ul`
  border-top: 1px solid grey;
  padding-top: 15px;
`;
const CastItem = styled.li``;
const ImgCast = styled.img`
  height: 100px;
  width: 80px;
`;

const InfoCast = styled.p`
  font-weight: ${props => (props.bold ? '700' : '400')};
`;

export { CastList, CastItem, ImgCast, InfoCast };
