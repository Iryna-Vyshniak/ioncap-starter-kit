import {
  IonButtons,
  IonButton,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React, {useState} from 'react';
import { Camera, CameraResultType } from '@capacitor/camera';

const Tab1: React.FC = () => {
  const [image, setImage] = useState<any>(null)

  const takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Base64
    });
  
    // image.webPath will contain a path that can be set as an image src.
    // You can access the original file using image.path, which can be
    // passed to the Filesystem API to read the raw data of the image,
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    const img = `data:image/jpeg;base64,${image.base64String}`;
  
    // Can be set to the src of an image now
    setImage(img);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={'success'}>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Take a picture</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonButton expand='full' onClick={takePicture}>Take picture</IonButton>
        {image && <img src={image} alt='picture'/>}
      
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
