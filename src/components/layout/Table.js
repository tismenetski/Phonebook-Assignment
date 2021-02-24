import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import '../../App.css';
import { Link } from 'react-router-dom';
const Table = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get('api/contacts');
      setData(res.data);
    };
    getData();
  }, []);

  const contacts = data.map((contact) => (
    <tr key={contact._id}>
      <td>{contact.name}</td>
      <td>{contact.phone}</td>
      <td>{contact.address.city}</td>
      <td>{contact.address.street}</td>
      <td>{contact.address.zipcode}</td>
      <td>{contact.address.suite}</td>
      <Link to={`/${contact._id}`} className="btn btn-info btn-sm">
        Full contact details
      </Link>
    </tr>
  ));

  return (
    <Fragment>
      <div>
        <table>
          <thead>
            <tr>
              <th rowSpan="2">Name</th>
              <th rowSpan="2">Phone</th>
              <th colSpan="4">Address</th>
              <th rowSpan="2">Full Details</th>
            </tr>
            <tr>
              <th>City</th>
              <th>Street</th>
              <th>Zipcode</th>
              <th>Suite</th>
            </tr>
          </thead>
          <tbody>{contacts}</tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default Table;
