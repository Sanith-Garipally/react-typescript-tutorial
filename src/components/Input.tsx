type InputProps = {
    value: string,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = ({ value, handleChange }: InputProps) => {
    return <input onChange={handleChange} value={value} type='text'/>
}