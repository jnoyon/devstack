# DevStack

DevStack is your ultimate platform for exploring, comparing, and choosing the right technologies for modern web development. Discover powerful frontend frameworks, backend solutions, databases, and essential developer tools - all in one place. Compare technologies side by side, explore their features, and build a customized development stack that perfectly matches your project's goals. Whether you're a beginner or an experienced developer, DevStack helps you make smarter technology decisions and create better applications.

## Technology

- React
- Tailwind CSS
- Daisy UI

## Features

- Resposive
- Single Page Application
- Reusable Component
- Duplicate Technology Management

### 1. What is JSX, and why is it used in React?

JSX is a syntax that allows us to write HTML-like code inside JavaScript. It makes React components easier to write and understand.

### 2. What is the difference between props and state?

- **Props:** Used to pass data from parent to child.
- **State:** Used to store and manage data inside a component.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` is used to manage component data. I used it to store technologies and selected technologies.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` runs side effects in a component. I used it to fetch technology data from the JSON file when the component loaded.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

A unique key helps React identify which items have changed, been added, or removed.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different content based on a condition. I used it to show an empty stack message when no technology was selected.

```jsx
{
  selectedTechnologies.length > 0 ? <Stack /> : <p>Your stack is empty.</p>;
}
```

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data using props. A child sends information back by calling a function received through props.
