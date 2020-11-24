let observerpoints = sessionStorage.getItem("observerPoints");
let influencerpoints = sessionStorage.getItem("influencerPoints");
let plannerpoints = sessionStorage.getItem("plannerPoints");
let overthinkerpoints = sessionStorage.getItem("overthinkerPoints");
let postponerpoints = sessionStorage.getItem("postponerPoints");

let pointop = 0;
let mess;
let typo;
//observer
if (
  observerpoints >= influencerpoints &&
  observerpoints >= overthinkerpoints &&
  observerpoints >= plannerpoints &&
  observerpoints >= postponerpoints
) {
  typo = "The observer";
  mess = [
    "You like to look at a cat in a tree until it comes down again’’.As an old Dutch saying goes:",
    " Wise folk, those Dutchies. And well, it appears you like watching cats in trees too.",
    "Instead of being active on Instagram, you prefer to look at what other people post online.Commenting and liking posts isn’t your way of doing things. You’re more the silent admirer.",

    "Besides, your main intention when you take to IG is to be entertained, not necessarily to interact. This doesn’t mean you don’t like to stay up-to-date on what other people are doing. Of course you do! It’s just that you have no interest in showing others what you're doing, which is why your account is probably private at this moment.",

    "You don’t really put in the time to share content and cannot be bothered to think about captions to go with it. Ain’t nobody got time for that.",
    "Luckily we've got some awesome tips that were made specially to help you step up your game on Instagram. Don't miss out and get them now! ",
  ];
}

//influencer
if (
  influencerpoints >= observerpoints &&
  influencerpoints >= overthinkerpoints &&
  influencerpoints >= plannerpoints &&
  influencerpoints >= postponerpoints
) {
  typo = "The Influencer";
  mess = [
    "“No one is you, and that is your Superpower”",
    "You have a vision on how you want to project yourself on Instagram and understand what your followers like to see. Speaking of followers, you have what it takes to attract them to you. These need to stay entertained so you stay active and try to post regularly.",

    "As an influencer, you have an opinion and like to share it with the world. And your followers love you for it!  You seek to inform, entertain or inspire your audience with your content and you are not afraid to share your thoughts and what you stand up for.",

    "Like what you see? We've got some awesome tips that were made specially to help take your Instagram to the next level. Don't miss out and get them now! ",
  ];
}
//planner
else if (
  plannerpoints >= influencerpoints &&
  plannerpoints >= overthinkerpoints &&
  plannerpoints >= observerpoints &&
  plannerpoints >= postponerpoints
) {
  typo = "The organized planner";
  mess = [
    "“For every minute spent in organizing, an hour is earned.” - Benjamin Franklin",
    "You are well organized and do your very best to plan your posts in advance. You have a clear overview of your Instagram strategy regardless of how elaborate it is.",

    "You understand the importance of having an Instagram presence and therefore try to put time into thinking ahead with your Instagram account. You have a call to action in your posts and a particular intention with your content. Keep up the great work!",

    "Like what you see? We've got some awesome tips that were made specially to help take your Instagram to the next level. Don't miss out and get them now!  ",
  ];
}
//postponer
else if (
  postponerpoints >= influencerpoints &&
  postponerpoints >= overthinkerpoints &&
  postponerpoints >= plannerpoints &&
  postponerpoints >= observerpoints
) {
  typo = "The Postponer";
  mess = [
    "‘’We’ve still got time’’",
    " ‘’It’s too late now, I’ll post this tomorrow’’.",
    "Planning to read this description now, or tomorrow maybe? You are someone that tends to leave things up to the last minute. You prefer to live in the now and not to think about the nearby future, because who can predict the future anyways right?",
    "You don't enjoy planning and scheduling things in advance. Instead, you'd rather go with the flow and do things whenever you feel like it. Yes, you'd like to be more active on Instagram but you just haven't had the \"time\" to do it yet.  In other words, (AT TIMES) you’re more the \"I will do it later\" type than an organised freak planner.",
    "Luckily we've got some awesome tips that were made specially to help you step up your game on Instagram. Don't miss out and get them now!",
  ];
}
//po
//overthinker
else if (
  overthinkerpoints >= influencerpoints &&
  overthinkerpoints >= observerpoints &&
  overthinkerpoints >= plannerpoints &&
  overthinkerpoints >= postponerpoints
) {
  typo = "'The over-thinker'";
  mess = [
    "‘’Wait what if I use this filter instead?’’",
    " ‘’Oh what will people think of me if I post this instead?’’",
    " ‘’I don’t know what to post…!’’",
    "In other words: you tend to put a substantial amount of thought into what you want to share on your Instagram.",
    "You are always wondering about what to post and that keeps you from having the consistency you would like to. You tend to spend quite some time scrolling through Instagram to get inspiration and nothing seems good enough. Your perfectionism and over thinking is getting on your way but you simply don’t know what to do.",
    "Luckily we've got some awesome tips that were made specially to help you step up your game on Instagram. Don't miss out and get them now!",
  ];
}

//planner = postponer
else if (
  plannerpoints == postponerpoints ||
  plannerpoints == overthinkerpoints ||
  plannerpoints == observerpoints ||
  plannerpoints == influencerpoints ||
  postponerpoints == overthinkerpoints ||
  postponerpoints == influencerpoints ||
  postponerpoints == observerpoints ||
  observerpoints == influencerpoints ||
  observerpoints == overthinkerpoints ||
  influencerpoints == overthinkerpoints
) {
  typo = "The organized planner";
  mess = [
    "“For every minute spent in organizing, an hour is earned.” - Benjamin Franklin",
    "You are well organized and do your very best to plan your posts in advance. You have a clear overview of your Instagram strategy regardless of how elaborate it is.",

    "You understand the importance of having an Instagram presence and therefore try to put time into thinking ahead with your Instagram account. You have a call to action in your posts and a particular intention with your content. Keep up the great work!",

    "Like what you see? We've got some awesome tips that were made specially to help take your Instagram to the next level. Don't miss out and get them now!  ",
  ];
}

const mao = mess.map((ms) => `<li>` + ms + `</li>`).join("");

document.querySelector(".headmsg").innerHTML = typo;
const msgme = document.querySelector(".msghere");
msgme.className = "center-item";
//document.querySelector(".msghere").innerHTML = mao;

msgme.innerHTML = mao;
document.querySelector(".usertype").value = typo;

document.querySelector(".usertype").style.display = "none";

//formspree

window.addEventListener("DOMContentLoaded", function () {
  // get the form elements defined in your form HTML above

  var form = document.getElementById("my-form");
  //var button = document.getElementById("my-form-button");
  var status = document.getElementById("status");

  // Success and Error functions for after the form is submitted

  function success() {
    form.reset();
    // button.style = "display: block ";
    status.classList.add("success");
    status.innerHTML = "Submitted Successfully!";
  }

  function error() {
    status.classList.add("error");
    status.innerHTML = "Oops! There was a problem.";
  }

  // handle the form submission event

  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}
//share buttons
/* 

Social Share Links:

WhatsApp:
https://wa.me/?text=[post-title] [post-url]

Facebook:
https://www.facebook.com/sharer.php?u=[post-url]

Twitter:
https://twitter.com/share?url=[post-url]&text=[post-title]

Pinterest:
https://pinterest.com/pin/create/bookmarklet/?media=[post-img]&url=[post-url]&is_video=[is_video]&description=[post-title]

LinkedIn:
https://www.linkedin.com/shareArticle?url=[post-url]&title=[post-title]

*/

const facebookBtn = document.querySelector(".facebook-btn");
const instagramBtn = document.querySelector(".instagram-btn");

const linkedinBtn = document.querySelector(".linkedin-btn");
const whatsappBtn = document.querySelector(".whatsapp-btn");

function init() {
  let postUrl = encodeURI(document.location.href);
  let postTitle = encodeURI("Checkout what type of intagrammer I am ");
  // let postImg = encodeURI(pinterestImg.src);

  facebookBtn.setAttribute(
    "href",
    `https://www.facebook.com/sharer.php?u=${postUrl}`
  );

  instagramBtn.setAttribute(
    "href",
    `https://instagram.com/share?url=${postUrl}&text=${postTitle}`
  );

  // linkedinBtn.setAttribute(
  // "href",
  //"http://www.linkedin.com/shareArticle?mini=true&amp;url=https://simplesharebuttons.com"
  //`https://www.linkedin.com/shareArticle?url=${postUrl}&title=${postTitle}`
  //);
  linkedinBtn.setAttribute(
    "href",
    `https://www.linkedin.com/shareArticle?url=${postUrl}&title=${postTitle}`
  );

  whatsappBtn.setAttribute(
    "href",
    `https://wa.me/?text=${postTitle} ${postUrl}`
  );
}

init();
