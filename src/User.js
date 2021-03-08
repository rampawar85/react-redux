
const User = (props) => {
    return (
        <>
            <h1>Hi my name is {props.data.name}</h1>
            <h1>Hi my age is {props.data.age}</h1>
        </>
    );
}

export default User;