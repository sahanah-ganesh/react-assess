This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

# Assessment

The goal of this assessment was to implement a simple React application, where users will be able to view a job candidate's video responses, comment on the responses & save the data.

## How should it work?

The user of this react application should be able to view the video response(s) of job candidates applying for a job at their company. The application should have the following workflow,

1. Choose candidate from a list.
2. Depending on the selection in the first step, if the selected candidate has an application, display the video response(s) of the candidate with the relevant question displayed in text. If the selected candidate does not have an application, display appropriate message.
3. For each video response of a candidate, provide an option to enter comments.
4. Provide a "Save" button that saves the comments to the api.json file.

## Requirements

Only step 1 should be visible when no candidate is picked. Step 1,2,3 and 4 should be visible when a candidate is picked.

User should be able to change candidate selection at any time.

You can use whatever libraries, task runners and build processes you like. React and plain JavaScript are the only requirements (ES6 encouraged, but no TypeScript, CoffeeScript, etc). Redux is strongly encouraged if you see a need for it.

## Dependencies

  json-server: "^0.14.0",
  react: "^16.8.6",
  react-dom: "^16.8.6",
  react-scripts: "0.9.5",
  react-redux: "^7.1.0",
  redux-thunk: "^2.3.0",
  redux: "^4.0.1",
  redux-thunk: "^2.3.0",
  uuid: "^3.3.2"

## Getting Started

1. Install dependencies using the `npm install` command.
2. Launch API with `npm start` from the react-assess folder. You can navigate to <http://localhost:3010/> in your browser with "/candidates", or "/questions", or "/applications" to see the JSON.
3. Start the web server using the `npm start` command from the assess folder. The app will be served at <http://localhost:3000/>.
4. Go to <http://localhost:3000/> in your browser.


## Next Steps

**How did you decide which technologies to use as part of your solution?**

  I used Create React App before and found it to be a great jumping off point. I implemented Redux for state management as a second submission.

**Are there any improvements you could make to your submission?**

  I did not implement any testing at this time but would have liked to. Also I accidentally put node_modules on github and only realized after the fact. I would have liked to create a gitignore from the beginning.

**What would you do differently if you were allocated more time?**

  I would add a random image API for the candidate pictures.

## Screenshots

!["Screenshot of Main Page"](https://github.com/sahanah-ganesh/react-assess/blob/master/Screenshots/Main.png)

!["Screenshot of Expand"](https://github.com/sahanah-ganesh/react-assess/blob/master/Screenshots/Expand.png)

!["Screenshot of Comment"](https://github.com/sahanah-ganesh/react-assess/blob/master/Screenshots/Comment.png)
