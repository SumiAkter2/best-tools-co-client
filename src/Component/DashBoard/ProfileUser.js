import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProfileUser = ({ user, index }) => {
    const navigate = useNavigate();
    const updateProfile = (id) => {
        navigate('/dashboard/updateprofile');
    }
    return (
        <div>
            <tr>
                <th>{index + 1}</th>
                <td>{user.email}</td>
                <td>{user?.displayName}</td>
                <td>{user._id}</td>
                <td className='text-right'><button className='btn btn-primary ' onClick={updateProfile}>Update</button></td>
            </tr>
        </div>
    );
};

export default ProfileUser;