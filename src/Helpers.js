import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyC57LoFSVvj7Lv5qXPELKoe9NIYb82nOUM",
    authDomain: "quillalabs.firebaseapp.com",
    databaseURL: "https://quillalabs.firebaseio.com",
    projectId: "quillalabs",
    storageBucket: "quillalabs.appspot.com",
    messagingSenderId: "710237476707"
  };
firebase.initializeApp(config);

const ref = firebase.database().ref();

export function getArticles(){
    var usersRef = ref.child('articles/');
    var promise = usersRef.once('value').then(function(snapshot) {
        // The Promise was "fulfilled" (it succeeded).
        let files = snapshot.val();
        return files;
    });
    return promise;
}


