import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { JpAxios } from "../../configs/JpAxios"
import { setAddUserService, setEditUserService } from "../../services/UserService";

const AddOrEditUser = () => {
    const { userId } = useParams();
    const navigate = useNavigate();

    const [userDetails, setUserDetails] = useState({
        "name": "",
        "username": "",
        "email": "",
        "address": {
            "street": "",
            "suite": "",
            "city": "",
            "zipcode": ""
        }
    });

    useEffect(() => {
        if (userId) {
            JpAxios.get(`/users/${userId}`).then(res => {
                setUserDetails({
                    "name": res.data.name,
                    "username": res.data.username,
                    "email": res.data.email,
                    "address": {
                        "street": "",
                        "suite": "",
                        "city": "",
                        "zipcode": ""
                    }
                });
            });
        }
    }, []);


    const handleAddUser = (e) => {
        e.preventDefault();

        setAddUserService(userDetails);
    };

    const handleEditUser = (e) => {
        e.preventDefault();

        setEditUserService(userId, userDetails);
    }

    return (
        <section className="container form-section">
            <article className="row">
                <section className="col-12">
                    <article>
                        <h4>
                            {userId ? 'ویرایش' : 'افزودن'} کاربر
                        </h4>

                        <form onSubmit={userId ? handleEditUser : handleAddUser}>
                            <article className="name">
                                <label>
                                    نام و نام خانوادگی
                                </label>
                                <input type="text" id="name_input" value={userDetails.name} onChange={(e) => { setUserDetails({ ...userDetails, name: e.target.value }) }}></input>
                            </article>

                            <article className="user-name">
                                <label>
                                    نام کاربری
                                </label>
                                <input type="text" id="username_input" value={userDetails.username} onChange={(e) => { setUserDetails({ ...userDetails, username: e.target.value }) }}></input>
                            </article>

                            <article className="email">
                                <label>
                                    ایمیل
                                </label>
                                <input type="text" id="email_input" value={userDetails.email} onChange={(e) => { setUserDetails({ ...userDetails, email: e.target.value }) }}></input>
                            </article>

                            <article>
                                <button className="add-edit-btn">
                                    {userId ? 'ویرایش' : 'افزودن'}
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

export default AddOrEditUser;