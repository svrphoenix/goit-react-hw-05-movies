import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
`;

export const Header = styled.h3`
  text-align: center;
  font-size: 24px;
  font-weight: 700;
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
  margin-bottom: 30px;
`;

export const Item = styled.li`
  width: 100%;
  padding-bottom: 20px;
  border-bottom: 1px solid #d3d3d3;
`;

export const Author = styled.h4`
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 500;
`;

export const Review = styled.p`
  line-height: 1.3;
  text-align: justify;
  text-indent: 2em;
`;

export const NoReviews = styled.p`
  margin: 30px auto 0 auto;
  text-align: center;
  padding: 20px;
`;
