import React, { Component } from "react";
import "./Accordion.css";

class Accordion extends Component {
  static defaultProps = { sections: [] };
  state = {
    currentSectionIndex: null,
  };
  handleButtonClick(index) {
    if (this.state.currentSectionIndex === index) {
      this.setState({ currentSectionIndex: null });
    } else {
      this.setState({ currentSectionIndex: index });
    }
  }
  renderContent(index) {
    return <p>{this.props.sections[index].content}</p>;
  }
  renderButtons() {
    return this.props.sections.map((section, index) => (
      <li key={index} className="AccordionItem">
        <button onClick={() => this.handleButtonClick(index)}>
          {section.title}
        </button>
        {this.state.currentSectionIndex === index && this.renderContent(index)}
      </li>
    ));
  }
  render() {
    return <ul className="Accordion">{this.renderButtons()}</ul>;
  }
}

export default Accordion;
