export const getUserID = () => {
    //To get the userId stored in the localStorage with the "currentUser" key.
    //User got stored inside the localStorage at /login.
    const user = localStorage.getItem("currentUser");
    if (user != null) {
      let parsedUser = JSON.parse(user);
      return parsedUser.Id;
    }
    return null;
};

