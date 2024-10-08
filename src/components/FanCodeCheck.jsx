import React, { useEffect, useState } from 'react';
import { getUsers } from '../api/UsersApi';
import { getTodosByUserId } from '../api/TodosApi';
import { isFanCodeCity, calculateTaskCompletionPercentage } from '../buissLogic/FancodeBuissLogic';

const FanCodeCheck = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allUsers = await getUsers();
        const fanCodeUsers = allUsers.filter(user => isFanCodeCity(user.address.geo.lat, user.address.geo.lng));

        for (let user of fanCodeUsers) {
          const todos = await getTodosByUserId(user.id);
          user.completionPercentage = calculateTaskCompletionPercentage(todos);
        }
        setUsers(fanCodeUsers);
      } catch (error) {
        console.error('Error fetching data', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>FanCode City Users Task Completion</h2>
      {users.map((user) => (
        <div key={user.id}>
          <p><strong>{user.name}</strong>: {user.completionPercentage > 50 ? 'More than 50% tasks completed' : 'Less than 50% tasks completed'}</p>
        </div>
      ))}
    </div>
  );
};

export default FanCodeCheck;
