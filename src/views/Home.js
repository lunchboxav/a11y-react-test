import React from "react";
import Button from "../components/Button";
import ContentContainer from "../components/ContentContainer";
import { styled } from "../stitches.config";

const FlexEndContainer = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
});

function Home() {
  return (
    <ContentContainer>
      <h1>Home</h1>
      <FlexEndContainer>
        <h3>Where I store My Learning Notes</h3>
        <Button>Add new note</Button>
      </FlexEndContainer>
      <div>
        <h2>On Learning React</h2>
        <p>
          React can be quite hard, especially for beginner. But one thing that
          stands out for me is the thinking. Instead of treating an application
          as collection of pages, we instead think of UI as set of modular,
          reusable components. What matters next is how to create and compose
          these sets of components.
        </p>
      </div>
      <div>
        <h2>On Learning</h2>
        <p>
          Learning means constantly absord information, experiment on new things
          and measure the result of that experimentation. The accummulated
          learning can be perceived as producing tacit knowledge. This requires
          some level of discipline and grit. No information is a waste. No
          experimentation is a time wasted.
        </p>
      </div>
    </ContentContainer>
  );
}

export default Home;
