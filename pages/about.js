import React from "react";
// functional component
// Good to use in such cases:
// 1. for small components
// 2. reusable components
// 3. presentational components, partially right, can use Hooks and keep state
// const About = () => {
//   const message = "We are starting now";
//   return (
//     <div>
//       <h1>Hello, About Page </h1>
//       <h2>{message}</h2>
//     </div>
//   );
// };

// class component

class About extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>That is me, your Classy component</h1>
      </div>
    );
  }
}
export default About;
