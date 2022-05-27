// import axios from 'axios';
// import React, { useState } from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import swal from 'sweetalert';
// // import { toast } from 'react-toastify';
// import auth from '../firebase.init';

// const ProductAddForm = ({ product }) => {
//     const { user } = useAuthState(auth)
//     // const [input, setInput] = useState({});
//     const values = { name: user?.displayName };
//     const [fieldValue, setFieldVAlue] = useState(values);
//     const handleChange = (e) => {
//         const field = e.target.name;
//         const value = e.target.value;
//         const newValue = { ...fieldValue };
//         newValue[field] = value;
//         setFieldVAlue(newValue);
//     };
//     const onSubmit = (e) => {
//         const dataVAlue = {
//             ...fieldValue,
//             product_name: product.name,
//             price: product.price,
//             number: fieldValue.number,
//             email: user?.email,
//             status: "Pending",
//         };
//         axios
//             .post(
//                 "https://polar-reef-20310.herokuapp.com/orders/",
//                 dataVAlue
//             )
//             .then((res) => {
//                 if (res.data.insertedId) {
//                     swal({
//                         text: "Purchase Successful",
//                         icon: "success",
//                     });
//                     e.target.reset();
//                     setFieldVAlue({});
//                 }
//             });

//         e.preventDefault();
//     };
//     // const handlePost = (e) => {
//     //     e.preventDefault();
//     //     if (Object.keys(input).length > 0) {
//     //         axios
//     //             .post("https://polar-reef-20310.herokuapp.com/addProduct", input)
//     //             .then((res) => {
//     //                 if (res.data.insertedId) {
//     //                     toast.error(`Something happened wrong..`)
//     //                     setInput({});
//     //                 } else {
//     //                     toast.error(`Something happened wrong..`)
//     //                 }
//     //             });
//     //     } else {
//     //     }
//     // }
//     return (
//         <div>
//             <form onSubmit={onSubmit} >
//                 <input type="text" onChange={handleChange}
//                     defaultValue={user?.displayName} name="name " className="input input-bordered input-primary w-full max-w-xs" /><br />
//                 <input type="text" onChange={handleChange}
//                     value={user?.email || ""} name=" email" placeholder="Type Price" className="input input-bordered input-primary w-full max-w-xs" /><br />
//                 <input type="text" onChange={handleChange}
//                     value={product?.name || ""} name="product_name " placeholder="Type Name" className="input input-bordered input-primary w-full max-w-xs" /><br />
//                 <input type="text" name="number"
//                     onChange={handleChange} placeholder="Type Phone" className="input input-bordered input-primary w-full max-w-xs" /><br />
//                 <input type="text" name="address"
//                     onChange={handleChange} placeholder="Type Phone" className="input input-bordered input-primary w-full max-w-xs" /><br />
//                 <input type="number" name="price"
//                     value={product?.quantity || ""} placeholder="Type Phone" className="input input-bordered input-primary w-full max-w-xs" /><br />
//                 <button className='btn btn-primary' type="submit">Add Now</button>
//             </form>
//         </div>
//     );
// };

// export default ProductAddForm;