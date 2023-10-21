import { create } from 'zustand'

const useStore = create((set) => ({

    //user
    user: null,
    setUser: (newUser) => set({ user:newUser }),

    //projects
    projects: [],
    setProjects: (newProjects) => set({ projects:newProjects }),

    //skills
    skills: [],
    setSkills: (newSkills) => set({ skills:newSkills }),
}))

export default useStore