import React from 'react';

const AllBuyers = () => {
    return (
        <div className='my-7'>
            <h2 className="text-3xl text-center font-semibold mb-5">All Buyers</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {
                            users.map((user, i) => <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-xs btn-primary'>Make Admin</button>}</td>
                                <td><button className='btn btn-xs btn-danger'>Delete</button></td>
                            </tr>)
                        } */}

                        <tr>
                            <th>1</th>
                            <td>name</td>
                            <td>email</td>
                            <td><button className='btn btn-xs btn-danger'>Delete</button></td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyers;