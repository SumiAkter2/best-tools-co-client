import Spinner from '../Spinner';
// import React, { useEffect, useState } from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
// import AllUser from './AllUser';
import Users from './Users';

const MakeAdmin = () => {
    const { data: users, isLoading, } = useQuery('users', () => fetch(`https://radiant-shelf-15302.herokuapp.com/user`, {
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
            <Users></Users>

        </div >
    );
};

export default MakeAdmin;