import {
  IonAvatar,
  IonCard,
  IonCardContent,
  IonChip,
  IonContent,
  IonItem,
  IonLabel,
  IonSkeletonText,
} from '@ionic/react';
import React from 'react';

const UsersSkeleton: React.FC = () => {
  return (
    <IonContent className="ion-padding">
      {[...Array(10)].map((_, idx) => (
        <IonCard key={idx}>
          <IonCardContent className="ion-no-padding">
            <IonItem lines="none">
              <IonAvatar slot="start">
                <IonSkeletonText />
              </IonAvatar>
              <IonLabel>
                <IonSkeletonText animated style={{ width: '150px' }} />
                <IonSkeletonText />
              </IonLabel>
              <IonChip slot="end" color={'secondary'}></IonChip>
            </IonItem>
          </IonCardContent>
        </IonCard>
      ))}
    </IonContent>
  );
};

export default UsersSkeleton;
