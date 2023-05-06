import {atom} from 'recoil'

export const loginStat = atom({
    key: "isLogin",
    default: false,
  });

  export const authAtom = atom({
    key: 'auth',
    default: {
      isLoggedIn: false
    }
  })