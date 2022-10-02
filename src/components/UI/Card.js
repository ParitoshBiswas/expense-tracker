import './Card.css';

function Card(props){                          // wrapper component using "children" property
    const classes = 'card ' + props.className;  // blank space after 'card ' to align the components.

    return <div className={classes}>{props.children}</div>  // children is a reserved name.
}

export default Card;