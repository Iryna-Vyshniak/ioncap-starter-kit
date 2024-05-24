import {
  IonAvatar,
  IonCard,
  IonCardContent,
  IonChip,
  IonContent,
  IonImg,
  IonItem,
  IonLabel,
} from '@ionic/react';
import React from 'react';

import { UserListProps } from '../../share/types';

const UsersList: React.FC<UserListProps> = ({ users }) => {
  return (
    <IonContent className="ion-padding">
      {users.map(
        ({ picture, name: { title, first, last }, email, nat }, idx) => (
          <IonCard key={idx}>
            <IonCardContent className="ion-no-padding">
              <IonItem lines="none">
                <IonAvatar slot="start">
                  <IonImg src={picture.thumbnail} />
                </IonAvatar>
                <IonLabel>
                  {title} {first} {last}
                  <p>{email}</p>
                </IonLabel>
                <IonChip slot="end" color={'secondary'}>
                  {nat}
                </IonChip>
              </IonItem>
            </IonCardContent>
          </IonCard>
        )
      )}
    </IonContent>
  );
};

export default UsersList;
