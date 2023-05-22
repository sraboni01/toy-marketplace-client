import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="container shadow py-5 mt-5">
        <div className="row">
          <div className="col-lg-12">
            <h3>
              Tell us the differences between uncontrolled and controlled
              components.
            </h3>
            <p>
              Here's the differences between uncontrolled and controlled
              components: Uncontrolled component: In an uncontrolled component,
              the form data is managed by the DOM itself, and not by React. The
              input values are controlled by the user directly and React has no
              knowledge of the current state of the input. In an uncontrolled
              component, we use the 'ref' attribute to get the current value of
              the input, rather than using state. Controlled components:In a
              controlled component, the form data is managed by React itself,
              through the component's state. The input values are set by React
              and any changes to the input are handled by React through
              handlers. In a controlled component, we use the 'value' attribute
              to set the initial value of the input.
            </p>
            <h3> How to validate React props using PropTypes</h3>
            <p>
              In React, 'PropTypes' is a built-in-library that allows us to
              validate the props being passed to a component. Prop validation is
              important because it helps us to catch errors early on and ensures
              that the component is being used correctly. Here are some of the
              common validation rules that we can use with 'PropTypes': a.
              'PropTypes.string' : Validates that the prop is a string. b.
              'PropTypes.number' : Validates that the prop is a number. c.
              'PropTypes.bool' : Validates that the prop is a boolean. d.
              'PropTypes.func' : Validates that the prop is a function. e.
              'PropTypes.object' : Validates that the prop is a object. f.
              'PropTypes.array' : Validates that the prop is a array. g.
              'PropTypes.any' : Validates that the prop can be any data type. h.
              'PropTypes.oneOfType' : Validate that the prop matches one of the
              specified data types.{" "}
            </p>
            <h3>Tell us the difference between nodejs and express js.</h3>
            <p>
              Node.js is a JavaScript runtime environment that allows us to run
              JavaScript code outside of the browser, while Express.js is a
              framework for building web applications using Node.js. Node.js
              provides a core set of libraries and APIs that allow us to build
              server-side applications in JS, including the ability to handle
              incoming requests, manage databases, and perform other server-side
              tasks. Express.js is a lightweight and flexible framwork that
              builds on top of Node.js and provides a set of powerful features
              and utilities for building web applications, including routing,
              middleware.
            </p>
            <h3>
              What is a custom hook, and why will you create a custom hook?
            </h3>
            <p>
              In React, a custom hook is a function that starts with the word
              'use' and allows us to reuse stateful logic across different
              components. Custom hooks are a powerful tool for building reusable
              and modular code in React. Here are some reasons why we might want
              to create a custom hook: a. Reusability: If we find ourself
              repeating the same code across multiple components, it's a good
              sign that we could benefit from creating a custom hook. b.
              Abstraction: Custom hooks can be used to abstract away complex or
              repetitive logic and provide a simpler and more intuitive
              interface to our components. c. Readability: By creating a custom
              hook, we can make our code more readable and easier to understand,
              since we can name the hook after the functionality it provides,
              and reuse it across multiple components.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
