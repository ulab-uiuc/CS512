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
        An advanced course on principles and algorithms of data mining. Data cleaning and integration; descriptive and predictive mining; mining frequent, sequential, and structured patterns; clustering, outlier analysis and fraud detection; stream data, web, text, and biomedical data mining; security and privacy in data mining; research frontiers.
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
      <h3>Materials</h3>
      <p>
        <ul>
          <li>
            <a href="https://www.cs.mcgill.ca/~wlh/grl_book/">
              Graph Representation Learning
            </a>{" "}
            by William L. Hamilton
          </li>
          <li>
            <a href="https://networksciencebook.com/">Network Science</a> by
            Albert-László Barabási
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
        </ul>
      </p>
    </Jumbotron>
  );
};

export default Content;
