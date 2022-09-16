import { useEffect, useReducer } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { JpAxios } from "../../configs/JpAxios"
import { addPostService, editPostService } from "../../services/PostService";
import { init, reduser } from "./AddOrEditPostReduser";

const AddOrEditPost = () => {
    const { postId } = useParams();
    const navigate = useNavigate();
    const [data, dispatch] = useReducer(reduser, init);

    useEffect(() => {
        JpAxios.get('/users').then(res => {
            dispatch({
                type: 'changeUsers',
                payload: res.data
            })
        })

        if (postId) {
            JpAxios.get(`/posts/${postId}`).then(res => {
                dispatch({
                    type: 'isUpdate',
                    payload: res.data
                })
            });
        }
    }, []);


    const handleAddUser = (e) => {
        e.preventDefault();

        addPostService(data.postData);
    };

    const handleEditUser = (e) => {
        e.preventDefault();

        editPostService(postId, data.postData);
    }

    const setInputValues = (e, propName) => {
        dispatch({
            type: 'setInputValues',
            propName: propName,
            propValue: e.target.value
        });
    }

    return (
        <section className="container form-section">
            <article className="row">
                <section className="col-12">
                    <article>
                        <h4>
                            {postId ? 'ویرایش' : 'افزودن'} پست
                        </h4>

                        <form onSubmit={postId ? handleEditUser : handleAddUser}>
                            <article className="name">
                                <label>
                                    کاربر
                                </label>
                                <select type="text" id="name_input">
                                    {data.users.map(u => (<option key={u.id} value={u.id}>{u.name}</option>))}
                                </select>
                            </article>

                            <article className="user-name">
                                <label>
                                    عنوان
                                </label>
                                <input type="text" id="username_input" value={data.postData.title} onChange={(e) => { setInputValues(e, 'title') }}>
                                </input>
                            </article>

                            <article className="email">
                                <label>
                                    شرح
                                </label>
                                <input type="text" id="email_input" value={data.postData.body} onChange={(e) => { setInputValues(e, 'body') }}></input>
                            </article>

                            <article>
                                <button className="add-edit-btn">
                                    {postId ? 'ویرایش' : 'افزودن'}
                                </button>

                                <button type="button" className="back-btn" onClick={() => { navigate(-1) }}>
                                    بازگشت
                                </button>
                            </article>
                        </form>
                    </article>
                </section>
            </article>
        </section>
    );
}

export default AddOrEditPost;