<<<<<<< HEAD
import React, { useEffect, useState } from "react"; // JSX
import ReactDOM from "react-dom/client";
import "./index.css";
=======
import React, { useEffect, useState } from 'react'; // JSX
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './Components/App';
// import MyComponent from './Components/MyComponent';
import MyComponent2 from './Components/MyComponent2';
import reportWebVitals from './reportWebVitals';
import MyContextProvider from './Components/MyContextProvider';
>>>>>>> f3ba24b23f9347a44b5aa42209fd875ff255b882

import reportWebVitals from "./reportWebVitals";
import MyContextComponent from "./Components/MyContextComponent";
import ErrorBoundary from "./Components/ErrorBoundary";
import MyMagicComponent from "./Components/MyMagicComponent";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<<<<<<< HEAD
	<React.StrictMode>
		<MyContextComponent>
			{/* <App /> */}
			{/* <MyComponent name="Gawee" /> */}
			{/* <MyComponent2 /> */}
			<ErrorBoundary>
				<MyMagicComponent />
			</ErrorBoundary>
		</MyContextComponent>
	</React.StrictMode>
=======
  <React.StrictMode>
  <MyContextProvider>
  { /* <App /> */ }
  { /* <MyComponent name="Gawee" /> */ }
  { /* <MyChatContextProvider>
      <Chat />
      <ChatToolbar />
</MyChatContextProvider>*/ }
    <MyComponent2 />
  </MyContextProvider>
  </React.StrictMode>
>>>>>>> f3ba24b23f9347a44b5aa42209fd875ff255b882
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
