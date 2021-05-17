import firebase from 'firebase';
import React, { createContext, useState, useEffect } from 'react';

import { authDb, chatDatabase } from './firebase/config';
export const ChatContext = createContext(); // izvoz za komponente

const ChatProvider = ({ children }) => {
  // login

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // register
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const [nameUser, setNameUser] = useState(handleCurrentUserDisplay());

  const [allUsers, setAllUsers] = useState([]);

 // const [currentId, setCurrentId] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    await authDb
      .createUserWithEmailAndPassword(email, password)
      .then((authObj) => {
        const currentUser = firebase.auth().currentUser;
        const name = `${firstName} ${lastName}`;

        currentUser
          .updateProfile({
            displayName: name,
          })
          .then(() => {
            chatDatabase.collection('users')
            .doc(authObj.user.uid)
            .set ({
              firstName: firstName,
              lastName: lastName,
              uid: authObj.user.uid,
              createdAt: new Date(),
              isOnline: true,
            });
          })
          .then(() => {
            const loggedInUser = {
              firstName: firstName,
              lastName: lastName,
              uid: authObj.user.uid,
              email: email,
            };

            localStorage.setItem('user', JSON.stringify(loggedInUser));

         

            console.log('User logged in successfully...!');
          });

        //window.location.reload()
      })
      .catch((err) => {
        console.log(err);
      });

    setLastName('');
    setFirstName('');
    setEmail('');
    setPassword('');
  };

  useEffect(() => {
    handleCurrentUserDisplay();
  }, []);

  function handleCurrentUserDisplay() {
    return JSON.parse(localStorage.getItem('user')) || false;
  }

  useEffect(() => {
    chatDatabase.collection('users').onSnapshot((snapshot) => {
      let documents = [];

      snapshot.forEach((doc) => {
        if (doc.data().uid !== nameUser.uid) {
          documents.push(doc.data());
        }
      });

      setAllUsers(documents);
    });
  }, []);

 


  const handleLogOut = async () => {
    await authDb
      .signOut()
      .then(console.log('sign out'))
      .then(() => {
        localStorage.clear();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <ChatContext.Provider
      value={{
        email,
        password,
        setEmail,
        setPassword,
        setNameUser,
        handleRegister,
        firstName,
        lastName,
        setFirstName,
        setLastName,
        nameUser,
        handleLogOut,
        allUsers
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export { ChatProvider }; // izvoz za index.js
