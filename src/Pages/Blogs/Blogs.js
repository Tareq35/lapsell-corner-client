import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1 className='text-4xl font-bold text-center my-10'>Blogs</h1>

            <div className="card w-8/12 mx-auto shadow-xl mb-10">
                <div className="card-body">
                    <h2 className="card-title"> Q.1- What are the different ways to manage a state in a React application?</h2>
                    <p>When we talk about state in our applications, it's important to be clear about what types of state actually matter.
                        <br />
                        There are four main types of state you need to properly manage in your React apps:
                        <br />
                        Local state<br />
                        Global state<br />
                        Server state<br />
                        URL state <br />
                        <strong>Local (UI) state</strong>  Local state is data we manage in one or another component.
                        Local state is most often managed in React using the useState hook. <br />
                        <strong>Global (UI) state</strong>  Global state is data we manage across multiple components.
                        Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least. <br />
                        <strong>Server state</strong>  Data that comes from an external server that must be integrated with our UI state.
                        Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state. <br />
                        <strong>URL state</strong>  Data that exists on our URLs, including the pathname and query parameters.
                        URL state is often missing as a category of state, but it is an important one. <br />
                    </p>
                </div>
            </div>
            <div className="card w-8/12 mx-auto shadow-xl mb-10">
                <div className="card-body">
                    <h2 className="card-title"> Q.1- How does prototypical inheritance work?</h2>
                    <p>Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__.
                    </p>
                </div>
            </div>
            <div className="card w-8/12 mx-auto shadow-xl mb-10">
                <div className="card-body">
                    <h2 className="card-title"> Q.1- What is a unit test? Why should we write unit tests?</h2>

                    <p>A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property. The isolated part of the definition is important. <br />
                        We should write unit tests because <br />
                        1- You can test units or functions of your project in isolation. <br />
                        2- Unit tests act as documentation for your code.<br />
                        3- They enable you to catch bugs early in the development process.<br />
                        4- Automated unit tests help a great deal with regression testing.<br />
                        5- They detect code smells in your codebase. For example, if you're having a hard time writing unit tests for a piece of code, it might be a sign that your function is too complex.<br />
                        6- They contribute to higher code quality.
                    </p>
                </div>
            </div>
            <div className="card w-8/12 mx-auto shadow-xl mb-10">
                <div className="card-body">
                    <h2 className="card-title"> Q.1- React vs. Angular vs. Vue?</h2>

                    <p>
                        <strong>Angular:</strong><br />
                        Angular has a steep learning curve, considering it is a complete solution, and mastering Angular requires you to learn associated concepts like TypeScript and MVC. Even though it takes time to learn Angular, the investment pays dividends in terms of understanding how the front end works.<br />
                        <strong>React:</strong><br />
                        React offers a Getting Started guide that should help one set up React in about an hour. The documentation is thorough and complete, with solutions to common issues already present on Stack Overflow. React is not a complete framework and advanced features require the use of third-party libraries. This makes the learning curve of the core framework not so steep but depends on the path you take with additional functionality. However, learning to use React does not necessarily mean that you are using the best practices.<br />
                        <strong>Vue:</strong><br />
                        Vue provides higher customize-ability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option. However, simplicity and flexibility of Vue is a double-edged sword — it allows poor code, making it difficult to debug and test.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;