import {
  IonAvatar,
  IonCard,
  IonCardContent,
  IonChip,
  IonContent,
  IonIcon,
  IonImg,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
} from '@ionic/react';
import React, { useState } from 'react';

import { User, UserListProps } from '../../share/types';
import UserModal from './UserModal';
import { archive, heartOutline, trash } from 'ionicons/icons';

const UsersList: React.FC<UserListProps> = ({ users, presentingElement }) => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  return (
    <IonContent className="ion-padding">
      {users.map((user, idx) => (
        <IonCard
          key={idx}
          onClick={() => {
            setSelectedUser(user);
          }}
        >
          <IonCardContent className="ion-no-padding">
            <IonItemSliding>
              <IonItemOptions side="start">
                <IonItemOption color={'success'}>
                  <IonIcon slot="icon-only" icon={archive} />
                </IonItemOption>
              </IonItemOptions>
              <IonItem lines="none">
                <IonAvatar slot="start">
                  <IonImg src={user.picture.thumbnail} />
                </IonAvatar>
                <IonLabel>
                  {user.name.title} {user.name.first} {user.name.last}
                  <p>{user.email}</p>
                </IonLabel>
                <IonChip slot="end" color={'secondary'}>
                  {user.nat}
                </IonChip>
              </IonItem>
              <IonItemOptions side="end">
                <IonItemOption color={'secondary'}>
                  <IonIcon slot="icon-only" icon={heartOutline} />
                </IonItemOption>
                <IonItemOption color={'danger'}>
                  <IonIcon slot="icon-only" icon={trash} />
                </IonItemOption>
              </IonItemOptions>
            </IonItemSliding>
          </IonCardContent>
        </IonCard>
      ))}
      <UserModal
        selectedUser={selectedUser}
        setSelectedUser={setSelectedUser}
        presentingElement={presentingElement}
      />
    </IonContent>
  );
};

export default UsersList;
