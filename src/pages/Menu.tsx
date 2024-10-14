import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

const Menu: React.FC = () => {
  return (
    <IonPage>
        <IonHeader>
        <IonToolbar color={'primary'}>
            <IonTitle>Székesfehérvár</IonTitle>
        </IonToolbar>
        </IonHeader>
        <IonContent scrollY={false}>
        
        </IonContent>
    </IonPage>
  );
};

export default Menu;