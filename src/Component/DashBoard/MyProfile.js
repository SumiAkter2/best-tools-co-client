import Spinner from '../Spinner';
import { useQuery } from 'react-query';
import ProfileUser from './ProfileUser';

const MyProfile = () => {
    const { data: users, isLoading, } = useQuery('users', () => fetch(`https://radiant-shelf-15302.herokuapp.com/user`, {
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
            <div className='grid lg:grid-cols-5 gap-0  lg:h-16 mx-12 border-2 text-pink-500 font-bold text-lg'>


                <p>   </p>


                <p>Email</p>
                <p>Name</p>
                <p>Id </p>

            </div>



            {
                users?.map((user, index) => <ProfileUser key={user._id}
                    user={user} index={index}></ProfileUser>)
            }



        </div>
    );
};
export default MyProfile;