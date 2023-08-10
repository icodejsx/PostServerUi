import InputBox from "./InputBox";

export default {
    title: 'Form/InputBox',
    component: InputBox,
}


export const Small = () => <InputBox size='small' placeholder='Small size' />

export const Medium = () => <InputBox size='medium' placeholder='Medium size' />

export const Large = () => <InputBox size='large' placeholder='Large size' />