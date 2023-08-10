/* eslint-disable react/prop-types */
import './InputBox.stories'

const InputBox = (props) => {
    const { size = 'large', ...rest } = props

    return (
        <div>
            <input type="text" className={`input ${size}`} {...rest} />

        </div>
    )
}

export default InputBox
