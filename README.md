# SQL Play

[Preview link (netlify)](https://hiring-divyesh-parmar-sql-play.netlify.app/)

### A basic overview of your project.

- Folder structure is aimed to separate the functional logic from UI components. All the data has been added as dummy constants and utilised as required.
- `src` folder contains following
  - `containers`: for page level elements
  - `context`: React's context API. It allows creation of multiple context as the app and code base grows.
  - `service`: a Back-end for front-end service that contains logic for using fetch, or any other tool to make network calls
  - `utils`: helpful reusable function modules
  - `components`: Basic to required components that gets the required data to render from the context API
  - `constants`: table, query related constants with their mock responses as JSON files.

### The JavaScript framework you chose, along with any major plugins or packages installed.

- tailwindcss
  - utilsed this for all the `css` requirements
- postcss
  - this allows tailwind configuration for the project
- react.js
  - Essentially used react.js library

### The page load time of your application, and how you measured this time.

- To measure the load time, chrome's browser console Performance panel is used.
- This was done on the deployed bundle
- Few key metrics to look at are:
  - 4 ms Loading
  - 121 ms Scripting
  - 4 ms Rendering
  - 1 ms Painting
- Memory wise JS heap size is basically 7 to 10.5 MB.
- For the LCP (Largest Contentful paint) Size around - 16083, Timestamp: 248.1 ms. (from first load to when it actually appeared)

#### for loading tables and interactions

- Key metrics recorded are as below:
  - 1261 ms Experience
  - 113 ms Scripting
  - 53 ms Rendering
  - 37 ms Painting

### Any optimisations you did to decrease the load time or increase performance.

- Pagination concept to render large amount of rows of data. This allows separation of concern on the key metrics of performance while the `DOM` is painted (Largest contentful paint).
- Memory wise taking all computation heavy task at one place in react's context API. This allows code level separation between logical operations and UI elements.
- Another optimization that can be done is to use SSR to render table the table section, such that the computation of memory and rendering will be done on Server and HTML page will be shipped to the client. This will be best solution though it might affect the round-trip time for the calls and the HTML page can be heavy and caching also would not make sense since one particular table-data is not going to be requested from multiple users.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Deployment

- Deployed on netlify. App is accessible on this URL : https://hiring-divyesh-parmar-sql-play.netlify.app/

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
