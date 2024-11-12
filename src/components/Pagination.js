import React from 'react';
import './Pagination.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Pagination({ activePage, setActivePage, hasMoreUsers, totalPages }) {
  const handleBackwards = () => {
    if (activePage > 1) {
      setActivePage(activePage - 1);
    }
  };

  const handleForward = () => {
    setActivePage(activePage + 1);
  };


  const handlePageClick = (pageNumber) => {
    setActivePage(pageNumber);
  };


  return (
    <div className='pagination'>
      <button 
        className='backButton' 
        onClick={handleBackwards} 
        disabled={activePage === 1}
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      
      {[...Array(totalPages)].map((_, index) => {
        const pageNumber = index + 1;
        return (
          <button 
            key={pageNumber} 
            className={pageNumber === activePage ? 'pageButtonActive' : 'pageButton'}
            onClick={() => handlePageClick(pageNumber)}
          >
            {pageNumber}
          </button>
        );
      })}
       
        <button 
          className='forwardButton' 
          onClick={handleForward}
          disabled = {!hasMoreUsers}
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      
    </div>
  );
}

export default Pagination;
