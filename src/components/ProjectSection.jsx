import { ArrowRight, ExternalLink, Github } from "lucide-react"

const projects = [
   {
        id: 1,
        title: "PDF TOOLS",
        description: "",
        image:"public/project2.png",
        tags: ["React", "Node.js","CSS", "Bootstrap" ],
        demoUrl: "*",
        githubUrl: "https://github.com/megha3105/PDFTOOLS",
       
    },
    

      {
        id: 2,
        title: "Moviemania",
        description: "",
         image:"public/project1.png",
        tags: ["React", "Tailwindcss", "API", ],
        demoUrl: "https://moviemaniaa11.netlify.app/",
        githubUrl: "https://github.com/megha3105/Moviemania11",
       
    },

      {
        id: 3,
        title: "Gym Management System",
        description: "",
         image:"public/Project3.png",
        tags: ["React", "HTML","CSS", "firebase", ],
        demoUrl: "https://gym-membership-beige.vercel.app/",
        githubUrl: "https://github.com/megha3105/Gym-Membership",
       
    }
] 

export const ProjectSection = () =>{

return(<section id="projects" className="py-24 px-4 relative">
  <div className="container mx-auto max-w-5xl">
    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Featured <span className="text-primary">Projects
      </span></h2>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Here are some of my recent projects, built with care for clean design, performance, and usability.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((projects, key)=>(
          <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
            <div className="h-48 overflow-hidden">
              <img src={projects.image} alt={projects.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
            </div>
            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-4">
                {projects.tags.map((tags)=>(
                  <span className="px-2 py-1 text-xs border font-medium rounded-full bg-secondary text-secondary-foreground">{tags}</span>
                ))}
              </div>
           
            <h3 className="text-xl font-semibold mb-1">{projects.title}</h3>
            <p className="text-muted-foreground text-sm mb-4">{projects.description}</p>
            <div className="flrx justify-between items-center">
              <div className="flex space-x-3">
                <a href={projects.demoUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                  <ExternalLink size={20}/>
                </a>
                <a href={projects.githubUrl}>
                  <Github size={20}/>
                </a>
              </div>
               </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 w-full flex justify-center">
        <a className="cosmic-button w-fit flex items-center mx-auto gap-2" href="https://github.com/megha3105">Check My Github <ArrowRight size={16}/></a>
      </div>
  </div>
</section>)}