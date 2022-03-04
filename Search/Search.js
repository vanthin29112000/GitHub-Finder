const onRenderListUser = () => {
   document.getElementsByClassName(
      "dropdown-listuser__container"
   )[0].innerHTML = `<div class="dropdown-listuser"></div>`;
};

const onChangeKeySearch = () => {
   var keySearch =
      document.getElementsByClassName("search-user__input")[0].value;

   if (keySearch === "") {
      document.getElementsByClassName(
         "dropdown-listuser__container"
      )[0].innerHTML = "";
   } else {
      onRenderListUser();
      const apiGetListUsers = getApiSearchListUsers(keySearch);
      getUserFormGitHub(apiGetListUsers)
         .then((listUser) => {
            var list = JSON.parse(listUser);
            if (list.items.length === 0) {
               document.getElementsByClassName(
                  "dropdown-listuser"
               )[0].innerHTML += `<div class="user-item">
                 <p class="user-item__name">User not found</p>
             </div>`;
            } else {
               for (var user of list.items) {
                  document.getElementsByClassName(
                     "dropdown-listuser"
                  )[0].innerHTML += `<div class="user-item" onclick = {onClickUser("${user.login}")}>
                 <img src="${user.avatar_url}" class="user-item__img">
                 <p class="user-item__name">${user.login}</p>
             </div>`;
               }
            }
         })
         .catch((errorText) => {
            console.log(errorText);
         });
   }
};

const onClickUser = (keyUser) => {
   const apiGetInfoUser = getApiInfoUser(keyUser);
   console.log(apiGetInfoUser);
   getUserFormGitHub(apiGetInfoUser)
      .then((userInfo) => {
         var user = JSON.parse(userInfo);
         onOpenTabUserProflie(user);
      })
      .catch((errorText) => {
         console.log(errorText);
      });
};
