import React, { useEffect, useState } from 'react'
import User from './User'
import Pagination from './Pagination'

function UserList() {
  
    const [users, setUsers] = useState()
    const [activePage, setActivePage] = useState(1)
    const [hasMoreUsers, setHasMoreUsers] = useState(true)
    const [totalPages, setTotalPages] = useState(0)

    useEffect(() => {
        const getUsers = () => {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(res => res.json())
                .then(data => {
                    const usersPerPage = 3
                    setTotalPages(Math.ceil(data.length / usersPerPage));
                    const start = (activePage-1) *usersPerPage
                    const pagindatedUsers = data.slice(start, start + usersPerPage)
                    setUsers(pagindatedUsers);
                    setHasMoreUsers(data.length > start + usersPerPage);
                })
                .catch(err => console.error(err))
        }

        getUsers()


    }, [activePage])
    
    return (
        <>  

        <div className='userListContainer'>
            {
                !users ? (
                    <div>Loading...</div>
                ) : users.length > 0 ? (
                    users.map((el, i) => {
                        return <User key={i} data={el} />
                    })
                ) : (
                    <div>there are no users in the list</div>
                )
            }
            {users?.length > 0 && 
            <Pagination
                activePage={activePage}
                setActivePage={setActivePage}
                hasMoreUsers={hasMoreUsers}
                totalPages={totalPages}
            />}
            </div>
        </>
        
    )
}

export default UserList