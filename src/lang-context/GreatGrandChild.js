import React, { Component } from "react";
import languageSpecificCopy from "./languageSpecificCopy";
import LanguageContext from "./LanguageContext";

class GreatGrandChild extends Component {
  static contextType = LanguageContext;

  render() {
    const copy = languageSpecificCopy[this.context.lang] || {};
    return (
      <section>
        <h2>{copy.title}</h2>
        <p>{copy.body}</p>
        <button onClick={() => this.context.setLang("klingon")}>
          Klingon! {/* yes I know it's a vulcan salute but star-trek */}
          <span role="img" aria-label="klingon">
            🖖
          </span>
        </button>
      </section>
    );
  }
}

// const ggc1 = <GreatGrandChild />;
// const ggc2 = <GreatGrandChild />;
// const ggc3 = <GreatGrandChild />;
// const ggc4 = <GreatGrandChild />;
// const ggc5 = <GreatGrandChild />;
// ggc1.render(); // this is fine
// ggc1.foo = "meow";

// GreatGrandChild.render(); // will not work, b/c render is an instance method
// console.log(GreatGrandChild.contextType === ggc1.contextType); // legit
// GreatGrandChild.contextType = "something else";
// // the contextType reference is shared between all instances + Class type
// console.log(ggc1.contextType === "something else");

// function SomeComponent() {
//   return (
//     <>
//       <GreatGrandChild />
//       <GreatGrandChild />
//       <GreatGrandChild />
//       <GreatGrandChild />
//       <GreatGrandChild />
//     </>
//   );
// }

export default GreatGrandChild;
