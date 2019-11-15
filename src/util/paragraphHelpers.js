import React from "react";
import { ParagraphBody } from "../components/ParagraphBody";
import { ParagraphIntro } from "../components/ParagraphIntro";

const components = {
  paragraph__body: ParagraphBody,
  paragraph__intro: ParagraphIntro,
};

export const getParagraph = node => {
  if (components.hasOwnProperty(node.type)) {
    const ParagraphComponent = components[node.type];
    return <ParagraphComponent key={node.id} node={node} />;
  }
  return <p key={node.id}>Unknown type {node.__typename}</p>;
};
