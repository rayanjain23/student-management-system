function login(user) {
 if (user.role === "student") {
  return "Welcome Student";
 }
 return "Access Denied";
}
module.exports = login;
