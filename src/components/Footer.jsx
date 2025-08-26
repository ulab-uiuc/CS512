import React from "react";
import Container from "react-bootstrap/Container";

const Footer = () => {
  const bgStyle = { backgroundColor: "#f5f5f5" };

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center">
      <Container>
        <span className="badge bg-dark">CS512: Data Mining Principles</span>
        <br />
        <span>University of Illinois Urbana-Champaign, 2025Fall</span>
      </Container>
    </footer>
  );
};

export default Footer;
