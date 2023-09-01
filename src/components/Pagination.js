import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange,perPage }) => {
    let page=[];
    for (let index = 1; index < totalPages; index++) {
         page.push(index);
        
    }
  return (
    <nav className=''>
      <ul className="pagination justify-content-end">
        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
          <button className="page-link" onClick={() => onPageChange(currentPage - 1)}>
            {currentPage === 1 ? '-' : 'Previous'}
          </button>
        </li>
        {page.slice(currentPage -1 , currentPage + 4).map((pageNumber) => (
          <li key={pageNumber} className={`page-item ${currentPage  === pageNumber ? 'active' : ''}`}>
            <button className="page-link" onClick={() => onPageChange(pageNumber)}>
              {pageNumber }
            </button>
          </li>
        ))}
        <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
          <button className="page-link" onClick={() => onPageChange(currentPage + 1)}>
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
