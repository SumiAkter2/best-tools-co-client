import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import ShowMyItem from './ShowMyItem';
const MyOrder = () => {
    const [myItems, setMyItems] = useState([]);

    const [user] = useAuthState(auth);

    // const [items, setItems] = useItems();

    const handleDelete = (id) => {
        const proceed = window.confirm("Are you sure?");
        if (proceed) {
            const url = `http://localhost:5000/product/${id}`;
            fetch(url, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    const remaining = myItems.filter((item) => item._id !== id);
                    setMyItems(remaining);
                });
        }
    };

    const navigate = useNavigate();

    useEffect(() => {
        const email = user.email;

        const getItems = async () => {
            const url = `http://localhost:5000/myItems?email=${email}`;
            try {
                const { data } = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                    },
                });
                setMyItems(data);
            } catch (error) {
                console.log(error.message);
                if (error.response.status === 403 || error.response.status === 401) {
                    signOut(auth);
                    navigate("/login");
                }
            }
        };
        getItems();
    }, [user]);

    return (
        <div>
            <h1>My Orders</h1>
            {myItems.length}
            <div>
                <div className="container">
                    <div className="AllItems-section mt-5">
                        {myItems.map((item) => (
                            <ShowMyItem
                                key={item._id}
                                item={item}
                                handleDelete={handleDelete}
                            ></ShowMyItem>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyOrder;