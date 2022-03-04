function getUserFormGitHub(url) {
   return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      xhr.open("GET", url, false);
      xhr.onload = () => {
         resolve(xhr.responseText);
      };
      xhr.onerror = () => {
         reject(xhr.statusText);
      };
      xhr.send();
   });
}

const apiGitHub = "https://api.github.com/";

//get information user

const getApiInfoUser = (keySearch) => {
   return apiGitHub + `users/${keySearch}`;
};

// search User

const getApiSearchListUsers = (keySearch) => {
   return apiGitHub + `search/users?q="${keySearch}"&per_page=5`;
};
