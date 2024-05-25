import { useIonAlert, useIonToast } from '@ionic/react';

export const useClearList = () => {
  const [showAlert] = useIonAlert();
  const [showToast] = useIonToast();

  const clearList = (setUsers: (users: any[]) => void) => {
    showAlert({
      header: 'Confirm!',
      message: 'Are you sure you want to delete all users?',
      buttons: [
        { text: 'Cancel', role: 'cancel' },
        {
          text: 'Delete',
          handler: () => {
            setUsers([]);
            showToast({
              message: 'All users deleted',
              duration: 2000,
              color: 'danger',
            });
          },
        },
      ],
    });
  };
  return { clearList };
};
