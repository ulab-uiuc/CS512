import React from "react";
import { Jumbotron } from "./migration";

const Content = () => {
  return (
    <Jumbotron
      id="content"
      className="m-0 content-section"
      style={{ backgroundColor: "white" }}
    >
      <h2 className="section-heading text-center">
        Content
      </h2>
      <h3>
        What is this course about?
      </h3>
      <p>
        This course explores advanced data mining techniques through the lens of deep learning for graph-structured data. Topics span the foundations (graph concepts, embeddings, graph neural networks), advanced methods (theory, heterogeneous and knowledge graphs, reasoning, subgraph mining), and applications (recommendation, generative models, transformers, scalable systems). We will also investigate emerging research frontiers, including graph-powered LLMs, multi-agent systems, and world models. The course blends lectures, student-led presentations, discussions, and semester-long projects, with a strong emphasis on both technical proficiency and critical research skills.
      </p>
      <h3>
        Prerequisites
      </h3>
      <p>
        Students are expected to have the following background:
        <ul>
          <li>Basics of deep learning</li>
          <li>Python programming skills</li>
          <li>
            Recommended: PyTorch, machine learning, probability and statistics
          </li>
        </ul>
      </p>
      <h3>References</h3>
      <p>
        <ul>
          <li>
            Much of the course materials are adapted from{" "}
            <a href="https://web.stanford.edu/class/cs224w/">
              CS224W @ Stanford University
            </a>
            . We sincerely appreciate Prof. Leskovec and the TA team for making
            the course materials publicly available.
          </li>
          <li>
            <a href="https://ulab-uiuc.github.io/CS598/">
              CS598 Deep Learning with Graphs @ UIUC
            </a>
          </li>
          <li>
            <a href="https://graph-and-geometric-learning.github.io/cpsc483-583-website-23fall">
              CPSC483/583 @ Yale University
            </a>
          </li>
          <li>
            <a href="https://github.com/pyg-team/pytorch_geometric">
              PyG (PyTorch Geometric)
            </a>
          </li>
          <li>
            <a href="https://github.com/snap-stanford/GraphGym">GraphGym</a>
          </li>
          <li>
            <a href="https://www.cs.mcgill.ca/~wlh/grl_book/">
              Graph Representation Learning
            </a>{" "}
            by William L. Hamilton
          </li>
          <li>
            <a href="https://books.google.com/books?hl=en&lr=&id=NR1oEAAAQBAJ&oi=fnd&pg=PP1&ots=_N6IOJxdtY&sig=KZ6Sex4tKgtoG8faG9TQgiBPkN8#v=onepage&q&f=false">Data mining: concepts and techniques</a> by
            Jiawei Han, Jian Pei, and Hanghang Tong
          </li>
        </ul>
      </p>
    </Jumbotron>
  );
};

export default Content;
