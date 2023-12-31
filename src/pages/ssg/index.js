import axios from "axios";
import React from "react";

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_RECIPE}/getUser`);
  const post = res.data;
  console.log(post.data);
  //   const posts = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      post,
    },
  };
}

// TODO: Need to fetch `posts` (by calling some API endpoint)
//       before this page can be pre-rendered.
export default function Blog({ post }) {
  //   console.log(post);
  return (
    <ul>
      {post.data.map((item, index) => (
        <li key={index}>{item.username}</li>
      ))}
    </ul>
  );
}
