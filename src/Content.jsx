import { useContext } from "react";
import { MenuContext } from "./MenuContext";
import { Routes, Route } from "react-router-dom";
import Users from "./users/Users";
import Gallery from "./gallery/Gallery";
import Posts from "./posts/Posts";
import Todo from "./todo/Todo";
import AddOrEditUser from "./addOrEditUser/AddOrEditUser";

const Content = () => {
    const { showMenu, setShowMenu } = useContext(MenuContext);

    return (
        <main className={showMenu ? 'main-active' : ''}>
            <Routes>
                <Route path="/users" element={<Users />} />
                <Route path="/posts" element={<Posts />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/todo" element={<Todo />} />
                <Route path="/user/add" element={<AddOrEditUser />} />
                <Route path="/user/edit" element={<AddOrEditUser />} >
                    <Route path=":id" />
                </Route>
                <Route path="*" element={<Users />} />
            </Routes>
        </main>
    );
};

export default Content;