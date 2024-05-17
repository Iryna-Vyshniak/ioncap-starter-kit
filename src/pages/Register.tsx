import React from 'react';
import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonContent, IonHeader, IonIcon, IonInput, IonPage, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import { checkmarkDone, logInOutline, personCircleOutline } from 'ionicons/icons';

import Logo from '../assets/colorful.png';

const Register: React.FC = () => {
const router = useIonRouter();

    const doRegister = (e: any) => {
        e.preventDefault();
        console.log('register');
        router.goBack();
      };
      return (
        <IonPage>
          <IonHeader>
            <IonToolbar color={'success'}>
                <IonButtons slot='start'>
                    <IonBackButton defaultHref='/'/>
                </IonButtons>
              <IonTitle>Create Account</IonTitle>
            </IonToolbar>
          </IonHeader>
          
          <IonContent scrollY={false}>
    
    
            <IonCard>
              <IonCardContent>
                <form onSubmit={doRegister}>
                  <IonInput
                    fill='outline'
                    labelPlacement='floating'
                    label='Email'
                    type='email'
                    placeholder='fcc@ionic.com'
                  ></IonInput>
                  <IonInput
                    className='ion-margin-top'
                    fill='outline'
                    labelPlacement='floating'
                    label='Password'
                    type='password'
                    placeholder='fcc@ionic.com'
                  ></IonInput>
                  <IonButton type='submit' expand='block' className='ion-margin-top'>
                    Create my account
                    <IonIcon icon={checkmarkDone} slot='end'></IonIcon>
                  </IonButton>
                </form>
              </IonCardContent>
            </IonCard>
          </IonContent>
        </IonPage>
      );
};

export default Register;