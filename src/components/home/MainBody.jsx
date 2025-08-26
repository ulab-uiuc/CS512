import React from "react";
import Container from "react-bootstrap/Container";
import Typist from "react-typist-component";

import Siebel from "../../assets/img/uiuc_school.png";

const MainBody = React.forwardRef(({}, ref) => {
  return (
    <div
      fluid
      id="home"
      style={{
        backgroundImage: `url(${Siebel})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "15em",
      }}
      className="title d-flex align-content-center align-items-center flex-wrap m-0"
    >

      <Container className="text-center">
        <div
          ref={ref}
          className="display-3"
          style={{ 
            marginTop: "1em", 
            marginBottom: "1em", 
            fontWeight: 700,
            textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
            letterSpacing: "1px",
            fontSize: "3.5rem",
            fontFamily: "Montserrat, sans-serif"
          }}
        >
          CS512: Data Mining Principles
        </div>
        <Typist>
          <div
            className="lead typist"
            style={{ 
              marginTop: "1em", 
              marginBottom: "1em",
              textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
              fontSize: "1.6rem",
              fontWeight: "500",
              fontFamily: "Montserrat, sans-serif"
            }}
          >
            University of Illinois Urbana-Champaign, 2025 Fall
          </div>
        </Typist>
      </Container>
    </div>
  );
});

export default MainBody;
