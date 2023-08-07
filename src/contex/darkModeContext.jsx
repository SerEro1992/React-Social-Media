import React, { createContext, useEffect, useState } from "react";

export const DarkModeContex = createContext();

export const DarkModeContexProvider = ({ children }) => {
	const [darkMode, setDarkMode] = useState(
		JSON.parse(localStorage.getItem("darkMode")) || false
	);

	const toggle = () => {
		setDarkMode(!darkMode);
	};

	useEffect(() => {
		localStorage.setItem("darkMode", darkMode);
	}, [darkMode]);

	return (
		<DarkModeContex.Provider value={{ darkMode, toggle }}>
			{children}
		</DarkModeContex.Provider>
	);
};
