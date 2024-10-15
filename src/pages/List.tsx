import { IonBackButton, IonButton, IonCard, IonCardContent, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonPage, IonRow, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import React from 'react';

const List: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        LIST
      </IonHeader>
      <IonContent scrollY={false}>
        List items
      </IonContent>
    </IonPage>
  );
};

export default List;