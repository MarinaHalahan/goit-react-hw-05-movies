import styled from 'styled-components';

const ReviewList = styled.ul`
  border-top: 1px solid grey;
  padding-top: 15px;
`;
const ReviewItem = styled.li``;
const ReviewInfo = styled.p`
  font-weight: ${props => (props.bold ? '700' : '400')};
`;

export { ReviewList, ReviewItem, ReviewInfo };
