import React from 'react'
import { ProjectCards } from './ProjectCards'
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
        tag: ["All", "Web"],
        gitUrl: "https://github.com/trilord243/fake-online-store",
        previewUrl: "https://reliable-puffpuff-a71625.netlify.app/"
    },

]

export const ProjectSection = () => {
    return (
        <>
            <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12' >My Projects  </h2>
            <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
                <button className='rounden-full border-2 border-purple-500 px-6 py-3 text-xl cursor-pointer'>All</button>
                <button className='rounden-full border-2 border-slate-600 hover:border-white px-6 py-3 text-xl cursor-pointer' >Web</button>
            </div>
            <div className='grid md:grid-cols-3 gap-8 md:gap-12' >  {projectData.map(project => <ProjectCards key={project.id} title={project.title} description={project.description} imgUrl={project.image} gitUrl={project.gitUrl} previewUrl={project.previewUrl} />)}  </div>
        </>
    )
}
