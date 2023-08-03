import './Button.css';

const Button = (props) => {
    // eslint-disable-next-line react/prop-types
    const { variant = 'primary', children, ...rest } = props
    return (
        <div>
            <button className={`button ${variant}`} {...rest}>
                {children}
            </button>
        </div>
    );
}

export default Button;
