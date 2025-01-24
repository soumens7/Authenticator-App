# Authenticator App

A basic React app that demonstrates user authentication using Firebase Authentication. This app allows users to sign up and login securely, showcasing Firebase's easy-to-use authentication services.

## Features  
User Sign-Up functionality using Firebase Authentication.  
User Log-In functionality with Firebase.  
Password authentication (you can expand this to include social logins like Google or Facebook).  
Built with a clean and minimal React component structure.  

## Technologies Used
Frontend: React.js  
Backend: Firebase (Authentication)  
Styling: CSS (optional/customizable)  
Build Tool: Create React App or Vite (depending on the setup)  

## File Structure  
<pre>
Authenticator-App/  
 ├── src/  
 │     ├── components/  
 │     │    ├── Create.js         # User sign-up component  
 │     │    ├── Login.js          # User log-in component  
 │     ├── App.js                # Main entry point of the app  
 │     ├── firebaseConfig.js     # Firebase configuration and initialization  
 │     ├── index.js              # App rendering logic  
 ├── public/  
 │     ├── index.html            # HTML template  
 ├── package.json              # Project dependencies  
 └── README.md                 # Project documentation (you are reading this)  
</pre>
## Getting Started  
1. Prerequisites  
Node.js installed on your system.  
A Firebase Project set up. You can create one at Firebase Console.  
2. Firebase Setup  
Go to the Firebase Console and create a new project.  
Enable Email/Password Authentication:
Navigate to Authentication > Sign-in method.
Enable the Email/Password provider.
Add your app’s configuration:
Go to Project Settings > General > Your apps.
Copy the Firebase config object.
3. Install Dependencies
Run the following commands to set up the project:

npm install
4. Add Firebase Configuration
Create a firebaseConfig.js file in the src folder and paste your Firebase configuration:

5. Run the App
Start the development server:

npm start

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

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
