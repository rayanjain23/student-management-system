const login = (user) => {
 switch(user.role){
  case "student":
   return "Welcome Student";
  default:
   return "Access Denied";
 }
};
module.exports = login;
