const reels = [
  {
    ismuted: true,
    username: "tech_nilesh",
    likeCount: 1240,
    isLiked: false,
    commentCount: 86,
    caption: "Built this cool custom cursor using pure JavaScript!",
    video: "./reels/video1.mp4",
    userprofile: "https://randomuser.me/api/portraits/men/11.jpg",
    shareCount: 42,
    isFollwed: true,
  },
  {
    ismuted: true,
    username: "codewithravi",
    likeCount: 980,
    isLiked: false,
    commentCount: 54,
    caption: "DOM manipulation feels powerful when done right 💻",
    video: "./reels/video2.mp4",
    userprofile: "https://randomuser.me/api/portraits/men/22.jpg",
    shareCount: 30,
    isFollwed: false,
  },
  {
    ismuted: true,
    username: "frontend_diaries",
    likeCount: 2150,
    isLiked: true,
    commentCount: 143,
    caption: "Practicing animations with CSS & JS ✨",
    video: "./reels/video3.mp4",
    userprofile: "https://randomuser.me/api/portraits/women/33.jpg",
    shareCount: 120,
    isFollwed: true,
  },
  {
    ismuted: true,
    username: "js_master",
    likeCount: 760,
    isLiked: false,
    commentCount: 29,
    caption: "Event bubbling vs capturing explained in 30 seconds!",
    video: "./reels/video4.mp4",
    userprofile: "https://randomuser.me/api/portraits/men/44.jpg",
    shareCount: 18,
    isFollwed: false,
  },
  {
    ismuted: true,
    username: "daily_dev",
    likeCount: 1890,
    isLiked: true,
    commentCount: 97,
    caption: "Consistency beats motivation every single time 🔥",
    video: "./reels/video5.mp4",
    userprofile: "https://randomuser.me/api/portraits/women/55.jpg",
    shareCount: 75,
    isFollwed: true,
  },
  {
    ismuted: true,
    username: "ui_ux_creative",
    likeCount: 1455,
    isLiked: false,
    commentCount: 68,
    caption: "Minimal UI design for a music player app 🎧",
    video: "./reels/video6.mp4",
    userprofile: "https://randomuser.me/api/portraits/women/66.jpg",
    shareCount: 49,
    isFollwed: true,
  },
  {
    ismuted: true,
    username: "learn_js_fast",
    likeCount: 530,
    isLiked: false,
    commentCount: 21,
    caption: "Closures in JavaScript made simple ✅",
    video: "./reels/video7.mp4",
    userprofile: "https://randomuser.me/api/portraits/men/77.jpg",
    shareCount: 11,
    isFollwed: false,
  },
  {
    ismuted: true,
    username: "web_magic",
    likeCount: 2720,
    isLiked: true,
    commentCount: 190,
    caption: "Scroll-based animations using Intersection Observer 👀",
    video: "./reels/video8.mp4",
    userprofile: "https://randomuser.me/api/portraits/men/88.jpg",
    shareCount: 160,
    isFollwed: true,
  },
  {
    ismuted: true,
    username: "code_explorer",
    likeCount: 610,
    isLiked: false,
    commentCount: 34,
    caption: "Understanding getBoundingClientRect() today 📐",
    video: "./reels/video9.mp4",
    userprofile: "https://randomuser.me/api/portraits/men/99.jpg",
    shareCount: 20,
    isFollwed: false,
  },
  {
    ismuted: true,
    username: "creative_dev",
    likeCount: 1985,
    isLiked: true,
    commentCount: 112,
    caption: "Built a reels-like UI using only HTML, CSS & JS 🚀",
    video: "./reels/video10.mp4",
    userprofile: "https://randomuser.me/api/portraits/women/10.jpg",
    shareCount: 98,
    isFollwed: true,
  },
];

const allReels = document.querySelector(".all-reels");

function addData() {
  let sum = "";
  reels.forEach(function (ele, idx) {
    sum += ` <div class="reel">
            <video autoplay loop ${ele.ismuted ? "muted" : ""} src="${
      ele.video
    }"> 
</video>
            <button id=${idx} class="mute">${ele.ismuted ? '<i class="ri-volume-mute-line"></i>' : '<i class="ri-volume-up-line"></i>'}</button>
            <div class="bottom">
              <div class="user">
                <img
                  src="${ele.userprofile}"
                  alt=""
                />
                <h4>${ele.username}</h4>
                <button id=${idx} class='follow'>${
      ele.isFollwed ? "UnFollow" : "Follow"
    }</button>
              </div>
              <h3>
                ${ele.caption}
              </h3>
            </div>
            <div class="right">
              <div id=${idx} class="like">
                <h2 class="like-icon">${
                  ele.isLiked
                    ? '<i class="love ri-heart-3-fill"></i>'
                    : '<i class="ri-heart-3-line"></i>'
                }</h2>
                <h6>${ele.likeCount}</h6>
              </div>
              <div class="comment">
                <h2 class="comment-icon"><i class="ri-chat-3-line"></i></h2>
                <h6>${ele.commentCount}</h6>
              </div>
              <div class="share">
                <h2 class="share-icon">
                  <i class="ri-share-forward-line"></i>
                </h2>
                <h6>${ele.shareCount}</h6>
              </div>
              <div class="menu">
                <h2 class="menu-icon"><i class="ri-more-2-fill"></i></h2>
              </div>
            </div>
          </div>`;
  });

  allReels.innerHTML = sum;
}

addData();

allReels.addEventListener("click", function (dets) {
  if (dets.target.className == "like") {
    if (!reels[dets.target.id].isLiked) {
      reels[dets.target.id].likeCount++;
      reels[dets.target.id].isLiked = true;
    } else {
      reels[dets.target.id].likeCount--;
      reels[dets.target.id].isLiked = false;
    }
    addData();
  }
  if (dets.target.className == "follow") {
    if (!reels[dets.target.id].isFollwed) {
      reels[dets.target.id].isFollwed = true;
    } else {
      reels[dets.target.id].isFollwed = false;
    }
    addData();
  }

  if (dets.target.className == "mute") {
    if (!reels[dets.target.id].ismuted) {
      reels[dets.target.id].ismuted = true;
    } else {
      reels[dets.target.id].ismuted = false;
    }
    addData();
  }

  
});
