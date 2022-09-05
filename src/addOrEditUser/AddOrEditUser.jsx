import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const AddOrEditUser = () => {
    const { userId } = useParams();
    const navigate = useNavigate();

    const [userDetails, setUserDetails] = useState(
        {
            "name": "",
            "username": "",
            "email": "",
            "address": {
                "street": "",
                "suite": "",
                "city": "",
                "zipcode": ""
            }
        }
    );

    const handleAddUser = (e) => {
        e.preventDefault();

        axios.post('https://jsonplaceholder.typicode.com/users', userDetails).then((res) => {
            Swal.fire(
                userDetails.name,
                'تبریک میگم به لیست کاربران اضافه شدی',
                'success'
            )
        })
    };

    return (
        <section className="container form-section">
            <article className="row">
                <section className="col-12">
                    <article>
                        <h4>
                            {userId ? 'ویرایش' : 'افزودن'} کاربر
                        </h4>

                        <form onSubmit={handleAddUser}>
                            <article className="name">
                                <label>
                                    نام و نام خانوادگی
                                </label>
                                <input type="text" id="name_input" onChange={(e) => { setUserDetails({ ...userDetails, name: e.target.value }) }}></input>
                            </article>

                            <article className="user-name">
                                <label>
                                    نام کاربری
                                </label>
                                <input type="text" id="username_input" onChange={(e) => { setUserDetails({ ...userDetails, username: e.target.value }) }}></input>
                            </article>

                            <article className="email">
                                <label>
                                    ایمیل
                                </label>
                                <input type="text" id="email_input" onChange={(e) => { setUserDetails({ ...userDetails, email: e.target.value }) }}></input>
                            </article>

                            <article>
                                <button className="add-edit-btn">
                                    {userId ? 'ویرایش' : 'افزودن'}
                                </button>

                                <button className="back-btn" onClick={() => { navigate('/') }}>
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