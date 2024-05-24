import { useIonViewWillEnter } from '@ionic/react';
import { useState } from 'react';

export const useGetUsers = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [users, setUsers] = useState<any[]>([]);

  useIonViewWillEnter(() => {
    const loadUsers = async () => {
      const users = await getUsers();
      setUsers(users);
      setLoading(false);
    };
    loadUsers();
  });

  const getUsers = async () => {
    const data = await fetch('https://randomuser.me/api?results=10');
    if (!data.ok) {
      throw new Error('Network response was not ok.');
    }
    const users = await data.json();
    if (users.error) {
      console.error('Error from API: ', users.error);
      return;
    }
    return users.results;
  };

  return { loading, users, setUsers };
};
