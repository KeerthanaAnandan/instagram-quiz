let observerpoints = sessionStorage.getItem("observerpoints");
let influencerpoints = sessionStorage.getItem("influencerpoints");
let plannerpoints = sessionStorage.getItem("plannerpoints");
let overthinkerpoints = sessionStorage.getItem("overthinkerpoints");
let postponerpoints = sessionStorage.getItem("postponerpoints");

let pointop = 0;
//observer
if (
  observerpoints >= influencerpoints &&
  observerpoints >= overthinkerpoints &&
  observerpoints >= plannerpoints &&
  observerpoints >= postponerpoints
) {
  typo = "The observer";
  mess =
    "Those who never post themselves but just look at what others post.You generally don’t like or comment on posts. Your intention is light entertainment. You like to stay up-to-date on what other people are doing. Your account is private. You dislike sharing content and cannot be bothered to think about captions to go with it.";
}
//influencer
if (
  influencerpoints >= observerpoints &&
  influencerpoints >= overthinkerpoints &&
  influencerpoints >= plannerpoints &&
  influencerpoints >= postponerpoints
) {
  typo = "'The Influencer'";
  mess =
    "Those who spend most of the time taking pictures of themselves.You are very active on Instagram and post regularly. Has a clear opinion and likes to communicate it on social media. You have a large following. You have a consistent engagement with your followers. You seek to inform, entertain or inspire your audience with your content. Most of your posts have a call to action.";
}
//planner
if (
  plannerpoints >= influencerpoints &&
  plannerpoints >= overthinkerpoints &&
  plannerpoints >= plannerpoints &&
  plannerpoints >= postponerpoints
) {
  typo = "'The organized planner'";
  mess =
    "Those who are organised and schedule posts in advance.You have an Instagram strategy regardless of how elaborate it is. You put time into thinking ahead with your Instagram account. You have a call to action in your posts and a particular intention with your content.";
}
//postponer
if (
  postponerpoints >= influencerpoints &&
  postponerpoints >= overthinkerpoints &&
  postponerpoints >= plannerpoints &&
  postponerpoints >= observerpoints
) {
  typo = "'The Postponer'";
  mess =
    "‘’We’ve still got time’’, ‘’It’s too late now, I’ll post this tomorrow’’.You are someone that leaves things up to the last minute. You prefer to live in the now and not to think about the nearby future. You see posting on social media as a chore. You’re more the messy type than an organised planner.";
}
//po
//overthinker
if (
  overthinkerpoints >= influencerpoints &&
  overthinkerpoints >= observerpoints &&
  overthinkerpoints >= plannerpoints &&
  overthinkerpoints >= postponerpoints
) {
  typo = "'The over-thinker'";
  mess =
    "Those who put a lot of thought into their posts and captions.You spend a lot of time scrolling through Instagram to get inspiration. You always try to stand out and be unique. You’re a perfectionist and intend to post meaningful and thoughtful posts rather than light-weighted entertainment.";
}
document.querySelector(".headmsg").innerHTML = typo;
document.querySelector(".msghere").innerHTML = mess;

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
    status.classList.add("success")
    status.innerHTML = "Submitted Successfully!";
  }

  function error() {
    status.classList.add("error")
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
