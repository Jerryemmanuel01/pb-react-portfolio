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

----------------Lesson 2-----------------

Goal: Teach how React can render different UI based on conditions.

1. Why Conditional Rendering?

Apps often need to display different UIs depending on data or state.
Example: A login/logout button, loading state, or showing “No data” when a list is empty.

2. Methods

if/else (outside return):

function Greeting({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h1>Welcome back!</h1>;
  }
  return <h1>Please sign in.</h1>;
}


Ternary Operator:

function Greeting({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign in.</h1>}
    </div>
  );
}


Logical AND (&&):

function Notification({ messages }) {
  return (
    <div>
      {messages.length > 0 && <p>You have {messages.length} messages</p>}
    </div>
  );
}

3. Mini Project: Login/Logout Toggle

Use useState to manage login status.

Button toggles between “Login” and “Logout.”

Display greeting depending on state.

✅ Students learn: rendering different UI depending on state/props.

Day 5: Lists & Forms

Goal: Teach handling arrays in state, rendering lists, and controlled form inputs.

1. Lists

Using .map() to render components:

const users = ["Alice", "Bob", "Charlie"];

function App() {
  return (
    <ul>
      {users.map((user, index) => (
        <li key={index}>{user}</li>
      ))}
    </ul>
  );
}


Importance of unique keys when rendering lists.

2. Forms

Controlled components: input fields where value comes from state.

import { useState } from "react";

function FormExample() {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Hello, ${name}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}


Multiple inputs with one state object:

const [form, setForm] = useState({ name: "", email: "" });

<input
  name="name"
  value={form.name}
  onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}


/>


### 3. **Mini Project: Todo List App**
- Features:
- Input field for new task.
- Button to add task.
- Render tasks in a list.
- Button to delete tasks.
- Reinforces **state + lists + forms**.

✅ Students learn: data handling with lists, managing form state, adding/removing items.

---

## **Day 6: Styling in React**
**Goal:** Explore different ways to style React components.

### 1. **Inline Styles**
```jsx
function Button() {
return <button style={{ backgroundColor: "blue", color: "white" }}>Click</button>;
}

2. CSS in External File

Create App.css, import in App.jsx.

import "./App.css";


Write normal CSS, then apply classes.

3. Dynamic Styles

Change style based on state:

function ToggleButton() {
  const [active, setActive] = useState(false);

  return (
    <button
      onClick={() => setActive(!active)}
      style={{
        backgroundColor: active ? "green" : "red",
        color: "white"
      }}
    >
      {active ? "Active" : "Inactive"}
    </button>
  );
}

4. Tailwind CSS (optional but recommended)

Install Tailwind.

Teach how to use utility classes:

<button className="bg-blue-500 text-white px-4 py-2 rounded">
  Click Me
</button>

5. Mini Project: Theme Switcher

Use useState for dark/light mode.

Toggle a button to switch styles dynamically.

Apply Tailwind or CSS classes to change background & text.

✅ Students learn: multiple styling techniques, dynamic UI with state, theme toggling.

🎯 End of Week 2 – Students Can:

Use conditional rendering for dynamic UIs.

Render lists with keys.

Handle forms and input data.

Style React apps using inline styles, CSS, and Tailwind.

Build small projects (Todo app, Login/Logout toggle, Theme Switcher).


Week 3 – React Intermediate

Goal: Understand effects (useEffect), fetching data, and building reusable components.

Day 7: useEffect Hook (Side Effects in React)

Goal: Learn how React handles side effects like timers, API calls, or DOM updates.

1. What is a Side Effect?

Code that affects something outside the component (like fetching data, updating the document title, setting a timer).

React’s rendering is pure → must use useEffect for side effects.

2. Basic useEffect
import { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component rendered or count changed:", count);
  }, [count]); // runs when count changes

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}


useEffect(() => {...}, []) → runs once (on mount).

useEffect(() => {...}, [dep]) → runs when dep changes.

useEffect(() => {...}) → runs on every render.

3. Cleanup in useEffect
useEffect(() => {
  const timer = setInterval(() => {
    console.log("Tick...");
  }, 1000);

  return () => clearInterval(timer); // cleanup when component unmounts
}, []);

4. Mini Project: Timer / Stopwatch

Use setInterval inside useEffect.

Buttons: Start, Stop, Reset.

Cleanup interval when stopped.

✅ Students now understand component lifecycle with useEffect.

Day 8: Fetching Data

Goal: Teach how to fetch API data and render it dynamically.

1. Fetching with Fetch API
import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? <p>Loading...</p> : (
        <ul>
          {users.map(user => <li key={user.id}>{user.name}</li>)}
        </ul>
      )}
    </div>
  );
}

2. Fetching with Axios (Optional)
npm install axios

import axios from "axios";

useEffect(() => {
  axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(res => console.log(res.data));
}, []);

3. Handling Errors & Loading State

Always manage:

loading → show spinner.

error → show error message.

data → render list.

4. Mini Project: GitHub Users Finder

Input field for GitHub username.

On submit, fetch user data from GitHub API (https://api.github.com/users/{username}).

Display avatar, name, bio, followers.

✅ Students learn: async fetching, managing loading/error states, and dynamic rendering.

Day 9: Reusable Components & Prop Drilling

Goal: Learn how to make components reusable and understand prop drilling problems.

1. Why Reusable Components?

Avoid duplication.

Make components flexible by passing props.

2. Reusable Button Component
function Button({ label, onClick, type = "primary" }) {
  const styles = type === "primary" 
    ? "bg-blue-500 text-white px-4 py-2 rounded"
    : "bg-gray-300 text-black px-4 py-2 rounded";

  return <button className={styles} onClick={onClick}>{label}</button>;
}


Usage:

<Button label="Save" onClick={() => alert("Saved!")} />
<Button label="Cancel" type="secondary" />

3. Reusable Card Component
function Card({ title, content }) {
  return (
    <div className="border p-4 rounded shadow">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}


Usage:

<Card title="React Basics" content="Learn JSX, props, and state" />
<Card title="React Advanced" content="Hooks, Context, Router" />

4. Prop Drilling (Problem)

When props have to be passed down multiple levels.

Example:

function Child({ user }) {
  return <p>{user.name}</p>;
}

function Parent({ user }) {
  return <Child user={user} />;
}

function App() {
  const user = { name: "Alice" };
  return <Parent user={user} />;
}


Show why this becomes a problem → prepares them for Context API in Week 4.

5. Mini Project: Reusable Components Showcase

Build a Product List using reusable Card and Button components.

Each product has name, price, Buy button.

✅ Students learn: writing flexible reusable components & start thinking about component hierarchies.

🎯 End of Week 3 – Students Can:

Use useEffect for side effects (timers, subscriptions, etc.).

Fetch API data & manage loading/error states.

Build reusable components (buttons, cards, etc.).

Understand prop drilling problem (sets them up for Context in Week 4).

Create mini projects: Timer, GitHub Finder, Product List.