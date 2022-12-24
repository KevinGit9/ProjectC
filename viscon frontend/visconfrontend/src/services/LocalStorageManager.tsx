//All Functions related to the localStorage go here.

//Function used to store data inside the localStorage.
export const storeItem = (object: any, key: string) => {
  localStorage.setItem(key, JSON.stringify(object))  
  console.log(localStorage.getItem(key));
}

//To get the userId stored in the localStorage with the "currentUser" key.
//User got stored inside the localStorage at /login.
export const getUserID = () => {
    const user = localStorage.getItem("currentUser");
    if (user != null) {
      let parsedUser = JSON.parse(user);
      return parsedUser.id;
    }
    return null;
};

/*
setItem(): used to add data to localStorage
getItem(): used to get data from localStorage
removeItem(): used to remove data from localStorage
clear(): used to delete all the data from localStorage
key(): returns the name of the key from the Storage object.
*/