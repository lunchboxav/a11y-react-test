import React from "react";
import Button from "../components/Button";
import ContentContainer from "../components/ContentContainer";

function Home() {
  return (
    <ContentContainer>
      <h1>Home</h1>
      <div>
        <h2>On Learning React</h2>
        <p>
          React can be quite hard, especially for beginner. But one thing that
          stands out for me is the thinking. Instead of treating an application as
          collection of pages, we instead think of UI as set of modular,
          reusable components. What matters next is how to create and compose
          these sets of components.
        </p>
      </div>
    </ContentContainer>
  );
}

export default Home;
