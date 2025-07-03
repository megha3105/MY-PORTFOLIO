import { Briefcase, Code, User } from "lucide-react"
export const AboutSection =()=>{


    return(
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About<span className="text-primary"> Me</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Frontend Developer & Creative Coder</h3>
                        <p className="text-muted-foreground">Self-taught and driven, I focus on building clean, responsive web interfaces with attention to detail </p>
                        <p className="text-muted-foreground">Currently working on personal projects to sharpen my skills and bring ideas to life in the browser.</p>
                     <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">Get In Touch</a>
                         <a href="https://drive.google.com/file/d/1hnnBOrO9NUcFwcoPXgMx4WrE9A6aMEm-/view?usp=drivesdk " className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">Download CV</a>
                     </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Frontend-Development</h4>
                                    <p className="text-muted-foreground">
                                        Building responsive websites using HTML, CSS, JavaScript, and modern frameworks like React.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                             <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                <User className="h-6 w-6 text-primary"/>
                                </div>
                                 <div className="text-left">
                                    <h4 className="font-semibold text-lg">Visual Design</h4>
                                    <p className="text-muted-foreground">
                                        Creating engaging posters, graphics, and layouts using Canva with a strong eye for color and composition.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                             <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase className="h-6 w-6 text-primary"/>
                                </div>
                                 <div className="text-left">
                                    <h4 className="font-semibold text-lg">Work Experience</h4>
                                    <p className="text-muted-foreground">
                                        Previously worked with Amazon and Blinkit in fast-paced roles that strengthened my communication, adaptability, and problem-solving — qualities I now bring into my work as a frontend developer.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </section>
    )
        
    
}