class SessionSaver {
  static IS_LOGIN = 'userLoggedOut';

  loginUser() {
    localStorage.setItem(SessionSaver.IS_LOGIN, 'userLoggedIn');
  }

  logoutUser() {
    localStorage.setItem(SessionSaver.IS_LOGIN, 'userLoggedOut');
  }

  getUserStatus() {
    return localStorage.getItem(SessionSaver.IS_LOGIN);
  }
}

export const sessionSaver = new SessionSaver();