import React, { useContext } from "react";
import "./Stories.scss";
import { AuthContex } from "../../contex/authContext";

const Stories = () => {
	const { currentUser } = useContext(AuthContex);
	//TEMPORARY
	const stories = [
		{
			id: 1,
			name: "John Doe",
			img: "/img/story.jpeg",
		},
		{
			id: 2,
			name: "John Doe",
			img: "/img/story.jpeg",
		},
		{
			id: 3,
			name: "John Doe",
			img: "/img/story.jpeg",
		},
		{
			id: 4,
			name: "John Doe",
			img: "/img/story.jpeg",
		},
	];

	return (
		<div className="stories">
			<div className="story">
				<img src={currentUser.profilePic} alt="" />
				<span>{currentUser.name}</span>
				<button>+</button>
			</div>
			{stories.map((story) => (
				<div className="story" key={story.id}>
					<img src={story.img} alt="" />
					<span>{story.name}</span>
				</div>
			))}
		</div>
	);
};

export default Stories;
