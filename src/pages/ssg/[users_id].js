// import axios from "axios";

// // This function gets called at build time
// export async function getStaticPaths() {
//   // Call an external API endpoint to get posts
//   const res = await axios.get(`${process.env.NEXT_PUBLIC_API_RECIPE}/getUser`);
//   const posts = await res.data;
//   console.log(posts);

//   // Get the paths we want to pre-render based on posts
//   const paths = posts?.data?.map((post) => ({
//     params: { users_id: post?.users_id.toString() },
//   }));

//   // We'll pre-render only these paths at build time.
//   // { fallback: false } means other routes should 404.
//   return { paths, fallback: false };
// }
