import { create } from 'zustand';

interface IuseTabs {
    tab: string;
    changeTab: (newTab: string) => void;
}

const useTabs = create<IuseTabs>((set) => ({
    tab: 'editor',
    changeTab: (newTab: string) => set({ tab: newTab }),
}));

export default useTabs;
