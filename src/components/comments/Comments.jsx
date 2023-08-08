import React, { useContext } from "react";
import "./Comments.scss";
import { AuthContext } from "../../contex/authContext";
const Comments = () => {
	const { currentUser } = useContext(AuthContext);
	//Temporary
	const comments = [
		{
			id: 1,
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
			name: "John Doe",
			userId: 1,
			profilePicture: "/img/login.jpeg",
		},
		{
			id: 2,
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
			name: "Jane Doe",
			userId: 2,
			profilePicture: "/img/profilePic.webp",
		},
	];

	return (
		<div className="comments">
			<div className="write">
				<img src={currentUser.profilePic} alt="" />
				<input type="text" placeholder="write a comment" />
				<button>Send</button>
			</div>
			{comments.map((comment) => (
				<div className="comment" key={comment.id}>
					<img src={comment.profilePicture} alt="" />
					<div className="info">
						<span>{comment.name}</span>
						<p>{comment.desc}</p>
					</div>
					<span className="date">1 hour ago</span>
				</div>
			))}
		</div>
	);
};

export default Comments;
