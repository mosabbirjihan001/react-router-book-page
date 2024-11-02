import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const BookDetails = () => {

    const {bookId} = useParams()
    // console.log(bookId);
    const id = parseInt(bookId)

    const data = useLoaderData();
    // console.log(data);


    const book = data.find(book => book.bookId === id)
    console.log( book );

    const {bookId : currentBookId , image , bookName , review , author , totalPages , publisher , yearOfPublishing , rating} = book ;

    const handleMarkAsRead = () => {

    }

    return (

        <div className="hero bg-base-200 ">
  <div className="hero-content flex-col lg:flex-row ">
    <img
    src={image}
      className=" rounded-lg shadow-2xl w-40 mb-5" />
    <div>
      <h1 className="text-3xl font-bold">{bookName}</h1>
      <h2 className='text-xl mt-2'>by : {author}</h2>
      <p className="py-6">
        <span className='text-2xl font-medium'>Review :</span> <br />{review}
      </p>
      <div className="divider"></div>
      <div className='mb-5'>
      <p>Total Pages : {totalPages}</p>
      <p>Publisher : {publisher} </p>
      <p>Year of publishing : {yearOfPublishing}</p>
      <p>Rating : {rating}</p>
      </div>
      <button onClick={handleMarkAsRead} className="btn btn-outline mr-4 mb-5">Mark as Read</button>
      <button className="btn btn-accent mb-5">Add to Wish List</button>
    </div>
  </div>
</div>
    );
};

export default BookDetails;