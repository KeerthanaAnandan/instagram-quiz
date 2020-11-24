let questions = [
  {
    id: 1,
    question: "What do you like to do in your free time?",
    answer: "2",
    options: [
      "Hang out with friends/family",
      "Plan and post content on my Instagram",
      "Scroll down Instagram feed",
      "Take pictures to post on my Instagram",
    ],
  },
  {
    id: 2,
    question: "The first thing I do in the morning is check instagram",
    answer: "2",
    options: ["True", "False"],
  },
  {
    id: 3,
    question: "I always schedule my posts in advance",
    answer: "2",
    options: ["True ", "False"],
  },
  {
    id: 4,
    question: "I can’t keep up with all the notifications on Instagram!",
    answer: "2",
    options: ["True  ", "False "],
  },
  {
    id: 5,
    question:
      "Before posting something, I consider how it would look on my feed",
    answer: "2",
    options: ["Yes", "No"],
  },
  {
    id: 6,
    question: "How frequently do you post on Instagram?",
    answer: "2",
    options: ["Everyday", "Any time I feel like it", "3-5x a week", "Rarely"],
  },
  {
    id: 7,
    question: "I never know what to post!",
    answer: "2",
    options: ["True  ", "False "],
  },
  {
    id: 8,
    question: "How often do you post in Instagram Stories?",
    answer: "2",
    options: [
      "Every day",
      "Sometimes throughout the week",
      "I never know what to post on Stories",
      "I rarely use Instagram stories",
    ],
  },
  {
    id: 9,
    question: "What I like the most about Instagram is….",
    answer: "2",
    options: [
      "To watch the stories and content of the people I follow",
      "To advertise my products and services",
      "To share pictures about my trips and gifts",
      "To make posts sometimes when I think it's the right time",
    ],
  },
  {
    id: 10,
    question: "My content is mostly…",
    answer: "2",
    options: [
      "About my businesses and services",
      "Pictures of myself and trips and tips",
      "Pictures of me, my pets and family",
      "I don’t know to be honest",
    ],
  },
  {
    id: 11,
    question: "Is your Instagram account private or public?",
    answer: "2",
    options: [
      "Private, my posts are very personal to me",
      "Public, I need it to be able to sell my products and services",
      "Private, I rarely post anything anyway",
      "Public, my followers love to see the places I go and what I do",
    ],
  },
  {
    id: 12,
    question:
      "How long do you take to choose what to post and edit it for your feed?",
    answer: "2",
    options: [
      "I never edit my photos",
      "More than 15 minutes",
      "Way too long…",
      "It depends on the picture",
    ],
  },
];

let question_count = 0;
//let points = 0;
Max_Questions = 12;
let observerPoints = 0;
let influencerPoints = 0;
let overthinkerPoints = 0;
let postponerPoints = 0;
let plannerPoints = 0;

window.onload = function () {
  show(question_count);
};

function next(e) {
  // if the question is last then redirect to final page
  if (question_count == questions.length - 1) {
    sessionStorage.setItem("time", time);
    clearInterval(mytime);
    location.href = "end.html";
  }
  console.log(question_count);

  let user_answer = document.querySelector(".option.active").innerHTML;

  //check answer
  /////////////////////////observer
  if (
    user_answer === "Hang out with friends/family" ||
    user_answer === "Rarely" ||
    user_answer === "I rarely use Instagram stories" ||
    user_answer === "To watch the stories and content of the people I follow" ||
    user_answer === "Pictures of me, my pets and family" ||
    user_answer === "Private, I rarely post anything anyway" ||
    user_answer === "I never edit my photos"
  ) {
    observerPoints += 1;
  }
  /////////////////organised planner
  else if (
    user_answer === "Plan and post content on my Instagram" ||
    user_answer === "True " ||
    user_answer === "Everyday" ||
    user_answer === "To advertise my products and services" ||
    user_answer === "About my businesses and services" ||
    user_answer ===
      "Public, I need it to be able to sell my products and services" ||
    user_answer === "It depends on the picture"
  ) {
    plannerPoints += 1;
  }
  ///////////////////postponer
  else if (
    user_answer === "Scroll down Instagram feed" ||
    user_answer === "False" ||
    user_answer === "No" ||
    user_answer === "Any time I feel like it" ||
    user_answer === "Sometimes throughout the week"
  ) {
    postponerPoints += 1;
  } //////////////////the influencer
  else if (
    user_answer === "Take pictures to post on my Instagram" ||
    user_answer === "True" ||
    user_answer === "False " ||
    user_answer === "3-5x a week" ||
    user_answer === "Every day" ||
    user_answer === "To share pictures about my trips and gifts" ||
    user_answer === "Pictures of myself and trips and tips" ||
    user_answer ===
      "Public, my followers love to see the places I go and what I do" ||
    user_answer === "More than 15 minutes"
  ) {
    influencerPoints += 1;
  }
  /////////////////////over thinker
  else if (
    user_answer === "True  " ||
    user_answer === "Yes" ||
    user_answer === "I never know what to post on Stories" ||
    user_answer ===
      "To make posts sometimes when I think it's the right time" ||
    user_answer === "I don’t know to be honest" ||
    user_answer === "Private, my posts are very personal to me" ||
    user_answer === "Way too long…"
  ) {
    overthinkerPoints += 1;
  }
  sessionStorage.setItem("observerPoints", observerPoints);
  sessionStorage.setItem("postponerPoints", postponerPoints);
  sessionStorage.setItem("overthinkerPoints", overthinkerPoints);
  sessionStorage.setItem("plannerPoints", plannerPoints);
  sessionStorage.setItem("influencerPoints", influencerPoints);
  //let coloranswer = document.querySelector("li.option.active");
  //e.target.coloranswer.classList.add("correct");

  question_count++;
  show(question_count);
  toggleActive();
  //Update the progress Bar

  const progressBarFull = document.getElementById("progressBarFull");

  progressBarFull.style.width = ` ${(question_count / Max_Questions) * 100}%`;
}

function show(count) {
  //progress text
  const progressText = document.getElementById("progressText");

  progressText.innerText = `Question ${count + 1}/${Max_Questions}`;

  let question = document.getElementById("questions");
  let [first, second, third, fourth] = questions[count].options;
  ///////no of questions
  if (
    question_count == 1 ||
    question_count == 2 ||
    question_count == 3 ||
    question_count == 4 ||
    question_count == 6
  ) {
    question.innerHTML = `
    <h2>Q${count + 1}. ${questions[count].question}</h2>
     <ul class="option_group">
    <li><span class="option">${first}</span></li>
    <li ><span class="option">${second}</span></li>
    

  </ul> 
    `;
    toggleActive();
  } else {
    question.innerHTML = `
  <h2>Q${count + 1}. ${questions[count].question}</h2>
   <ul class="option_group">
  <li><span class="option">${first}</span></li>
  <li ><span class="option">${second}</span></li>
  <li ><span class="option">${third}</span></li>
  <li ><span class="option">${fourth}</span></li>
</ul> 
  `;
    toggleActive();
  }
}
function toggleActive() {
  let option = document.querySelectorAll(".option");

  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function () {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}
