import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { setGetPost } from "../services/PostService";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [mainPosts, setMainPosts] = useState([]);
    const [userId, setUserId] = useState();

    const getPosts = async () => {
        const res = await setGetPost();

        if (res) {
            setPosts(res.data);
            setMainPosts(res.data);
        } else {
            console.log(res)
        }
    }

    useEffect(() => {
        getPosts();
    }, []);

    useEffect(() => {
        handleFilter();
    }, [userId]);

    const handleDeletAlert = (postId) => {
        Swal.fire({
            title: 'حذف کاربر',
            text: `میخوای کاربر ${postId} رو حذف کنی ؟`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'حذف میکنم'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`).then(res => {
                    let newPosts = posts.filter(u => u.id !== postId);

                    setPosts(newPosts);

                    Swal.fire(
                        'حذف شد!',
                        'کاربر مورد نظرت حذف شد',
                        'success'
                    )
                })
            }
        })
    }

    const handleFilter = () => {
        if (userId > 0) setPosts(mainPosts.filter(u => u.userId == userId))
        else setPosts(mainPosts);
    }

    return (
        <section className="container posts-section">
            <article className="row">
                <section className="col-12">
                    <h4>
                        مدیریت پست ها
                    </h4>

                    <article className="users-search">
                        <input type="number" value={userId} onChange={(e) => { setUserId(e.target.value) }}></input>
                        <Link to={'/post/add'}>
                            <button>+</button>
                        </Link>
                    </article>

                    <article className="users-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>نویسنده</th>
                                    <th>عنوان</th>
                                    <th>متن</th>
                                    <th>عملیات</th>
                                </tr>
                            </thead>
                            {posts.length ? (
                                <tbody>
                                    {posts.map(post => (
                                        <tr key={post.id}>
                                            <td>{post.id}</td>
                                            <td onClick={() => setUserId(post.userId)}>{post.userId}</td>
                                            <td>{post.title}</td>
                                            <td>{post.body}</td>
                                            <td className="operation-icon">
                                                <Link to={`/post/edit/${post.id}`}>
                                                    <i className="fa fa-edit"></i>
                                                </Link>

                                                <i className="fa fa-trash" onClick={() => { handleDeletAlert(post.id) }}></i>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            ) : (
                                <tbody className="loader-parent">
                                    <div className="lds-facebook">
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                </tbody>
                            )}
                        </table>
                    </article>
                </section>
            </article>
        </section>
    );
}

export default Posts;