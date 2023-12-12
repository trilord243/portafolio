"use client"
import React, { useRef } from 'react'
import { ProjectCards } from './ProjectCards'
import ProjectTag from './ProjectTag';
import { motion, useInView } from 'framer-motion';

const projectData = [

    {
        id: 1,
        title: 'Nextjs Users Directory',
        description: 'A simple directory of users built with Nextjs and Tailwindcss',
        image: '/projects/users-next.png',
        tag: ["All", "Web"],
        gitUrl: "https://github.com/trilord243/next-users-ssr",
        previewUrl: "https://next-ssr-users.vercel.app/"
    },
    {
        id: 2,
        title: 'Todo App with React',
        description: 'Todo App with React using localStorage',
        image: '/projects/todo-react.png',
        tag: ["All", "Web"],
        gitUrl: "https://github.com/trilord243/Todo-react-glass",
        previewUrl: "http://todo-felipe.symtechven.com/"
    },
    {
        id: 3,
        title: 'Agency Travel Website',
        description: 'Front end of a travel agency website with tailwind and html',
        image: '/projects/agencia-viaje.png',
        tag: ["All", "Web"],
        gitUrl: "https://trilord243.github.io/Proyecto-Tailwind/",
        previewUrl: "https://trilord243.github.io/Proyecto-Tailwind/"
    },
    {
        id: 4,
        title: 'Fox lazy image',
        description: 'A random loader images of foxes using nextjs',
        image: '/projects/lazy-image.png',
        tag: ["All", "Web"],
        gitUrl: "https://github.com/trilord243/next_typescript-",
        previewUrl: "https://master--luxury-lollipop-01e0b2.netlify.app/"
    },
    {
        id: 5,
        title: 'Ecommerce with React',
        description: 'Ecommerce with React using localStorage with users validations with localStorage and load products with apis',
        image: '/projects/store-localStorage.png',
        tag: ["All", "Web", "Hardware"],
        gitUrl: "https://github.com/trilord243/fake-online-store",
        previewUrl: "https://reliable-puffpuff-a71625.netlify.app/"
    }, {
        id: 6,
        title: 'Arduino Javascript',
        description: 'Using arduino with javascript to control a led if the response is true or false,activating a actuator motor, and a water sensor ',
        image: '/projects/arduino.png',
        tag: ["All", "Hardware"],
        gitUrl: "https://github.com/trilord243/client-johnny-five",
        previewUrl: "https://youtu.be/IesWCkUNvmc"
    },
    {
        id: 7,
        title: 'Pizzeria',
        description: 'React template for a pizzeria',
        image: '/projects/pizzeria.png',
        tag: ["All", "Web"],
        gitUrl: "https://github.com/trilord243/pizzeria-onepage",
        previewUrl: "https://pizzeria-onepage.vercel.app/"
    },

]

export const ProjectSection = () => {
    const ref = useRef(null)
    const isInview = useInView(ref, { once: true })
    const [tag, setTag] = React.useState('All')
    const handleTagChange = (newTag) => {
        setTag(newTag)
    }
    const filteredProjects = projectData.filter(project => project.tag.includes(tag))
    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    }
    return (
        <section id='projects' >
            <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12' >My Projects  </h2>
            <div className='text-white flex flex-wrap justify-center items-center gap-2 py-6'>
                <ProjectTag onClick={handleTagChange} name={'All'} isSelected={tag === "All"} />
                <ProjectTag onClick={handleTagChange} name={'Web'} isSelected={tag === "Web"} />
                <ProjectTag onClick={handleTagChange} name={'Mobile'} isSelected={tag === "Mobile"} />
                <ProjectTag onClick={handleTagChange} name={'Hardware'} isSelected={tag === "Hardware"} />
            </div>

            <ul ref={ref} className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-12'> {filteredProjects.map((project, index) =>
                <motion.li key={index} variants={cardVariants} initial="initial" animate={isInview ? 'animate' : "initial"} transition={{ duration: 0.5, delay: index * 0.4 }}   >
                    <ProjectCards
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imgUrl={project.image}
                        gitUrl={project.gitUrl}
                        previewUrl={project.previewUrl} />
                </motion.li>)}
            </ul>
        </section>
    )
}
