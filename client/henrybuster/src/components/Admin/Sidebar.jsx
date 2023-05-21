import React from 'react';
import './Sidebar.css';


function Sidebar() {
  return (
    <div className='sidebar p-2'>
      <div className='m-2'>
        <i className='bi bi-bootstrap-fill me-3 fs-4'></i>
        <span className='brand-name fs-4'>Admin</span>
      </div>
      <hr className='text-dark' />
      <div className='list-group list-group-flush'>
        <span className='list-group-item py-2 text-start'>
          <i className='bi bi-speedometer2 fs-5 me-3'></i>
          <span>Dashboard</span>
        </span>
        <div className='list-group-item py-2 text-start'>
          <i className='bi bi-house fs-5 me-3'></i>
          <span>Products</span>
          <div>
            <span className='sub-category sub-category-block'>All products</span>
            <span className='sub-category sub-category-block'>Create new product</span>
          </div>
        </div>
        <div className='list-group-item py-2 text-start'>
          <i className='bi bi-table fs-5 me-3'></i>
          <span>Categories</span>
          <div>
            <span className='sub-category'>Edit categories</span>
          </div>
        </div>
        <div className='list-group-item py-2 text-start'>
          <i className='bi bi-clipboard-data fs-5 me-3'></i>
          <span>Users management</span>
          <div>
            <span className='sub-category'>View orders</span>
          </div>
        </div>
        <span className='list-group-item py-2 text-start'>
          <i className='bi bi-power fs-5 me-3'></i>
          <span>Logout</span>
        </span>
      </div>
    </div>
  );
}

export default Sidebar;
