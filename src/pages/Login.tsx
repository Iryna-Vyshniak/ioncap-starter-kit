import React from 'react';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonRouter,
} from '@ionic/react';
import { logInOutline, personCircleOutline } from 'ionicons/icons';

import Logo from '../assets/colorful.png';

const Login: React.FC = () => {
const router = useIonRouter();

  const doLogin = (e: any) => {
    e.preventDefault();
    console.log('login');
    router.push('home', 'root');
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={'success'}>
          <IonTitle>FCC</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent scrollY={false}>

        <div className='ion-text-center ion-padding'>
          <img src={Logo} alt='FCC logo' width='50%' />
        </div>

        <IonCard>
          <IonCardContent>
            <form onSubmit={doLogin}>
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
                Login
                <IonIcon icon={logInOutline} slot='end'></IonIcon>
              </IonButton>
              <IonButton
                routerLink='/register'
                color='secondary'
                type='button'
                expand='block'
                className='ion-margin-top'
              >
                Create account
                <IonIcon icon={personCircleOutline} slot='end'></IonIcon>
              </IonButton>
            </form>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Login;
