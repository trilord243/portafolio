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
        tag: ["All", "Mobile"],
        gitUrl: "https://github.com/trilord243/next_typescript-",
        previewUrl: "https://master--luxury-lollipop-01e0b2.netlify.app/"
    },
    {
        id: 5,
        title: 'Ecommerce with React',
        description: 'Ecommerce with React using localStorage with users validations with localStorage and load products with apis',
        image: '/projects/store-localStorage.png',
        tag: ["All", "Web"],
        gitUrl: "https://github.com/trilord243/fake-online-store",
        previewUrl: "https://reliable-puffpuff-a71625.netlify.app/"
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
        <section >
            <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12' >My Projects  </h2>
            <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
                <ProjectTag onClick={handleTagChange} name={'All'} isSelected={tag === "All"} />
                <ProjectTag onClick={handleTagChange} name={'Web'} isSelected={tag === "Web"} />
                <ProjectTag onClick={handleTagChange} name={'Mobile'} isSelected={tag === "Mobile"} />
                {/* <button className='rounden-full border-2 border-purple-500 px-6 py-3 text-xl cursor-pointer'>All</button>
                <button className='rounden-full border-2 border-slate-600 hover:border-white px-6 py-3 text-xl cursor-pointer' >Web</button> */}
            </div>
            <ul ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12' >  {filteredProjects.map((project, index) =>
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
