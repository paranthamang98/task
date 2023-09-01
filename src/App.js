import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from 'react-bootstrap';
import BeerTable from './components/BeerTable';
import Pagination from './components/Pagination';
import { fetchBeers } from './actions';

function App() {
  const dispatch = useDispatch();
  const beers = useSelector((state) => state.beers);

  const [currentPage, setCurrentPage] = useState(2);
  const [totalPages, setTotalPages] = useState(20);
 

  useEffect(() => {
    dispatch(fetchBeers(currentPage, 10,))
  }, [dispatch, currentPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };


  return (
    <Container>
      <h1>Beer List</h1>
    
      <BeerTable beers={beers} />
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </Container>
  );
}

export default App;
