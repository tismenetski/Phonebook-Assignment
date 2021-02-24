import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

const Contact = (props) => {
  const { match } = props;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(`api/contacts/${match.params.id}`);
      setData(res.data);
      setLoading(false);
    };
    getData();
  }, []);

  const { name, phone, website, email, username, address, company } = data;

  return (
    <div>
      {loading === false && (
        <div className="container">
          <div>
            <button
              onClick={() => props.history.goBack()}
              className="btn btn-info btn-lg"
            >
              Back
            </button>
          </div>
          <h1>Contact Details</h1>
          <label>
            Name: <span>{name}</span>
          </label>
          <br />
          <label>
            Username: <span>{username}</span>
          </label>
          <br />
          <label>
            Email: <span>{email}</span>
          </label>
          <br />
          <label>
            Phone: <span>{phone}</span>
          </label>
          <br />
          <label>
            Website: <span>{website}</span>
          </label>
          <br />
          <h2>Address</h2>
          <label>
            City: <span>{address.city}</span>
          </label>
          <br />
          <label>
            Street: <span>{address.street}</span>
          </label>
          <br />
          <label>
            Suite: <span>{address.suite}</span>
          </label>
          <br />
          <label>
            Zipcode: <span>{address.zipcode}</span>
          </label>
          <br />
          <label>
            Latitude: <span>{address.geo.lat}</span>
          </label>
          <br />
          <label>
            Longitude: <span>{address.geo.lng}</span>
          </label>
          <br />
          <h2>Company</h2>
          <label>
            Catch Phrase: <span>{company.catchPhrase}</span>
          </label>
          <br />
          <label>
            Bs: <span>{company.bs}</span>
          </label>
          <br />
        </div>
      )}
    </div>
  );
};

export default withRouter(Contact);
