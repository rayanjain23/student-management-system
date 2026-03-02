function login(user) {
  if (!user) {
    return "User Missing";
  }

  if (user.type === "student") {
    return "Student Panel";
  }

  if (user.type === "guest") {
    return "Guest View";
  }

  return "Blocked";
}

module.exports = login;
