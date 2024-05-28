import React from 'react';
import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { appsOutline, cameraOutline } from 'ionicons/icons';
import { Redirect, Route } from 'react-router';

import Tab1 from './Tab1';
import Tab2 from './Tab2';

const Settings: React.FC = () => {
  return (
    <IonTabs>
      <IonTabBar slot="bottom" color={'success'}>
        <IonTabButton tab="tab1" href="/app/settings/tab1">
          <IonIcon icon={cameraOutline} />
        </IonTabButton>
        <IonTabButton tab="tab2" href="/app/settings/tab2">
          <IonIcon icon={appsOutline} />
        </IonTabButton>
      </IonTabBar>

      <IonRouterOutlet>
        <Route path={'/app/settings/tab1'} component={Tab1} />
        <Route path={'/app/settings/tab2'} component={Tab2} />

        <Route exact path={'/app/settings'}>
          <Redirect to="/app/settings/tab1" />
        </Route>
      </IonRouterOutlet>
    </IonTabs>
  );
};

export default Settings;
