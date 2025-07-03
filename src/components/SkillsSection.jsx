import { useState } from "react"
import {cn} from "@/lib/utils";

const skills= [
    {name: "HTML", level:95, category: "frontend"},
    {name: "CSS", level:95, category: "frontend"},
    {name: "JAVASCRIPT", level:85, category: "frontend"},
    {name: "REACT", level:75, category: "frontend"},
    {name: "BOOTSTRAP", level:85, category: "frontend"},
    {name: "Tailwind", level:85, category: "frontend"},


    {name: "GIT/GITHUB", level:85, category: "Tools"},
    {name: "REPLIT", level:75, category: "Tools"},
    {name: "VS CODE", level:85, category: "Tools"},




];

const cat =["all", "frontend", "Tools"]

export const SkillsSection=()=>{
    const[activeCat, setactiveCat] = useState("all");
    const filteredSkils = skills.filter((skills)=> activeCat === "all" || skills.category === activeCat)

return(<section id="skills" className="py-24 px-4 relative bg-secondary/30">
    <div className="conatainer mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            My<span className="text-primary"> Skills</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
            {cat.map((cat, key)=>(
                <button key={key} onClick={()=> setactiveCat(cat)} className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize", activeCat === cat ? "bg-primary text-primary-foregrond": "bg-seconday/70 text-foreground hover: bg-secondary")}>
                    {cat}
                </button>
            ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSkils.map((skill, key)=>(
                <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                    <div className="text-left mb-4">
                        <h3 className="font-semibold text-lg">{skill.name}</h3>
                    </div>
                    <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                    <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out" style={{width: skill.level + "%"}}></div>
                    </div>
                    <div className="text-right mt-1">
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                </div>
               
            ))}
        </div>
    </div>
</section>)

}