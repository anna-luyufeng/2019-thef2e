import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const firebaseConfig = {
  apiKey: 'AIzaSyAIyzhKjkLZeYaTW2TOJdDhnlRAXAghaZg',
  authDomain: 'the-f2e-chat-room.firebaseapp.com',
  databaseURL: 'https://the-f2e-chat-room.firebaseio.com',
  projectId: 'the-f2e-chat-room',
  storageBucket: 'the-f2e-chat-room.appspot.com',
  messagingSenderId: '609002500238',
  appId: '1:609002500238:web:c9542f54b618a18d',
}

firebase.initializeApp(firebaseConfig)

const database = firebase.database()

export default database
