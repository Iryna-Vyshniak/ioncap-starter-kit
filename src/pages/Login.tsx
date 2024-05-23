import React, { useEffect, useState } from 'react';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
  useIonLoading,
  useIonRouter,
} from '@ionic/react';
import {
  logInOutline,
  personCircleOutline,
  readerOutline,
} from 'ionicons/icons';
import { Preferences } from '@capacitor/preferences';

import Logo from '../assets/colorful.png';
import Intro from '../components/intro/Intro';

import { INTRO_KEY } from '../share/constants/constants';

const Login: React.FC = () => {
  const router = useIonRouter();
  const [introSeen, setIntroSeen] = useState(true);
  const [present, dismiss] = useIonLoading();

  useEffect(() => {
    const checkStorage = async () => {
      const { value } = await Preferences.get({ key: INTRO_KEY });
      setIntroSeen(value === 'true');
    };
    checkStorage();
  }, []);

  const doLogin = async (e: any) => {
    e.preventDefault();
    await present('Loggin in...');

    setTimeout(async () => {
      dismiss();
      router.push('app', 'root');
    }, 2000);
  };

  const finishIntro = async () => {
    setIntroSeen(true);
    await Preferences.set({ key: INTRO_KEY, value: 'true' });
  };

  const watchIntroAgain = () => {
    setIntroSeen(false);
    Preferences.remove({ key: INTRO_KEY });
  };

  return (
    <>
      {!introSeen ? (
        <Intro onFinish={finishIntro} />
      ) : (
        <IonPage>
          <IonHeader>
            <IonToolbar color={'success'}>
              <IonTitle>FCC</IonTitle>
            </IonToolbar>
          </IonHeader>

          <IonContent scrollY={false} className="ion-padding">
            <IonGrid fixed>
              <IonRow class="ion-justify-content-center">
                <IonCol size="12" sizeMd="8" sizeLg="6" sizeXl="4">
                  {' '}
                  <div className="ion-text-center ion-padding">
                    <img src={Logo} alt="FCC logo" width="50%" />
                  </div>
                </IonCol>
              </IonRow>
            </IonGrid>

            <IonGrid>
              <IonRow class="ion-justify-content-center">
                <IonCol size="12" sizeMd="8" sizeLg="6" sizeXl="4">
                  <IonCard>
                    <IonCardContent>
                      <form onSubmit={doLogin}>
                        <IonInput
                          fill="outline"
                          labelPlacement="floating"
                          label="Email"
                          type="email"
                          placeholder="fcc@ionic.com"
                        ></IonInput>
                        <IonInput
                          className="ion-margin-top"
                          fill="outline"
                          labelPlacement="floating"
                          label="Password"
                          type="password"
                          placeholder="fcc@ionic.com"
                        ></IonInput>
                        <IonButton
                          type="submit"
                          expand="block"
                          className="ion-margin-top"
                          color={'success'}
                        >
                          Login
                          <IonIcon icon={logInOutline} slot="end" />
                        </IonButton>
                        <IonButton
                          routerLink="/register"
                          color="secondary"
                          type="button"
                          expand="block"
                          className="ion-margin-top"
                        >
                          Create account
                          <IonIcon icon={personCircleOutline} slot="end" />
                        </IonButton>
                        <IonButton
                          onClick={watchIntroAgain}
                          fill="clear"
                          size="small"
                          color="medium"
                          type="button"
                          expand="block"
                          className="ion-margin-top"
                        >
                          Watch intro
                          <IonIcon icon={readerOutline} slot="end"></IonIcon>
                        </IonButton>
                      </form>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonContent>
        </IonPage>
      )}
    </>
  );
};

export default Login;
