# Welcome to the Work Experience Starter Repo

This repo or repository (a centalised storage area for code) can be thought of a clean slate for you to build your application from.

We've installed some things to help you get moving quickly, but there are some things that you might want to have a look at before your start your time with Leighton.

## So whats in this repository?

### Next.js

Next.js can be thought of as the base on which your application will grow from. It'll allow you create pages and have routes between them.

Traditionally, when you visit a website, your computer sends a request to a server, which then creates and sends back a complete page. Next.js makes it easier and faster to do this by preparing parts of the website in advance. This means websites can load more quickly and work more smoothly, giving you a better experience when you browse online.

Next.js has many features built into it some of the features will most likely use are;

- Routing
- Rendering
- Data Fetching

The full docs can be found at <https://nextjs.org/docs>

### React

Next.js and React go together like peas and carrots.

React is a tool that helps developers build interactive parts of a website. In a traditional web setup, the server sends a whole new page every time something changes. With React, only the specific parts of the page that need updating are changed. This means websites can respond more quickly and feel smoother to use, much like refreshing just a section of a picture rather than the whole image.

React has many concepts to understand, but these core principals are a great place to start

#### Components

Think of these as the building blocks of a website. Each component is like a small, reusable piece of the interface.

#### JSX

This is a special way of writing components. It looks a bit like HTML, making it easier to understand how your website is structured.

#### Props

Short for properties, these allow you to pass information from one component to another, much like giving instructions to a specific part.

#### State

This is how components keep track of changing data. It lets the website update parts of itself without reloading the whole page.

#### Event Handling

This covers how your website reacts when someone interacts with it (for example, clicking a button).

The [React Documentation](https://react.dev/) is agreat place to understand React just looking at the code snippets in [the describing the ui section](https://react.dev/learn/describing-the-ui)

### Radix-UI and Tailwind

**Radix UI** is a collection of ready-made, unstyled building blocks for website components. It provides basic interactive elements—like menus, modals, or tooltips—that work well out of the box and are designed with accessibility in mind. Developers can then style these components to match their website's look, making it easier to create interactive features that everyone can use.

More info can be found at the [Radix-UI Primitives docs page](https://www.radix-ui.com/primitives)

**Tailwind CSS** is a styling tool that helps developers design websites quickly. It offers a set of small, reusable classes that you can mix and match to apply specific styles (such as colours, margins, or text sizes) directly in your HTML. This approach makes it simpler to create a consistent and attractive design without writing a lot of custom CSS.

More infor on Tailwind can be found at the [Tailwind CSS site](https://tailwindcss.com/)

Radix UI and Tailwind CSS make a strong pair for building user interfaces. Radix UI provides a range of functional, accessible components—such as modals, tooltips, or dropdowns—ensuring the interactive parts of your website work well for everyone. Tailwind CSS, meanwhile, offers a flexible set of styling classes that let you customise these components quickly and consistently.

When used together, you can focus on creating a seamless, user-friendly experience with Radix UI, while Tailwind CSS helps you shape the visual design to match your brand or style. This combination allows you to build interfaces that are both highly functional and visually appealing without extra hassle.

## Choose what you want to develop

These are some of the application ideas that we have come up with that you might want to build. If you have small project that you would like to buid speak to us and lets explore it!

### Movie Explorer

Create a web application that allows users to search for movies using a public API like <https://www.omdbapi.com/>

Features:

- Search bar for querying movies
- Display list of results showing movie poster, title and summary
- Detailed view or modal for full detail
- Create a watch list feature

Learning Points: Handling API responses, routing (if using React Router), and dynamic lists.

### Markdown Editor with Live Preview

Develop a live markdown editor where users can write markdown text and see a real-time rendered preview.

Features:

- Two-pane layout: one for the editor, one for the preview.

- Use a markdown library (like marked) to render HTML.

- Option to switch between light and dark themes.

- Local storage saving for notes.

Learning Points: Managing controlled inputs, using third-party libraries, and real-time data processing.

### Kanban Task Board/Todo List

Build a simplified version of a Kanban board or todo list for managing tasks, this can use the back end from the previous work experience

Features:

- Columns representing different task statuses (e.g., To Do, In Progress, Done).

- Drag-and-drop functionality to move tasks between columns (using libraries like react-beautiful-dnd).

- CRUD operations for tasks.

- Responsive design to work well on various devices.

Learning Points: Advanced state management, implementing drag-and-drop, and dynamic UI updates.

### Memory Card Game

Create a simple card-matching memory game.

Features:

- A grid of cards that users flip to find matching pairs.

- Timer or scoring system to track performance.

- Simple animations for card flips.

- Reset and game-over states.

Learning Points: React state and lifecycle methods (or hooks), handling user interactions, and basic animations with CSS or React Transition Group.

### Tic Tac Toe

Create a classic Tic Tac Toe game where two players alternate placing Xs and Os on a 3x3 grid.

Features:

- A dynamic board that updates as players make moves.
- Logic to detect win, lose, or draw conditions.
- Option to implement a simple AI for single-player mode.
  Learning Points: Handling user input and state updates. Implementing game logic and win-check algorithms. Responsive design and component reusability.

### Rock, Paper, Scissors

Create a simple Rock, Paper, Scissors game where a player chooses an option and competes against a computer opponent.
Features:

- Buttons for Rock, Paper, and Scissors.
- Randomly generate the computer's move.
- Display the result of each round and keep score.

Learning Points: Implementing basic game logic with conditional statements. Event handling and state management. Simple UI design and feedback based on game results.

## Starting Development
