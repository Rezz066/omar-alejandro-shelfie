import './Homepage.scss'
import Header from '../../components/Header/Header'
import BookList from '../../components/BookList/BookList'
import './Homepage.scss'

const Homepage = () => {
    return (
        <div className="homepage">
            {/* <Header/> */}
            <BookList/>
        </div>
    );
};

export default Homepage;