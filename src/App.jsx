import React, {useEffect} from 'react';
import Router from './components/Router';
import firebase from './firebase/config';
import { useDispatch } from 'react-redux';
import { setUsers } from './actions/action';
import { setUserDetails } from './actions/authAction';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch(setUserDetails(user));
      } else {
        dispatch(setUserDetails(null))
      }
    });
  });

  useEffect(() => {
    firebase.firestore().collection("users").orderBy("id").onSnapshot((document) => {
      let users = [];

      document.forEach((doc) => {
        users.push(doc.data());
      });

      dispatch(setUsers(users));
    });
  }, []);

  return (
    <div><Router /></div>
  );
};

export default App;