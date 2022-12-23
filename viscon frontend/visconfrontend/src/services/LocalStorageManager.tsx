//All Functions related to the localStorage go here.

//To get the userId stored in the localStorage with the "currentUser" key.
//User got stored inside the localStorage at /login.
export const getUserID = () => {
    const user = localStorage.getItem("currentUser");
    if (user != null) {
      let parsedUser = JSON.parse(user);
      return parsedUser.Id;
    }
    return null;
};

