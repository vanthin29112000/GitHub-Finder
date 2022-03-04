const onCloseTabUserProfile = () => {
   document.getElementsByClassName("user-profile-container")[0].style.display =
      "none";
};

const onOpenTabUserProflie = (user) => {
   document.getElementsByClassName("user-profile-container")[0].style.display =
      "flex";
   document.getElementsByClassName(
      "user-profile-container"
   )[0].innerHTML = `<div class="user-profile">
      <i class="fa-solid fa-circle-xmark icon-close" onclick="onCloseTabUserProfile()"></i>
      <div class="info-user">
          <div class="img-name-bio">
              <img src="${user.avatar_url}" class="user__img">
              <p class="user__name">${user.login}</p>
              <p class="user__bio">${user.bio === null ? "" : user.bio}</p>
          </div>

          <div class="basic-info">
              <div class="basic-info__item">
                  <p class="info-title">Email</p>
                  <p class="content">${
                     user.email === null ? "Not available" : user.email
                  }</p>
              </div>
              <div class="basic-info__item">
                  <p class="info-title">Company</p>
                  <p class="content">${
                     user.company === null ? "Not available" : user.company
                  }</p>
              </div>

              <div class="basic-info__item">
                  <p class="info-title">Follower</p>
                  <div class="list-follower">
                      
                      
                  </div>
              </div>
          </div>
      </div>
    </div>`;

   getUserFormGitHub(user.followers_url)
      .then((listFollower) => {
         var list = JSON.parse(listFollower);
         if (list.length === 0) {
            document.getElementsByClassName("list-follower")[0].innerHTML += `
            <p class="content">
                Not available 
             </p>`;
         } else {
            var count = 1;

            for (follower of list) {
               if (count > 5) {
                  document.getElementsByClassName(
                     "list-follower"
                  )[0].innerHTML += ` <div class="amount-follower">
                        <p>${list.length - 5}+</p>
                    </div>`;
                  break;
               }

               document.getElementsByClassName(
                  "list-follower"
               )[0].innerHTML += `<img src="${follower.avatar_url}" class="list-follower__img">`;

               count++;
            }
         }
      })
      .catch((errorText) => {
         console.log(errorText);
      });
};
