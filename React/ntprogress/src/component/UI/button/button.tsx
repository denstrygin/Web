import './button.css';

function Button({btnClass, children, btnOnClick}: any) {
    return (
        <button className={ btnClass } onClick = { btnOnClick }>{ children }</button>
    )
}

export default Button;