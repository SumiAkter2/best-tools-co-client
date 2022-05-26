import Spinner from '../Spinner';
// import React, { useEffect, useState } from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import AllUser from './AllUser';

const MyProfile = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch(`http://localhost:5000/user`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Spinner></Spinner>
    }

    return (
        <div>
            <h2 className="text-2xl">All Users: {users.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        {/* <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr> */}
                    </thead>
                    <tbody>
                        {
                            users.map(user => <AllUser
                                key={user._id}
                                user={user}
                                refetch={refetch}
                            ></AllUser>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProfile;