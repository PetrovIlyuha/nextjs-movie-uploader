import React, { Component } from "react";
import { getPosts } from "../actions/index";
export default class Posts extends Component {
  static async getInitialProps() {
    const posts = await getPosts();

    return { posts };
  }
  render() {
    const { posts } = this.props;
    console.log(posts);
    return (
      <div className="container">
        <h1>Posts Page</h1>
        {posts.map(post => {
          return (
            <ul>
              <li key={post.id}>
                <span>{post.id}</span>
                <span>{post.title}</span>
              </li>
            </ul>
          );
        })}
      </div>
    );
  }
}
