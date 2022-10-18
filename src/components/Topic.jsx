import styled from "styled-components";

export const Topic = ({ relatedTopic }) => {
  const CardWrapper = styled.div`
    overflow: hidden;
    padding: 0 0 32px;
    margin: 48px auto 0;
    width: 300px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
    border-radius: 5px;
    cursor: pointer;
  `;

  const CardHeader = styled.header`
    padding-top: 32px;
    padding-bottom: 32px;
  `;

  const CardHeading = styled.h1`
    font-size: 24px;
    font-weight: bold;
    text-align: center;
  `;

  const CardBody = styled.div`
    padding-right: 32px;
    padding-left: 32px;
    display: flex;
    justify-content: center;
  `;
  
  const {name, stargazerCount} = relatedTopic;

  return (
    <>
      <CardWrapper>
        <CardHeader>
          <CardHeading>{name}</CardHeading>
          <CardBody>stargazer:{stargazerCount}</CardBody>
        </CardHeader>
      </CardWrapper>{" "}
    </>
  );
};
