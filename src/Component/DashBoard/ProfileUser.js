import React from 'react';
import { useNavigate } from 'react-router-dom';


const ProfileUser = ({ user, index }) => {
    const navigate = useNavigate();
    const updateProfile = (id) => {
        navigate('/dashboard/updateprofile');
    }
    return (
        <div className='grid lg:grid-cols-5 gap-0  lg:h-16 mx-12 border-2 '>

            <p>{index + 1}</p>
            <p>{user.email}</p>
            <p>{user?.name}  {user?.displayName}</p>
            <p className='pr-12'>{user._id}</p>
            <p>
                <button className='btn btn-primary ' onClick={updateProfile}>Update</button>

            </p>
        </div>
    );
};

export default ProfileUser;