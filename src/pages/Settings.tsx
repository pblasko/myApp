import { IonBackButton, IonButton, IonCard, IonCardContent, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonPage, IonRow, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import React from 'react';

const Settings: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        SETTING
      </IonHeader>
      <IonContent scrollY={false}>
        Setting item
      </IonContent>
    </IonPage>
  );
};

export default Settings;