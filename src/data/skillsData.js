export const skillCategories = [
  {
    category: "Languages",
    skills: [
      { name: "JavaScript", years: 6 },
      { name: "TypeScript", years: 4 },
      { name: "Python", years: 2 },
      { name: "C#", years: 2 },
      { name: "Shell", years: 1 },
      { name: "C++", years: 1 },
      { name: "Dart", years: 1 },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React", years: 3 },
      { name: "Next.js", years: 2 },
      { name: "Redux", years: 2 },
      { name: "Zustand", years: 1 },
      { name: "HTML", years: 4 },
      { name: "CSS", years: 4 },
      { name: "Tailwind CSS", years: 2 },
      { name: "Material UI", years: 2 },
      { name: "Syncfusion Charts", years: 1 },
      { name: "Flutter", years: 1 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", years: 6 },
      { name: "Express.js", years: 4 },
      { name: "NestJS", years: 2 },
      { name: "RESTful API", years: 5 },
      { name: "ASP.NET Core", years: 1 },
      { name: ".NET", years: 2 },
      { name: "Passport.js", years: 1 },
      { name: "JWT", years: 3 },
      { name: "Entity Framework", years: 2 },
      { name: "Entity Framework Core", years: 1 },
      { name: "ADO.NET", years: 1 },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MongoDB", years: 4 },
      { name: "PostgreSQL", years: 2 },
      { name: "MySQL", years: 2 },
      { name: "SQL Server", years: 2 },
    ],
  },
  {
    category: "DevOps & Cloud",
    skills: [
      { name: "Docker", years: 4 },
      { name: "Docker Compose", years: 4 },
      { name: "Git", years: 5 },
      { name: "GitLab CI/CD", years: 2 },
      { name: "Linux CLI", years: 4 },
      { name: "EC2 AWS", years: 1 },
      { name: "S3 AWS", years: 1 },
      { name: "Lambda AWS", years: 1 },
      { name: "CloudWatch AWS", years: 1 },
      { name: "ClickOnce", years: 1 },
    ],
  },
  {
    category: "Hardware/IoT",
    skills: [
      { name: "Raspberry Pi", years: 1 },
      { name: "GPIO", years: 1 },
    ],
  },
  {
    category: "Testing",
    skills: [
      { name: "Jest", years: 2 },
      { name: "Mocha", years: 2 },
      { name: "React Testing Library", years: 1 },
    ],
  },
];

export const skills = skillCategories.flatMap((cat) => cat.skills);
