import React, { useEffect, useState } from 'react';
import { fetchServices } from '../api/fetchServices';

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchServices();
      setServices(data);
    };
    getData();
  }, []);

  return (
    <section>
      <h2>Наші послуги</h2>
      <div className="services">
        {services.map((service) => (
          <div key={service.id} className="service">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            {service.image && (
              <img
  src={`https://directus-4profi.onrender.com/assets/${typeof service.image === 'object' ? service.image.id : service.image}`}
  alt={service.title}
  width={300}
/>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;