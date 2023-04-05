### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
React is Javascript library used for buildin user interfaces. develioped by Facebook.React allows developers to create reusable UI components and manage the state of the application efficiently.

- What is Babel?
open-source JavaScript compiler that is used to convert modern JavaScript code into backward-compatible versions of JavaScript that can run in older browsers or environments that don't yet support the latest JavaScript features.

- What is JSX?
JSX is an extension to the JavaScript language that allows developers to write HTML-like syntax within their JavaScript code. It is commonly used in combination with React to write declarative UI code in a more intuitive and efficient way.

- How is a Component created in React?
by either Function Components or Class component.

- What are some difference between state and props?
Definition:
Props are passed into a component as an argument, and are used to provide data to the component. They are read-only and cannot be modified by the component itself. In contrast, state is managed within the component and can be modified by the component itself.
Scope:
Props are scoped to the component that receives them and its child components. They cannot be accessed outside of the component hierarchy. In contrast, state is local to the component that manages it, and can be accessed and modified within that component.
Updating:
Props are immutable and cannot be changed by the component that receives them. If a change is required, the parent component must update the prop and pass it down again. In contrast, state is mutable and can be updated by the component itself, usually in response to user interaction or other events.
Default values:
Props can have default values specified by the parent component. In contrast, state must be initialized within the component itself, usually in the constructor.
Overall, props are used to provide data to a component, while state is used to manage data within a component. Understanding the differences between them is crucial to writing efficient and maintainable React components.

- What does "downward data flow" refer to in React?
In React, "downward data flow" refers to the practice of passing data from a parent component down to its child components through props. This means that the parent component manages the state and passes it down to its children as props.

- What is a controlled component?
In React, a controlled component is a form element, such as an input or textarea, whose value is controlled by React's state. In other words, the value of the form element is stored in the component's state and updated when the user interacts with the element.

- What is an uncontrolled component?
n React, an uncontrolled component is a form element, such as an input or textarea, whose value is not controlled by React's state. Instead, the value is managed by the browser's DOM.

- What is the purpose of the `key` prop when rendering a list of components?
The key prop is a special attribute in React that is used to identify the items in a list of components. It is used when rendering a list of components to help React identify which components have changed, been added or removed, and to optimize the rendering process.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
Using an array index as a key prop when rendering a list of components is generally considered a poor choice because it can lead to unexpected and problematic behavior.

- Describe useEffect.  What use cases is it used for in React components?
useEffect is a hook in React that allows a functional component to interact with the React lifecycle methods, such as componentDidMount, componentDidUpdate, and componentWillUnmount.
The useEffect hook takes two arguments: a callback function and an array of dependencies. The callback function is executed after every render, and it can perform any side effects, such as updating the DOM, fetching data, or setting up subscriptions. The array of dependencies is used to tell React when to re-run the callback function. If the array is empty, the callback function is only run once when the component mounts, similar to componentDidMount. If the array contains values, the callback function is re-run whenever any of those values change, similar to componentDidUpdate.


- What does useRef do?  Does a change to a ref value cause a rerender of a component?
useRef is a hook in React that allows a functional component to create a mutable reference to a value, which can be accessed across renders.
Unlike state, when a ref value changes, it does not cause a rerender of the component. Instead, it allows the component to store and access mutable values between renders without triggering a rerender.
Here are a few use cases for the useRef hook in React components:
Accessing DOM elements: useRef can be used to create a reference to a DOM element, which can be accessed and manipulated directly in the component code.
Caching values: useRef can be used to cache a value that is expensive to compute or fetch, so that it can be reused across renders without recomputing or refetching.
Storing component state: useRef can be used to store a value that is not used in rendering, but needs to be accessed and manipulated across renders.

- When would you use a ref? When wouldn't you use one?
A ref in React is a way to reference a component or element directly in the code. It can be useful in certain situations where you need to access or manipulate the component or element directly, such as focusing an input field or triggering a scroll animation.

- What is a custom hook in React? When would you want to write one?
A custom hook in React is a reusable function that allows you to encapsulate common logic or behavior that can be shared across multiple components. Custom hooks can use built-in React hooks, such as useState and useEffect, and can also be composed of other custom hooks.
You might want to write a custom hook in React if you find yourself duplicating code across multiple components, or if you have a complex logic or behavior that needs to be reused in multiple places. Custom hooks allow you to abstract away the details of the implementation, and expose a simple interface that can be used by other components.