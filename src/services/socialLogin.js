import { GoogleSignin } from "@react-native-google-signin/google-signin";

export const googleLogin = (callBackApi = null, cb) => {
    cb && cb(true)
    GoogleSignin.configure({
      androidClientId: '224749907988-f9q3cv8h26mo4aq7ho9pl37v16fo6h38.apps.googleusercontent.com',             // release
      // androidClientId: '224749907988-9r04i0gq53ktr9c0qef2dh6b4st3jd6l.apps.googleusercontent.com',          //debug 
      // 122352203877-k8ji2qpccnmtddeboe9vlcf1gsjimkpg.apps.googleusercontent.com
      // iosClientId: 'ADD_YOUR_iOS_CLIENT_ID_HERE',
      offlineAccess: true,
      webClientId: '224749907988-39nk28ebu1dijftbtjvon9tqbrbtdf41.apps.googleusercontent.com',
    });
  
    GoogleSignin.hasPlayServices().then((hasPlayService) => {
      if (hasPlayService) {
        GoogleSignin.signOut()         //add this line for signout     
        GoogleSignin.signIn().then((userInfo) => {
          callBackApi(userInfo)
          cb && cb(false)
          console.log("user info : ", JSON.stringify(userInfo), JSON.stringify(userInfo.user.email))
        }).catch((e) => {
          cb && cb(false)
          console.log("ERROR IS: " + JSON.stringify(e));
        })
      }
    }).catch((e) => {
      cb && cb(false)
      console.log("ERROR IS: " + JSON.stringify(e));
    })
    
  }