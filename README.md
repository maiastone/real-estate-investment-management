This is a web application for tracking key performance metrics for real estate income properties.

Upon login, the user can see a card view of all properties which shows the gross rental income, month-to-date, on the income view.  Click the button for debt, and you can see current monthly mortgage payment as applied to principal and interest.

For a detail view, click any card, graph icon, and user is directed to a detail view showing rental income by month for the year-to-date, and on the debt detial view, a graph showing the amortization schedule over the life of the loan.

In this phase of the project, heavy emphasis was placed on the design process, and creating a clean and clear user interface and experience.  I whiteboarded the initial wireframes, and then used sketch for a higher fidelity.  The user was consulted to determine the most important data and then again to determine if the visualization was effective and appropriate.  The MVP uses data from excel and runs it through Victor, a set of modular charting components for React.  Next steps would be to incorporate the Quickbooks and Airbnb API for pulling the property information.   

Tech stack and tools: React, React-Router, Victory, Node, Express, SASS, Auth0, Webpack, Chai, Enzyme

[Live on Heroku](https://fierce-cove-58460.herokuapp.com/)


To install the dependencies:

```
npm install
```

To fire up a development server:

```
npm start
```

Once the server is running, you can visit:

* `http://localhost:8080/webpack-dev-server/` to run your application.
* `http://localhost:8080/webpack-dev-server/test.html` to run your test suite in the browser.

To build the static files:

```js
npm run build
```


To run tests in Node:

```js
npm test
```
