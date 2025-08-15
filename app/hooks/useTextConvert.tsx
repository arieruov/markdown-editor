import { create } from 'zustand';

interface IuseTextConvert {
    text: string;
    setText: (newText: string) => void;
}

const useTextConvert = create<IuseTextConvert>((set) => ({
    text: '',
    setText: (newText: string) => set({ text: newText }),
}));

export default useTextConvert;
