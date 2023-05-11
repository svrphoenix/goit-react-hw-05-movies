import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  padding-right: 80px;
  padding-left: 80px;
  padding-bottom: 40px;
  text-align: center;
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
  margin-bottom: 30px; //cdvcdfvf
`;

export const Item = styled.li`
  overflow: hidden;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 220px;
  background-color: #fff;
  transition: scale 250ms cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 4px;
  border: 1px solid gray;

  &:hover,
  &:focus {
    scale: 1.02;
  }
`;

export const Info = styled.div`
  font-size: 20px;
  font-weight: 400;
  margin-top: 20px;
  max-width: 220px;
  color: gray;
  margin: 0 auto;
`;

export const ActorName = styled.p`
  font-weight: 700;
  font-size: 20px;
  color: black;
  margin-bottom: 10px;
`;

export const NoCast = styled.p`
  margin: 30px auto 0 auto;
  text-align: center;
  padding: 20px;
`;

export const ActorImage = styled.img`
  display: block;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;
