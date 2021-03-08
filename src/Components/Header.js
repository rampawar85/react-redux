const Header = (props) => {
    console.warn('home', props.cardData.cardItems);

    return (
        <>
            <h1>{props.cardData.cardItems.length}</h1>
        </>
    );
}

export default Header;