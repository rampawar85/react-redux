import { connect } from 'react-redux';
import Home from '../Components/Home';
import { addCard, removeCard } from '../Services/Actions/action';

const mapStateToProps = state => ({
    cardData: state
})

const mapDispatchToProps = dispatch => ({
    addCardHandler: data => dispatch(addCard(data)),
    removeCardHandler: data => dispatch(removeCard(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
// export default Home;