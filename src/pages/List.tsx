import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, useIonViewWillEnter } from '@ionic/react';
import React, {useState} from 'react';

const List: React.FC = () => {
  const [users, setUsers] = useState<any []>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useIonViewWillEnter(() => {
    const fetchUsers = async () => {
      const users = await getUsers();
      console.log(users);
      setUsers(users);
    };
    fetchUsers();
  });
  const getUsers = async () => {
    const data = await fetch ('https://randomuser.me/api?results=10');
    const users = await data.json();
    return users;
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={'primary'}>
          <IonButtons slot='start'>
            <IonMenuButton />
          </IonButtons>
          <IonTitle>List</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        List items
      </IonContent>
    </IonPage>
  );
};

export default List;