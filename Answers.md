# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

  --> React JS is a User Interface library that utilizes JavaScript and JSX. It was developed by Facebook developers and was designed to create rich and abundant user interfaces without bogging down memory in the DOM/browser. It was also designed with the mindest of scalability; build the component code once and reuse as needed for scale.  It utilizes methods like render() which auto update/render to the screen whenever the state data is altered. This is what makes React reactive.

2. What does it mean to _think_ in react?

  --> To think in React is simply to think like an architect in regards to your app layout.  Since data flows from the parent component to child components (via state to props), thinking in React would be establishing which component(s) will have state, which component(s) will have props passed to it, what data/methods are needed or not needed, etc.

3. Describe state.

  --> State or state data is the data that your components have access to.  If that state is established on that component, then it can update the state data via this.setState({}).  If its a child component that has access to state through props as an argument/parameter, then props is read-only but a method can be passed on the props, which will in turn update state data on the component that houses it. 

4. Describe props.

  --> Props is essentially read-only/immutable state data that is passed to child components as a props parameter/argument since that component doesn't house the state data.
  The child component is not able to update the state data directly, but can utilize methods written on the stateful component, which would then utilize methods like setState({}) to update the state. Props are passed to use both methods and the data represented in props, which is drawn from state.
