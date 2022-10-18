import { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import { getTopics } from "../utils/queries";
import { Topic } from "./Topic";
import styled from "styled-components";

const TopicsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const TopicsInnerContainer = styled.div`
  flex-basis: 25%;
`;

export const Topics = () => {
  const [relatedTopic, setRelatedTopic] = useState("react");

  const { response, fetchData } = useAxios();

  useEffect(() => {
    fetchData({
      data: {
        query: getTopics(relatedTopic),
      },
    });
  }, []);

  useEffect(() => {
    fetchData({
      data: {
        query: getTopics(relatedTopic),
      },
    });
  }, [relatedTopic]);

  const topics = response?.data?.topic?.relatedTopics

  return (
    <div className="App">
      <TopicsContainer>
        {topics?.map((topic) => {
          return (
            <TopicsInnerContainer onClick={() => setRelatedTopic(topic.name)}>
              <Topic relatedTopic={topic} />
            </TopicsInnerContainer>
          );
        })}
      </TopicsContainer>
    </div>
  );
};
