import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #FAD9A1;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>Hurry up! Free and fast delivery on Orders Over Rs 1000</Container>;
};

export default Announcement;
