/*eslint-disable*/
import React from "react";
import { Container, Row } from "reactstrap";
// used for making the prop types of this component
import PropTypes from "prop-types";

class Footer extends React.Component {
  render() {
    return (
      <footer
        className={"footer" + (this.props.default ? " footer-default" : "")}
      >
        <Container fluid={this.props.fluid ? true : false}>
          <Row>
            <nav className="footer-nav">
            </nav>
            <div className="credits ml-auto">
             <center>
               <ul>
                <li className="text-success">Transperancy</li>
                <li className="text-success">Apps Center</li>
                <li className="text-success">Open Api</li>
                <li className="text-success"> Blog</li>
              </ul>
              <div className="copyright">
                &copy; {1900 + new Date().getYear()}Uphold.inc
              </div>
             </center>
            </div>
          </Row>
        </Container>
      </footer>
    );
  }
}

Footer.propTypes = {
  default: PropTypes.bool,
  fluid: PropTypes.bool
};

export default Footer;
