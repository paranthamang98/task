import React, { useState } from 'react';
import { Table,Form } from 'react-bootstrap';

const BeerTable = ({ beers }) => {

   const [search , setSearch]=useState("")
  return (
  <>
  <Form className='my-3'>
  <Form.Group>
    
        <Form.Control
          type="text"
          onChange={(e) =>setSearch(e.target.value) }
          placeholder='search Name'
        />
      </Form.Group>
  </Form>

    <Table striped bordered hover>
      <thead>
        <tr>
          <th className='text-nowrap'>S.No</th>
          <th className='text-nowrap'>Name</th>
          <th className='text-nowrap'>Tagline</th>
          <th className='text-nowrap'>First Brewed</th>
          <th className='text-nowrap'>ph value</th>
          <th className='text-nowrap'>attenuation level</th>
          <th className='text-nowrap'>Description</th>
        </tr>
      </thead>
      <tbody>
        {beers.filter((item) =>{
            return search.toLowerCase === "" ? item : item.name.toLowerCase().includes(search)
        })
        .map((beer) => (
          <tr key={beer.id}>
            <td>{beer.id}</td>
            <td>{beer.name}</td>
            <td>{beer.tagline}</td>
            <td>{beer.first_brewed}</td>
            <td>{beer.ph}</td>
            <td>{beer.attenuation_level}</td>
            <td>{beer.description}</td>
          </tr>
        ))}
      </tbody>
    </Table>
    </>
  );
};

export default BeerTable;
