import { React, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './Posts.css';
import Mentorpost from '../../static/images/mentor-post.png';
import Financialpost from '../../static/images/financial-post.png';
import Reviewspost from '../../static/images/reviews-post.png';
import AuthService from '../../services/auth-service';
import postsService from '../../services/postsService';
import UserService from '../../services/user-service';

function Posts() {
	const { user } = useSelector((state) => state.logged);
	// const curruser = JSON.parse(window.localStorage.getItem('USER_STATE'));
	// const newcurruser = JSON.parse(curruser.logged.user);

	// returns access token
	const currUserFun = () => {
		if (user) {
			const currUser = JSON.parse(window.localStorage.getItem('USER_STATE'));
			const currUserInfo = JSON.parse(currUser.logged.user);
			const accessToken = currUserInfo.accessToken;
			return accessToken;
		}
	};

	const [data, setData] = useState(null);
	useEffect(() => {
		postsService.getPosts().then((posts) => {
			var postData = posts.data;
			const usernamePromise = postData.map((element) => {
				const username = UserService.getUserID(element.author);

				return username.then((elem) => {
					element.username = elem.data.username;
				});
			});
			Promise.all(usernamePromise).then(() => setData(postData));
		});
	});
	// Gets post from database and returns parsed jsx elements
	//          <input type="button" value="Submit" onClick={deletePost(e._id)}></input>

	const generatePosts = () => {
		return data.map((e) => {
			var allSkills = '';
			for (let i = 0; i < e.skills.length; i++) {
				allSkills += e.skills[i] + ' ';
			}

			return (
				<div className="cards">
					<div className="card">
						<div className="postName">
							<p>{e.username}</p>
							<h4>{e.title}</h4>
						</div>
					
						<div className="postBody">
							<h5>Skill: {allSkills}</h5>
							<p>{e.content}</p>
						</div>
					
						<input
							className="button"
							type="button"
							value="Delete"
							onClick={() => postsService.deletePost(e._id, currUserFun())}
						></input>
					</div>
				</div>
			);
		});
	};


	return (
		<div className="posts">
			<h1>POSTS</h1>

			{/* Create Post button | Accessed via log-in*/}
			{currUserFun() && (
				<button>
					<NavLink className="createPost" to="/createPost">
						{' '}
						+ Post
					</NavLink>
				</button>
			)}

			{/* DisplaysPosts */}
			<div style={{}}>
				<div className="displayPosts">{data ? generatePosts() : 'loading'}</div>
			</div>
			{/* PlaceholderPosts */}
			{/* <div className="blurbs">
				<img className="mentorpost" src={Mentorpost} alt="" />
				<img className="financialpost" src={Financialpost} alt="" />
				<img className="reviewspost" src={Reviewspost} alt="" />
			</div> */}
		</div>
	);
}

export default Posts;

// !!!DO NOT UNCOMMENT THIS!!!
// <button onClick={post({
//     user:{session.user},
//     tags:[tag1, tag2],
//     title:'example name of a post number 2',
//     image:'./place',
//     description:'this is an example of what a description on our post number 2 will look like',
// })}>
//     post
// </button>
