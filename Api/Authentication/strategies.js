import passport from 'passport';
import Instagram from 'passport-instagram';

export function instagram(){
  const InstagramStrategy = Instagram.Strategy; 
//we will grab all the basic user info and the recent media up to 20 photos
// passport instagram will inject the data from passport into the session.
  passport.use(new InstagramStrategy({
    clientID: "b9ff132273934310bebf3aecc6e77643",
      clientSecret: "4b83ec8a579c41258321ed817a489cf4",
      callbackURL: "http://localhost:3000/auth/instagram/callback",
      scope: "basic",
      state: true
  }, (accessToken, refreshToken, profile, done) => {
      let user = {};
      user.name = profile.displayName;
      user.homePage = profile._json.data.website;
      user.image = profile._json.data.profile_picture;
      user.bio = profile._json.data.bio;
      user.media = `https://api.instagram.com/v1/users/${profile.id}/media/recent/?access_token=${accessToken}&count=20`
      done(null, user)  
  }))
}
