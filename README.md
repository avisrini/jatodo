# Just Another Todo App

This is a simple Todo application built with HTML, CSS, and JavaScript. The app allows users to add, edit, and remove todos, and it saves the todos in the browser's local storage. Demo available at https://jatodo.netlify.app/

## Project Structure

```
images/
index.html
index.js
styles.css
```

- `images/`: Contains images used in the project.
- `index.html`: The main HTML file that structures the web page.
- `index.js`: The JavaScript file that contains the logic for adding, editing, and removing todos.
- `styles.css`: The CSS file that styles the web page.

## Features

- Add new todos.
- Edit existing todos.
- Remove todos.
- Save todos in local storage.

## Usage

1. Clone the repository or download the project files.
2. Open `index.html` in a web browser.

## Code Overview

### HTML

The HTML file sets up the structure of the web page, including the form for adding todos and the section for displaying current todos.

### JavaScript

The JavaScript file contains the following functions:

- `addTodo()`: Adds a new todo to the list.
- `removeTodo(index)`: Removes a todo from the list by index.
- `editTodo(index)`: Edits a todo by index.
- `updateUI()`: Updates the user interface to reflect the current state of the todo list.

### CSS

The CSS file styles the web page, including the layout, fonts, and colors.

## Local Storage

The app uses the browser's local storage to save the todo list. When the page is loaded, the app retrieves the saved todos from local storage and displays them.

## License

This project is licensed under the MIT License.

## Acknowledgements

- [Google Fonts](https://fonts.google.com/)
- [Font Awesome](https://fontawesome.com/)
- [cdnjs](https://cdnjs.com/)
