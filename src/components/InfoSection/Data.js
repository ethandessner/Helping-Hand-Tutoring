// A way to create reusable components - file where we can pass in different values and update the design of the website
import Svg1 from "../../images/svg-7.svg";
import Svg2 from "../../images/svg-2.svg";
import Svg3 from "../../images/svg-faq.svg";

export const homeObjOne = {
  id: "about",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "Let's get to know you better!",
  headline: "Learning style quiz:",
  description:
    "This short 5-question quiz let's us find out how you learn best. The results will help your tutor personalize sessions in a way that is most effective for you.",
  buttonLabel: "Start Quiz",
  imgStart: true,
  img: Svg1,
  alt: "Testing",
  dark: true,
  primary: true,
  darkText: false,
};

export const homeObjTwo = {
  id: "discover",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Grow as a Student Today!",
  headline:
    "With our team of professionally trained tutors, you're bound to thrive as a student",
  description:
    "Over 65% of our students reported that they noticed an increase in their grades after only 2 one-on-one sessions! Start with Helping Hand Tutoring today for the best results!",
  buttonLabel: "Start Quiz!",
  imgStart: true,
  img: Svg2,
  alt: "Testing",
  dark: false,
  primary: false,
  darkText: true,
};

export const homeObjThree = {
  id: "FAQ",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Any Questions?",
  headline: "Frequently Asked Questions:",
  description: "Below are some FAQs we often get, scroll down to see!",
  buttonLabel: "Start Quiz!",
  imgStart: false,
  img: Svg3,
  alt: "Testing",
  dark: false,
  primary: false,
  darkText: true,
};
