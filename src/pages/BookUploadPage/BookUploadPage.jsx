import './BookUploadPage.scss'
import dogImage from '../../assets/dogRead.jpeg'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const BookUploadPage = () => {

    const navigateToHome = useNavigate()

    function handleSubmit(event) {
        event.preventDefault();
        

        const title = event.target.title.value;
        const author = event.target.author.value;
        const rating = event.target.rating.value;
        const poster = "http:/localhost:8080/images/dog.jpg"
        const summary = event.target.summary.value;
        const review = event.target.review.value;
        console.log(title,author,rating,poster,summary,review);
       
        const newBook = {
            title,
            author,
            rating,
            poster,
            summary,
            review
        }

        axios.post('http://localhost:8080/books',newBook)
        .then((res)=>{
            navigateToHome('/');
        })
        .catch((error)=>{
            console.log("error making a new book",error)
        })
        event.target.reset()
    }

    // //EVENT HANDLER FOR PUBLISH BUTTON
    // function handlePublishClicked(event){
    //     event.preventDefault();
    //     const title = event.target.videoTitle.value;
    //     const description = event.target.videoDescription.value;
    //     const newVideo = {
    //         title:title,
    //         description:description
    //     }
    //     postVideo(newVideo);

    //     setButtonClicked(true)
    // }
    // //SETS BUTTON CLICK TO FALSE ON PAGE LOAD
    // useEffect(() =>{
    //     setButtonClicked(false)
    // },[])

    // //CHECKS TO SEE IF BUTTONS CLICKED TO NAVIGATE TO HOME 
    // useEffect(()=>{
    //     if (buttonclicked){
    //         setTimeout(()=>{
    //             navigateToHome("/")
    //         },1000)
    //     }
    // },[buttonclicked])


    // //CONDITIONAL RENDERING A PAGE TO SHOW THAT VIDEO WAS SUCCESSFULLY UPDATED
    // if(buttonclicked){
    //     return(
    //         <WaitingPage
    //             type="PUBLISH_SUCCESS"
    //         />
    //     )

        
    
    return (
        <section className='book-upload-section'>
            <h1 className="upload__title">Upload Book</h1>
            <form  className="book__form"onSubmit={handleSubmit}>
                <div className="top-container">   
                    <div className="image-container">
                        <img src={dogImage} alt="" className='upload-image'/>
                    </div>
                    <div class="detail-container">
                        <div className="input-container">
                            <label htmlFor="title" className="label-title">Title</label>
                            <input type="text" name ="title" className="input input--text"/>
                        </div>
                        <div className="input-container">
                            <label htmlFor="author" className="label-title">Author</label>
                            <input type="text" name ="author" className="input input--text"/>
                        </div>
                        <div className="input-container">
                            <label htmlFor="rating" className="label-title">Rating</label>
                            <input type="text" name ="rating" className="input input--text"/>
                        </div>
                    </div>
                </div>
                <div className="input-container">
                    <label htmlFor="summary" className="label-title">Synopsis</label>
                    <textarea name="summary" className="input input--textarea"></textarea>
                    
                </div>
                <div className="input-container">
                    <label htmlFor="review" className="label-title">Personal Thoughts</label>
                    <textarea name="review" className="input input--textarea"></textarea>
                </div>
                <button className="upload-button">Upload</button>
                
                
            </form>
        </section>
    );
};

export default BookUploadPage;