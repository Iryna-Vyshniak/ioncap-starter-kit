import { Redirect, Route } from 'react-router';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonMenu,
  IonMenuToggle,
  IonPage,
  IonRouterOutlet,
  IonSplitPane,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { logOutOutline } from 'ionicons/icons';

import { menuPaths } from '../share/data/data';

import Settings from './Settings';
import List from './List/List';

const Menu: React.FC = () => {
  return (
    <IonPage>
      <IonSplitPane contentId="main">
        <IonMenu contentId="main">
          <IonHeader>
            <IonToolbar color={'secondary'}>
              <IonTitle>Menu</IonTitle>
            </IonToolbar>
          </IonHeader>

          <IonContent fullscreen>
            {menuPaths.map(({ id, name, url, icon }) => (
              <IonMenuToggle key={id} autoHide={false}>
                <IonItem detail={true} routerLink={url} routerDirection="none">
                  <IonIcon slot="start" icon={icon} />
                  {name}
                </IonItem>
              </IonMenuToggle>
            ))}

            <IonMenuToggle autoHide={false}>
              <IonButton expand="full" routerLink="/" routerDirection="root">
                <IonIcon slot="start" icon={logOutOutline} />
                Logout
              </IonButton>
            </IonMenuToggle>
          </IonContent>
        </IonMenu>

        <IonRouterOutlet id="main">
          <Route exact path={'/app/list'} component={List} />
          <Route path={'/app/settings'} component={Settings} />
          <Route exact path={'/app'}>
            <Redirect to={'/app/list'} />
          </Route>
        </IonRouterOutlet>
      </IonSplitPane>
    </IonPage>
  );
};

export default Menu;
