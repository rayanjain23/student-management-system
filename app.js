const login = (user) => {
  console.log("Login attempt");

  if (!user) return "No User";

  switch(user.role){
    case "student":
      return "Student Logged In";
    default:
      return "Login Failed";
  }
};

module.exports = login;
