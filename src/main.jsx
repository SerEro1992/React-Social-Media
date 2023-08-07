import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { DarkModeContexProvider } from "./contex/darkModeContext.jsx";
import {  AuthContexProvider } from "./contex/authContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<DarkModeContexProvider>
			<AuthContexProvider>
				<App />
			</AuthContexProvider>
		</DarkModeContexProvider>
	</React.StrictMode>
);
