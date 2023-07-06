import styled from "styled-components";

export const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  background: #f9f9f9;
  max-width: 850px;
  margin: 30px auto 20px;
  align-items: center;
  justify-content: absolute;
  position: relative;
`;
export const Container = styled.div`
  position: flex;
  top: 30%;
  width: 100%;
  ${"" /* box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3); */}
`;
export const Wrap = styled.div`
  background: #272727;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  text-align: center;
  cursor: pointer;

  h1 {
    padding: 2rem;
    font-size: 2rem;
  }

  span {
    margin-right: 1.5rem;
  }
`;

export const Dropdown = styled.div`
  background: #1c1c1c;
  color: red;
  max-width: 100%;
  height: 75px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  p {
    font-size: 1rem;
  }
`;
