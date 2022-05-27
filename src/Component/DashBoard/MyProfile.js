import Spinner from '../Spinner';
import { useQuery } from 'react-query';
import ProfileUser from './ProfileUser';

const MyProfile = () => {
    const { data: users, isLoading, } = useQuery('users', () => fetch(`http://localhost:5000/user`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Spinner></Spinner>
    }
    console.log(users);

    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th> </th>
                        </tr>
                    </thead>
                    <tbody>


                        {
                            users?.map((user, index) => <ProfileUser key={user._id}
                                user={user} index={index}></ProfileUser>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};
export default MyProfile;