export const EXAMPLE_RESUME = {
  personalInformation: {
    fullName: "Budi Santoso",
    jobTitle: "Fullstack Web Developer",
    location: "Samarinda, Indonesia",
  },
  contact: {
    email: "budisantoso@mail.com",
    phone: "(+62) 899 8888 7777",
    website: "budisantoso.personal",
  },
  professionalSummary:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nunc leo, posuere eget odio et, pulvinar posuere ligula. Praesent cursus massa in nisl condimentum, eu faucibus turpis fringilla. Morbi tincidunt cursus ipsum non finibus. Quisque porta, metus et faucibus condimentum, neque orci interdum ipsum, nec luctus tellus nunc in tortor. Sed malesuada, lorem eu placerat tristique, quam est sollicitudin massa, sed semper ex magna sed ligula. Proin at nisi lorem.",
  skill: [
    {
      id: crypto.randomUUID(),
      name: "Wordpress Development",
    },
    {
      id: crypto.randomUUID(),
      name: "Responsive Web Design",
    },
  ],
  education: [
    {
      id: crypto.randomUUID(),
      institute: "Open University",
      degree: "Bachelor of Information System",
      start: "2016",
      end: "2020",
    },
  ],
  employment: [
    {
      id: crypto.randomUUID(),
      workplace: "Anti-Cancer Foundation",
      role: "Front-end Developer",
      start: "2020",
      end: "2021",
    },
    {
      id: crypto.randomUUID(),
      workplace: "Fintech Growth",
      role: "Fullstack Engineer",
      start: "2021",
      end: "",
    },
  ],
};
