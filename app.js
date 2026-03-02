function login(user) {
  if (!user) {
    return "No User";
  }

  if (user.role === "student") {
    return "Student Logged In";
  }

  return "Login Failed";
}

module.exports = login;
