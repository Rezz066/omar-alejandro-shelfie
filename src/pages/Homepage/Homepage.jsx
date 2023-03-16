import './Homepage.scss'
import Header from '../../components/Header/Header'
import BookList from '../../components/BookList/BookList'
import './Homepage.scss'

const Homepage = () => {
    return (
        <div className="homepage">
            <Header/>
            <h1>My Book Shelf</h1>
            <BookList/>
        </div>
    );
};

export default Homepage;