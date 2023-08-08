import React from "react";
import "./Posts.scss";
import Post from "../Post/Post";

function Posts() {
	//TEMPORARY
	const posts = [
		{
			id: 1,
			name: "John Doe",
			userId: 1,
			profilePic: "/img/login.jpeg",
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
			img: "/img/posts.jpeg",
		},
		{
			id: 2,
			name: "Jane Doe",
			userId: 2,
			profilePic: "/img/profilePic.webp",
			desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
		},
	];
	return (
		<div className="posts">
			{posts.map((post) => (
				<Post key={post.id} post={post} />
			))}
		</div>
	);
}

export default Posts;
