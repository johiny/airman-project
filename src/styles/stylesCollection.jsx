import styled from "styled-components";

const DataSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100vw;
  min-height: 100vh;
  gap: 1rem;
  padding-top: 2rem;
  padding-bottom: 2rem;

  h1 {
    font-weight: bold;
  }

  button:hover {
    background-color: #e76525;
  }

  @media screen and (min-width: 640px) {
    width: 80vw;
    min-height: 50vh;
    margin: 0 auto;
    border-radius: 1rem;
    box-shadow: 0rem 0rem 0.5rem #000;
    margin-top: 2.5rem;
  }
`;

const FormArticles = styled.article`
  width: 80vw;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin-bottom: 1rem;

  input {
    text-align: center;
    border-radius: 1rem;
    background-color: #ccc;
  }

  span {
    height: 24px;
  }

  @media screen and (min-width: 640px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    align-items: center;
    gap: 0.10rem;
  }
`;

const FormButtons = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.50rem;
  padding-top: 1rem;
`

const FormButton = styled.button`
  background-color: #e04d01;
  color: white;
  width: 26vw;
  height: 7vh;
  border-radius: 100vmax;
  transition: background-color 500ms ease-in-out;

  @media screen and (min-width: 640px) {
    width: 15vw;
  }
`;

export {
    DataSection,
    FormArticles,
    FormButtons,
    FormButton
}