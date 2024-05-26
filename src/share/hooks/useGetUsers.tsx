import { useIonViewWillEnter } from '@ionic/react';
import { useState } from 'react';

export const useGetUsers = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [users, setUsers] = useState<any[]>([]);

  useIonViewWillEnter(() => {
    const loadUsers = async () => {
      const users = await fetchUsers();
      setUsers(users);
      setLoading(false);
    };
    loadUsers();
  });

  const fetchUsers = async () => {
    const response = await fetch('https://randomuser.me/api?results=10');
    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }
    const data = await response.json();
    if (data.error) {
      console.error('Error from API: ', data.error);
      return;
    }
    return data.results;
  };

  return { loading, users, setUsers, fetchUsers };
};
