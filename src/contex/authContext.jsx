import React, { createContext, useEffect, useState } from "react";

export const AuthContex = createContext();

export const AuthContexProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(
		JSON.parse(localStorage.getItem("user")) || null
	);

	const login = () => {
		setCurrentUser({
			id: 1,
			name: "Jane Doe",
			profilePic: "/img/login.jpeg",
		});
	};

	useEffect(() => {
		localStorage.setItem("user", JSON.stringify(currentUser));
	}, [currentUser]);

	return (
		<AuthContex.Provider value={{ currentUser, login }}>
			{children}
		</AuthContex.Provider>
	);
};
