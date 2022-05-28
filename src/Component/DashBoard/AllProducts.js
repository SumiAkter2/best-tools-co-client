import axios from 'axios';
import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';

const AllProducts = ({ index, product }) => {
    const [userData, setUserData] = useState([]);
    const [isLoading,] = useState(true);

    const handleDelete = (id) => {
        swal({
            title: "Are you sure?",

            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                axios
                    .delete(
                        `https://radiant-shelf-15302.herokuapp.com/product/${id}`
                    )
                    .then((res) => {
                        if (res.data.deletedCount) {
                            swal("Product has been deleted!", {
                                icon: "success",
                            });
                            const restOrder = userData.filter(
                                (userdata) => userdata._id !== id
                            );
                            setUserData(restOrder);
                        }
                    });
            } else {
                swal("Your Product is safe!");
            }
        });
    };
    return (
        <div>



            <tr>
                <th>{index + 1}</th>
                <td>{product.name}</td>
                <td>{product.quantity}</td>
                <td>{product.price}</td>
                <td>
                    <button className='btn-primary rounded-sm p-1' onClick={() => handleDelete(product._id)}> Delete</button>
                </td>

            </tr>

        </div>
    );
};

export default AllProducts;