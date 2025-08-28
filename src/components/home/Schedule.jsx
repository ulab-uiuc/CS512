import React from "react";
import { Jumbotron } from "./migration";
import { Table } from "react-bootstrap";

const Schedule = () => {
  return (
    <Jumbotron id="schedule" className="m-0 content-section">
      <h2 className="section-heading text-center">Syllabus</h2>
      <p>
        <i>
          This syllabus is subject to minor changes. All assignment deadlines are at <b>11:59pm CT</b>.
        </i>
      </p>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Week</th>
            <th>Date</th>
            <th>Knowledge learning</th>
            <th>Research training</th>
            <th>Events</th>
            <th>Deadlines</th>
          </tr>
        </thead>
        <tbody>
          {/* Week 1 */}
          <tr>
            <td rowSpan={2} className="text-center align-middle">1</td>
            <td>Aug 27 Wed</td>
            {/* <td>Introduction</td> */}
            <td>
              Introduction [
              <a href={require("../../assets/slides/01_Introduction.pdf")}>
                slides
              </a>
              ]
            </td>
            <td>Paper reading & analysis</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Aug 29 Fri</td>
            <td>Graph learning basics</td>
            <td>Paper reading & analysis</td>
            <td>Writing task 1, out</td>
            <td></td>
          </tr>
          {/* Week 2 */}
          <tr>
            <td rowSpan={2} className="text-center align-middle">2</td>
            <td>Sept 03 Wed</td>
            <td>Embedding-based graph learning</td>
            <td>Paper reading & analysis</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Sept 05 Fri</td>
            <td>Graph neural networks: perspective</td>
            <td>Paper reading & analysis</td>
            <td>Writing task 2, out</td>
            <td></td>
          </tr>
          {/* Week 3 */}
          <tr>
            <td rowSpan={2} className="text-center align-middle">3</td>
            <td>Sept 10 Wed</td>
            <td>Graph neural networks: model I</td>
            <td>Paper reading & analysis</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Sept 12 Fri</td>
            <td>Graph neural networks: model II</td>
            <td>Paper reading & analysis</td>
            <td>Idea proposal, out</td>
            <td>Writing task 1 due</td>
          </tr>
          {/* Week 4 */}
          <tr>
            <td rowSpan={2} className="text-center align-middle">4</td>
            <td>Sept 17 Wed</td>
            <td>Paper reading discussions</td>
            <td>Ideate & discussion</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Sept 19 Fri</td>
            <td>Graph neural networks: objective</td>
            <td>Ideate & discussion</td>
            <td>HW 1, out</td>
            <td>Writing task 2 due</td>
          </tr>
          {/* Week 5 */}
          <tr>
            <td rowSpan={2} className="text-center align-middle">5</td>
            <td>Sept 24 Wed</td>
            <td>Graph neural networks: pipeline</td>
            <td>Ideate & discussion</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Sept 26 Fri</td>
            <td>Graph neural networks: alternatives and add-ons</td>
            <td>Ideate & discussion</td>
            <td>Project proposal, out</td>
            <td>Idea proposal due</td>
          </tr>
          {/* Week 6 */}
          <tr>
            <td rowSpan={2} className="text-center align-middle">6</td>
            <td>Oct 01 Wed</td>
            <td>GNN implementation: PyG & GraphGym</td>
            <td>Ideate & discussion</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Oct 03 Fri</td>
            <td>Project idea discussions</td>
            <td>Ideate & discussion</td>
            <td>HW 2, out</td>
            <td>HW 1 due</td>
          </tr>
          {/* Week 7 */}
          <tr>
            <td rowSpan={2} className="text-center align-middle">7</td>
            <td>Oct 08 Wed</td>
            <td>Beyond simple graphs: heterogeneous graphs</td>
            <td>Prototype implementation</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Oct 10 Fri</td>
            <td>Beyond simple graphs: knowledge graphs</td>
            <td>Prototype implementation</td>
            <td>Project submission, out</td>
            <td>Project Proposal due</td>
          </tr>
          {/* Week 8 */}
          <tr>
            <td rowSpan={2} className="text-center align-middle">8</td>
            <td>Oct 15 Wed</td>
            <td>Beyond simple graphs: knowledge graph reasoning</td>
            <td>Prototype implementation</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Oct 17 Fri</td>
            <td>Beyond prediction: graph generative models</td>
            <td>Prototype implementation</td>
            <td>HW 3, out</td>
            <td>HW 2 due</td>
          </tr>
          {/* Week 9 */}
          <tr>
            <td rowSpan={2} className="text-center align-middle">9</td>
            <td>Oct 22 Wed</td>
            <td>Beyond message passing: expressive GNNs</td>
            <td>Prototype implementation</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Oct 24 Fri</td>
            <td>Beyond small graphs: scale GNNs to large graphs</td>
            <td>Prototype implementation</td>
            <td>HW 4, out</td>
            <td></td>
          </tr>
          {/* Week 10 */}
          <tr>
            <td rowSpan={2} className="text-center align-middle">10</td>
            <td>Oct 29 Wed</td>
            <td>Beyond small GNNs: graph foundation models</td>
            <td>Paper Writing</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Oct 31 Fri</td>
            <td>Beyond sparse graphs: graph transformers</td>
            <td>Paper Writing</td>
            <td></td>
            <td>HW 3 due</td>
          </tr>
          {/* Week 11 */}
          <tr>
            <td rowSpan={2} className="text-center align-middle">11</td>
            <td>Nov 05 Wed</td>
            <td>GNN applications: recommender systems</td>
            <td>Paper Writing</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Nov 07 Fri</td>
            <td>GNN applications: graph mining</td>
            <td>Paper Writing</td>
            <td></td>
            <td>HW 4 due</td>
          </tr>
          {/* Week 12 */}
          <tr>
            <td rowSpan={2} className="text-center align-middle">12</td>
            <td>Nov 12 Wed</td>
            <td>GNN applications: science</td>
            <td>Review & Response</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Nov 14 Fri</td>
            <td>Graph & Multiagent: ResearchTown, MultiAgentBench</td>
            <td>Review & Response</td>
            <td></td>
            <td></td>
          </tr>
          {/* Week 13 */}
          <tr>
            <td rowSpan={2} className="text-center align-middle">13</td>
            <td>Nov 19 Wed</td>
            <td>Graph & LLM Ecosystem: Graphrouter+Grapheval</td>
            <td>Review & Response</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Nov 21 Fri</td>
            <td>Graph & World Model</td>
            <td>Review & Response</td>
            <td>Review & response task, out</td>
            <td>Submission due</td>
          </tr>
          {/* Week 14 */}
          <tr>
            <td rowSpan={2} className="text-center align-middle">14</td>
            <td>Dec 03 Wed</td>
            <td>No class</td>
            <td>Remote Presentation</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Dec 05 Fri</td>
            <td>No class</td>
            <td>Remote Presentation</td>
            <td></td>
            <td>Review & response due</td>
          </tr>
          {/* Week 15 */}
          <tr>
            <td>15</td>
            <td>Dec 10 Wed</td>
            <td>Conclusion</td>
            <td></td>
            <td></td>
            <td>Final project due</td>
          </tr>
        </tbody>
      </Table>
    </Jumbotron>
  );
};

export default Schedule;