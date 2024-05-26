import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonContent,
  IonHeader,
  IonImg,
  IonItem,
  IonLabel,
  IonModal,
  IonPage,
  IonSegment,
  IonSegmentButton,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React, { Dispatch, SetStateAction, useRef, useState } from 'react';
import { User } from '../../share/types';

type UserModalProps = {
  selectedUser: User | null;
  setSelectedUser: Dispatch<SetStateAction<User | null>>;
  presentingElement: HTMLElement | null;
};

const UserModal: React.FC<UserModalProps> = ({
  selectedUser,
  setSelectedUser,
  presentingElement,
}) => {
  const [activeSegment, setActiveSegment] = useState<any>('details');
  const modal = useRef<HTMLIonModalElement>(null);
  const cardModal = useRef<HTMLIonModalElement>(null);

  return (
    <>
      {' '}
      <IonModal
        breakpoints={[0, 0.5, 0.8]}
        initialBreakpoint={0.5}
        ref={modal}
        isOpen={selectedUser !== null}
        onIonModalDidDismiss={() => setSelectedUser(null)}
      >
        <IonHeader>
          <IonToolbar color={'secondary'}>
            <IonButtons slot="start">
              <IonButton onClick={() => modal.current?.dismiss()}>
                Close
              </IonButton>
            </IonButtons>
            <IonTitle>
              {' '}
              {selectedUser?.name.title} {selectedUser?.name.last}
            </IonTitle>
          </IonToolbar>
          <IonToolbar color={'secondary'}>
            <IonSegment
              value={activeSegment}
              onIonChange={e => setActiveSegment(e.detail.value!)}
            >
              <IonSegmentButton value="details">Details</IonSegmentButton>
              <IonSegmentButton value="calendar">Calendar</IonSegmentButton>
            </IonSegment>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          {activeSegment === 'details' && (
            <IonCard>
              <IonImg src={selectedUser?.picture.large} />
              <IonCardContent className="ion-no-padding">
                <IonItem lines="none">
                  <IonLabel>
                    {selectedUser?.name.title} {selectedUser?.name.first}{' '}
                    {selectedUser?.name.last}
                    <div className="ion-text-wrap">
                      <p>
                        {' '}
                        {selectedUser?.location.city},{' '}
                        {selectedUser?.location.street.name},{' '}
                        {selectedUser?.location.street.number},{' '}
                        {selectedUser?.location.country},{' '}
                        {selectedUser?.location.state}
                      </p>
                    </div>
                    <p>{selectedUser?.dob.age} years</p>
                    <p>{selectedUser?.phone}</p>
                  </IonLabel>
                </IonItem>
              </IonCardContent>
            </IonCard>
          )}
        </IonContent>
      </IonModal>
      <IonModal
        ref={cardModal}
        trigger="card-modal"
        presentingElement={presentingElement!}
        onIonModalDidDismiss={() => setSelectedUser(null)}
      >
        <IonHeader>
          <IonToolbar color={'success'}>
            <IonButtons slot="start">
              <IonButton onClick={() => cardModal.current?.dismiss()}>
                Close
              </IonButton>
            </IonButtons>
            <IonTitle>
              {' '}
              {selectedUser?.name.title} {selectedUser?.name.last}
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonImg src={selectedUser?.picture.large} />
        </IonContent>
      </IonModal>
    </>
  );
};

export default UserModal;
