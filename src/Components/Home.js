

const Home = (props) => {
    console.warn('home', props);

    return (
        <>
            <button onClick={() => props.addCardHandler({ name: 'Ram', Phone: '7038235222' })}>Add</button> <br /><br />
            <button onClick={() => props.removeCardHandler()}>Remove</button>
        </>
    );
}

export default Home;