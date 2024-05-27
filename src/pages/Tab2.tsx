import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  createAnimation,
  useIonViewDidEnter,
} from '@ionic/react';
import type { Animation } from '@ionic/react';
import React, { useRef } from 'react';

const Tab2: React.FC = () => {
  const animationButtonRef = useRef<HTMLIonButtonElement | null>(null);
  const animation = useRef<Animation | null>(null);

  useIonViewDidEnter(() => {
    animation.current! = createAnimation()
      .addElement(animationButtonRef.current!)
      .duration(1500)
      .iterations(Infinity)
      .direction('alternate')
      .keyframes([
        {
          offset: 0,
          '--background': '#8496a2',
        },
        {
          offset: 0.5,
          '--background': '#868f74',
        },
        {
          offset: 1,
          '--background': '#8496a2',
        },
      ]);

    animation.current?.play();
  });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="success">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" scrollY={false}>
        <div className="button-container">
          <IonButton ref={animationButtonRef} className="ion-margin">
            Join to my followers
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
