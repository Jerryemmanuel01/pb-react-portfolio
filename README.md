# React Js



📅 Week 1 – React Fundamentals 
Day 1: Introduction to React & First Component

Goal: Get students comfortable with React’s ecosystem and build their very first component.

1. What is React?

JavaScript library for building user interfaces.

Why React? (component-based, reusable, fast rendering with Virtual DOM, supported by a large community).

Difference between SPA (Single Page Applications) and traditional multi-page websites.


Traditional: full page reload on navigation.
React SPA: loads once, updates only parts that change.

2. Environment Setup

Install Node.js (if not already).

Create project with:

Vite (recommended): npm create vite@latest my-app → select React → JavaScript.

or Create React App: npx create-react-app my-app (slower).

Run project:

cd my-app
npm install
npm run dev


Show students project folder structure (src, App.jsx, index.html, main.jsx).

3. First Component

Explain: React app = components tree.

Default App.jsx is a component.

Create a simple functional component:

function Greeting() {
  return <h1>Hello, React!</h1>;
}
export default Greeting;


Import and render inside App.jsx:

import Greeting from "./Greeting";

function App() {
  return (
    <div>
      <Greeting />
    </div>
  );
}


✅ First React component created.

Mini Exercise (in-class):

Ask students to create a component called Welcome that displays their name and favorite color.

Day 2: JSX & Props

Goal: Learn JSX rules and pass data to components.

1. JSX (JavaScript + XML)

Looks like HTML but runs inside JS.

Rules:

Must return a single parent element.

Use {} for JS expressions.

Use className instead of class.

All tags must be closed (<img />).

Example:

function Profile() {
  const name = "Jerry";
  const age = 25;

  return (
    <div>
      <h1>{name}</h1>
      <p>Age: {age}</p>
    </div>
  );
}

2. Props (Passing Data)

Props = inputs to components.

Example:

function UserCard({ name, age }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <UserCard name="Alice" age={22} />
      <UserCard name="Bob" age={30} />
    </div>
  );
}


Explain: props are read-only, cannot be changed inside the component.

3. Rendering Lists

Use .map() to render multiple components.

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];

function App() {
  return (
    <div>
      {users.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}


✅ Props and JSX mastered.

Mini Exercise (take-home):

Build a ProductCard component that takes name, price, and description as props and renders a card layout.

Render 3 products using .map().

Day 3: State & Event Handling

Goal: Introduce useState, event handling, and build an interactive app.

1. What is State?

Props = external data given to a component.

State = internal data that a component manages.

Example with useState:

import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

2. Event Handling

Events in React use camelCase (onClick, onChange).

Example: handling input:

function InputExample() {
  const [text, setText] = useState("");

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>You typed: {text}</p>
    </div>
  );
}

3. Mini Project: Counter App

Features:

Show count.

Buttons: Increment, Decrement, Reset.

Bonus: Prevent going below 0.

✅ Students now know state + events = interactive apps.

🎯 End of Week 1 – Students Can:

Understand React basics & folder structure.

Create and use functional components.

Pass data via props.

Use JSX with expressions & conditions.

Manage state with useState.

Handle user events (onClick, onChange).

👉 Do you want me to also prepare assignments & weekend project ideas for Week 1, just like we did for HTML/CSS/JS?