class SessionSaver {
  static USER_IS_LOGIN = 'userLoggedOut';

  loginUser() {
    localStorage.setItem(SessionSaver.USER_IS_LOGIN, 'userLoggedIn');
  }

  logoutUser() {
    localStorage.setItem(SessionSaver.USER_IS_LOGIN, 'userLoggedOut');
  }

  getUserStatus() {
    return localStorage.getItem(SessionSaver.USER_IS_LOGIN);
  }
}

export const sessionSaver = new SessionSaver();