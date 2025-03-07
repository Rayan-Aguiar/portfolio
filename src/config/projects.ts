export interface ProjectListProps {
  id: number;
  name: string;
  description: string;
  descriptionFull: string;
  img: string;
  linkGit?: string;
  linkSite?: string;
  type: "Front-End" | "Mobile" | "Full-Stack" | "Back-End";
  featured: boolean
}

export const ProjectList: ProjectListProps[] = [
  {
    id: 1,
    name: "Lorem 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    descriptionFull:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc eget posuere ultricies, ligula est consectetur velit, at lobortis metus lectus eu lectus. Sed condimentum, purus vitae elementum varius, neque velit facilisis neque, et consectetur purus libero id justo. Donec in libero vel turpis convallis vulputate. Sed non risus in neque tristique vulputate. Nulla facilisi. Pellentesque",
    img: "https://cdn.sanity.io/images/v6oximkk/production/21d23aacc75f36df01310f8782e8102a0882276f-1600x900.jpg?w=1600&h=900&auto=format",
    type: "Front-End",
    linkGit: "https://github.com/",
    linkSite: "https://google.com",
    featured: true,
  },
  {
    id: 2,
    name: "Lorem 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    descriptionFull:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc eget posuere ultricies, ligula est consectetur velit, at lobortis metus lectus eu lectus. Sed condimentum, purus vitae elementum varius, neque velit facilisis neque, et consectetur purus libero id justo. Donec in libero vel turpis convallis vulputate. Sed non risus in neque tristique vulputate. Nulla facilisi. Pellentesque",
    img: "https://cdn.sanity.io/images/v6oximkk/production/21d23aacc75f36df01310f8782e8102a0882276f-1600x900.jpg?w=1600&h=900&auto=format",
    type: "Mobile",
    linkGit: "https://github.com/",
    linkSite: "https://google.com",
    featured: true,
  },
  {
    id: 3,
    name: "Lorem 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    descriptionFull:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc eget posuere ultricies, ligula est consectetur velit, at lobortis metus lectus eu lectus. Sed condimentum, purus vitae elementum varius, neque velit facilisis neque, et consectetur purus libero id justo. Donec in libero vel turpis convallis vulputate. Sed non risus in neque tristique vulputate. Nulla facilisi. Pellentesque",
    img: "https://cdn.sanity.io/images/v6oximkk/production/21d23aacc75f36df01310f8782e8102a0882276f-1600x900.jpg?w=1600&h=900&auto=format",
    type: "Front-End",
    linkGit: "https://github.com/",
    linkSite: "https://google.com",
    featured: true,
  },
  {
    id: 4,
    name: "Lorem 4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    descriptionFull:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc eget posuere ultricies, ligula est consectetur velit, at lobortis metus lectus eu lectus. Sed condimentum, purus vitae elementum varius, neque velit facilisis neque, et consectetur purus libero id justo. Donec in libero vel turpis convallis vulputate. Sed non risus in neque tristique vulputate. Nulla facilisi. Pellentesque",
    img: "https://cdn.sanity.io/images/v6oximkk/production/21d23aacc75f36df01310f8782e8102a0882276f-1600x900.jpg?w=1600&h=900&auto=format",
    type: "Front-End",
    linkGit: "https://github.com/",
    linkSite: "https://google.com",
    featured: true,
  },
  {
    id: 5,
    name: "Lorem 5",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    descriptionFull:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc eget posuere ultricies, ligula est consectetur velit, at lobortis metus lectus eu lectus. Sed condimentum, purus vitae elementum varius, neque velit facilisis neque, et consectetur purus libero id justo. Donec in libero vel turpis convallis vulputate. Sed non risus in neque tristique vulputate. Nulla facilisi. Pellentesque",
    img: "https://cdn.sanity.io/images/v6oximkk/production/21d23aacc75f36df01310f8782e8102a0882276f-1600x900.jpg?w=1600&h=900&auto=format",
    type: "Back-End",
    linkGit: "https://github.com/",
    linkSite: "https://google.com",
    featured: false,
  },
];
