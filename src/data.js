// All portfolio content lives here, so it can be edited without touching components.

export const profile = {
  name: "Yassir",
  arabicName: "ياسر",
  fullName: "Yassir Essayh",
  role: "Full-stack developer · Laravel & React",
  title: "The Rogue Developer",
  house: "Blood of the Dragon",
  email: "essayhyasser@gmail.com",
  linkedin: "https://www.linkedin.com/in/yasser-essayh",
  github: "https://github.com/FanKiing",
};

export const nav = [
  { id: "chronicle", label: "Chronicle" },
  { id: "arsenal", label: "Arsenal" },
  { id: "forge", label: "Forge" },
  { id: "raven", label: "Raven" },
];

export const facts = [
  { label: "Seat", value: "Laravel · Dragonstone" },
  { label: "Allegiance", value: "React · Redux Toolkit" },
  { label: "House words", value: "Structure or die" },
];

// `main: true` marks the skills highlighted in red.
export const arsenal = [
  {
    title: "Core",
    note: "The blades I draw first.",
    skills: [
      { name: "PHP", main: true },
      { name: "Laravel", main: true },
      { name: "JavaScript", main: true },
      { name: "React", main: true },
      { name: "Redux Toolkit" },
      { name: "Node.js" },
      { name: "Python" },
    ],
  },
  {
    title: "Laravel ecosystem",
    note: "My dragonstone.",
    skills: [
      { name: "Livewire", main: true },
      { name: "Reverb" },
      { name: "Telescope" },
      { name: "Blade" },
      { name: "SweetAlert" },
    ],
  },
  {
    title: "Front end",
    note: "Where fire meets design.",
    skills: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "Tailwind CSS", main: true },
      { name: "GSAP" },
      { name: "jQuery" },
    ],
  },
  {
    title: "Data",
    note: "The vaults beneath the keep.",
    skills: [{ name: "MySQL" }, { name: "MongoDB" }],
  },
  {
    title: "Tools & workflow",
    note: "What every campaign needs.",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "GitLab" },
      { name: "VS Code" },
      { name: "Postman" },
    ],
  },
  {
    title: "The maester's corner",
    note: "Ink and ledgers.",
    skills: [{ name: "Word" }, { name: "Excel" }, { name: "PowerPoint" }],
  },
];

export const tenets = [
  { title: "Brutal honesty in review", text: "Your pull request will leave better than it arrived." },
  { title: "No spaghetti logic", text: "Clear layers, clear names, clear responsibilities." },
  { title: "Loyal to the team", text: "And still ready to challenge a bad decision before it ships." },
  { title: "Obsessed with UX", text: "A confused user is a lost kingdom." },
];

export const bugs = [
  "N+1 query in OrderController@index",
  'Undefined array key "user_id" in CheckoutService',
  "useEffect infinite loop in Dashboard.jsx",
  "z-index: 99999 on a modal nobody remembers",
];

export const interests = [
  {
    title: "Story-driven games",
    text: "Where every choice bleeds into consequences. The same way a schema decision does, six months later.",
  },
  {
    title: "A Song of Ice and Fire",
    text: "The only gospel I kneel to. Waiting on The Winds of Winter taught me patience with slow CI.",
  },
  {
    title: "Dark fantasy & intrigue",
    text: "Betrayal, politics, plot twists. It all tastes better with a good interface.",
  },
];
