This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

# Assessment

The goal of this assessment was to implement a simple React application, where users will be able to view a job candidate's video responses, comment on the responses & save the data.

## How should it work?

The user of this react application should be able to view the video response(s) of job candidates applying for a job at their company. The application should have the following workflow,

1. Choose candidate from a list.
2. Depending on the selection in the first step, if the selected candidate has an application, display the video response(s) of the candidate with the relevant question displayed in text. If the selected candidate does not have an application, display appropriate message.
3. For each video response of a candidate, provide an option to enter comments.
4. Provide a "Save" button that saves the comments to the api.json file. [INCOMPLETE]

## Requirements

Only step 1 should be visible when no candidate is picked. Step 1,2,3 and 4 should be visible when a candidate is picked.

User should be able to change candidate selection at any time.

You can use whatever libraries, task runners and build processes you like. React and plain JavaScript are the only requirements (ES6 encouraged, but no TypeScript, CoffeeScript, etc). Redux is strongly encouraged if you see a need for it.

## Dependencies

  json-server: "^0.14.0"
  react: "^16.8.6",
  react-dom: "^16.8.6",
  react-scripts: "0.9.5"
  react-router-dom: "^5.0.1" (installed but not used)

## Getting Started

1. Install dependencies using the `npm install` command.
2. Launch API with `npm start` from the react-assess folder. You can navigate to <http://localhost:3010/> in your browser with "/candidates", or "/questions", or "/applications" to see the JSON.
3. Start the web server using the `npm start` command from the assess folder. The app will be served at <http://localhost:3000/>.
4. Go to <http://localhost:3000/> in your browser.


## Next Steps

**How did you decide which technologies to use as part of your solution?**

  I used Create React App before and found it to be a great jumping off point. I initially installed react-router-dom thinking I would create routes for candidates, questions and applications like for the API but as I went along I found it was not necessary (not in the requirements).

  I didn't use Redux and tried to handle state management myself. However, it is something I would definitely implement had I more time.

**Are there any improvements you could make to your submission?**

  I would have liked to have gone back and refactored some duplicate code. There was one component that can be refactored to be a functional component. I would split up the style CSS pages by component insted of using List.css to hold everything.

  I did not implement any testing at this time but would have liked to. Also I accidentally put node_modules on github and only realized after the fact. I would have liked to create a gitignore from the beginning.

**What would you do differently if you were allocated more time?**

  I would add some placeholders for the candidates without applications instead of just hiding the expand button. For example, having a text saying "APPLICATION IN PROGRESS" or something along these lines.

  I would have comments added to the API so they can persist on the page even when navigating away. Also a way to add a username and delete comments.

  I would add a random image API for the candidate pictures.

## Screenshots

!["Screenshot of Main Page"](https://github.com/sahanah-ganesh/react-assess/blob/master/Screenshots/Main.png)

!["Screenshot of Expand"](https://github.com/sahanah-ganesh/react-assess/blob/master/Screenshots/Expand.png)

!["Screenshot of Comment"](https://github.com/sahanah-ganesh/react-assess/blob/master/Screenshots/Comment.png)
