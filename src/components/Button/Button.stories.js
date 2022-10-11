// // Card.stories.js

// import Card from "./Card.vue";
// import '../../assets/tailwind.css'

// //👇 This default export determines where your story goes in the story list
// export default {
//   title: "Card",
//   component: Card,
// };

// //👇 We create a “template” of how args map to rendering
// const Template = (args) => ({
//   components: { Card },
//   setup() {
//     //👇 The args will now be passed down to the template
//     return { args };
//   },
//   template: '<Card v-bind="args"/>',
// });

// export const Primary = Template.bind({});
// Primary.args = {
//   /* 👇 The args you need here will depend on your component */
//   article: "Artigo",
//   author: "Eder Sena",
//   date: "Mar 16, 2022",
//   readingTime: "66 min",
//   title: "Por que vue 3 é baum?",
//   image:
//     "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//   subject:
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa libero labore natus.",
// };


// export const Secondary = Template.bind({});
// Secondary.args = {
//   /* 👇 The args you need here will depend on your component */
//   article: "Video",
//   author: "Damaris Monteiro",
//   date: "Mar 22, 2022",
//   readingTime: "66 min",
//   title: "Por que React 18 é baum?",
//   image:
//     "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//   subject:
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa libero labore natus.",
// };