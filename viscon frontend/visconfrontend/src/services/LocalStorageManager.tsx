//All Functions related to the localStorage go here.

//Function used to store data inside the localStorage.
export const storeItem = (object: any, key: string) => {
  localStorage.setItem(key, JSON.stringify(object))  
  console.log(localStorage.getItem(key));
}

//Function used to remove the data stored inside the localStorage using it's key.
export const removeItem = (key: string) => {
  localStorage.removeItem(key);
}

//Function to get the userId stored in the localStorage with the "currentUser" key.
//User got stored inside the localStorage at /login.
export const getUserId = () => {
    const user = localStorage.getItem("currentUser");
    if (user == null) return null;
    let parsedUser = JSON.parse(user);
    return parsedUser.id;
};

//Function to get the companyId of the Company the currently logged in User is a part of.
export const getUserCompany = () => {
  const user = localStorage.getItem("currentUser");
  if (user == null) return null;
  let parsedUser = JSON.parse(user);
  return parsedUser.companyId;
}

//Function to get the role of the User that is currently logged.
export const getUserRole = () => {
  const user = localStorage.getItem("currentUser");
  if (user == null) return null;
  let parsedUser = JSON.parse(user);
  return parsedUser.role;
}

export const getFullName = () => {
  const user = localStorage.getItem("currentUser");
  if (user == null) return null;
  let parsedUser = JSON.parse(user);
  return (`${parsedUser.firstName} ${parsedUser.lastName}`);
}