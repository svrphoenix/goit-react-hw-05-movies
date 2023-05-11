import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 30px;
  padding-right: 40px;
  padding-left: 40px;
  padding-bottom: 40px;
`;

export const Header = styled.h3`
  font-size: 32px;
  font-weight: 700;
  color: gray;
  margin-bottom: 20px;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  list-style: none;
  padding: 0;
  margin: 0 auto;
  margin-bottom: 30px; //cdcvfvgf
`;

export const Item = styled.li`
  padding-bottom: 10px;
  border-bottom: 1px solid #d3d3d3;
`;

export const Author = styled.h4`
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 500;
`;

export const Review = styled.p`
  line-height: 1.3;
`;

export const NoReviews = styled.p`
  margin: 30px auto 0 auto;
  text-align: center;
  padding: 20px;
`;
