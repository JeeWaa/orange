// import React from 'react';
// import {connect} from "react-redux";
//
// function mapStateProps(state) {
//     return {
//         AllPosts: state.allPost
//     }
// }
//
// function PostList(props) {
//
//     function createListItem () {
//         return props.AllPosts.map((post) => {
//             return (
//                 <li key={post.id}>
//                     {post.title}
//                     {post.completed}
//                 </li>
//             )
//         })
//     }
//
//     return (
//         <ul>
//             {
//                 props.AllPosts ?
//                     createListItem() :
//                     <h4>Click the button</h4>
//             }
//         </ul>
//     );
// }
//
// export default connect(mapStateProps)(PostList);