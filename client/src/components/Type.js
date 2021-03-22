function Type(props) {
    return (
        <span onClick={props.showType}>{`${props.type} `}</span>
    );
}

export default Type;