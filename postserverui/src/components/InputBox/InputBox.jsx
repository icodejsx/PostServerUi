/* eslint-disable react/prop-types */
import './InputBox.stories'

const InputBox = (props) => {
    const { size = 'large', children, ...rest } = props

    return (
        <div>
            <input type="text" className={`input ${size}`} {...rest} >
                {children}
            </input>
        </div>
    )
}

export default InputBox
