function login(user) {
  if (!user) {
    return "No User";
  }

  if (!user.isActive) {
    return "Account Inactive";
  }

  if (user.role === "student") {
    return "Student Dashboard";
  }

  if (user.role === "admin") {
    return "Admin Dashboard";
  }

  return "Unauthorized";
}

module.exports = login;
