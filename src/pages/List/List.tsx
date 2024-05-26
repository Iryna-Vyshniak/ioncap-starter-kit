import React, { useRef } from 'react';
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonMenuButton,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonSearchbar,
  IonTitle,
  IonToolbar,
  RefresherEventDetail,
} from '@ionic/react';
import { chevronDownCircleOutline, trashBinOutline } from 'ionicons/icons';

import './List.css';

import { useGetUsers } from '../../share/hooks/useGetUsers';
import { useClearList } from '../../share/hooks/useClearList';

import UsersList from '../../components/users/UsersList';
import UsersSkeleton from '../../components/users/UsersSkeleton';

const List: React.FC = () => {
  const page = useRef(null);
  const { users, setUsers, fetchUsers, loading } = useGetUsers();
  const { clearList } = useClearList();

  const handleRefresh = async (event: CustomEvent<RefresherEventDetail>) => {
    const data = await fetchUsers();
    setUsers(data);
    event.detail.complete();
  };

  return (
    <IonPage ref={page}>
      <IonHeader>
        <IonToolbar color={'success'}>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>List</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => clearList(setUsers)}>
              <IonIcon
                slot="icon-only"
                icon={trashBinOutline}
                color={'light'}
              />
            </IonButton>
          </IonButtons>
        </IonToolbar>
        <IonToolbar color={'success'}>
          <IonSearchbar />
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonRefresher slot="fixed" onIonRefresh={e => handleRefresh(e)}>
          <IonRefresherContent
            pullingIcon={chevronDownCircleOutline}
            pullingText="Pull to refresh"
            refreshingSpinner="circles"
            refreshingText="Refreshing..."
          />
        </IonRefresher>
        {loading && <UsersSkeleton />}
        {!loading && <UsersList users={users} />}
      </IonContent>
    </IonPage>
  );
};

export default List;
