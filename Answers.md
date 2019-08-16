# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

> ReactJS is a popular open-source JavaScript library used for building user interfaces on the front end. ReactJS solves the problem of performance-intensive DOM operations rendering slowly in an application. Web pages or apps that have data that change over time at high rates requires DOM updates to be very fast and to be reflected in other parts of the user interface that use the same data. ReactJS addresses this problem via a concept called virtual DOM, where it only updates DOM elements that have changed, all without having the page reload. This reduces DOM operations and refreshes, thus considerably improving a site or app's performance.

2. What does it mean to think in react?

> Thinking in React, or thinking about building components and applications with React, involves the following steps:
>
> 1. Break the User Interface into a component hierarchy
> 2. Build a static version in React
> 3. Identify the minimal (but complete) representation of the UI state
> 4. Identify where state should live
> 5. Add inverse data flow

3. Describe state.

> State is a plain JavaScript object that holds information that influences the output of render. State is managed _within_ components, similar to variables declared within a function.

4. Describe props.

> Like state, props are plain JavaScript objects that hold information that influence the output of render. Props, short for "properties," get passed _to_ a component, similar to function parameters.

5. What are side effects, and how do you sync effects in a React component to state or prop changes?

> Side effects, or "effects," are operations that can affect other components but can't be done during rendering. Examples of effects include data fetching, subscriptions, or manually changing the DOM from React components. You sync effects in a React component to state or prop changes using the Effect Hook `useEffect`, by passing in a an array as an optional second argument to `useEffect` (the first argument is a function containing imperative code that will run after the render is committed to the screen). The array contains the values that the effect depends on; the effect will be fired if one of the values in the array, also known as the effect's dependencies, changes.
