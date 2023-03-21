import React from 'react'

export default function Footer() {
  return (
    <>
    <div className='container-fluid mt-5 ' >
      <div className="row bg-black py-5">
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <div className="footer text-center ">
            <h1>Noxe</h1>
            <p className='text-muted' >websites that offer movie and TV show details typically provide a comprehensive database of titles, with information such as the title, genre, cast and crew, plot summary, ratings, and reviews. These websites may also include additional features such as trailers, clips, and images, as well as user-generated content such as ratings and reviews.</p>
          </div>

        </div>
        <div className="col-md-6 d-flex justify-content-center">
          <div className="footer">
            <h3>Links Noxe</h3>
            <ul>
              <li>Home</li>
              <li>Movies</li>
              <li>TV Show</li>
              <li>About</li>
              <li>Contacts</li>
            </ul>
          </div>


        </div>


 
      </div>
 
    </div>
    <div className="copyright d-flex justify-content-center bg-black">
          <span  >copyright 2023 Noxe</span>
        </div>
    </>
  )
}
