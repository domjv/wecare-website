import React from 'react';

interface AddressSectionProps {
  streetAddress: string;
  suburb: string;
  state: string;
  postcode: string;
}

const AddressSection: React.FC<AddressSectionProps> = ({
  streetAddress = 'Street name',
  suburb = 'Suburb',
  state = 'QLD',
  postcode = '4000',
}) => {
  return (
    <div className="col-lg-4">
      <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
        <i className="bi bi-geo-alt flex-shrink-0"></i>
        <div>
          <h3>Address</h3>
          <p>
            {streetAddress}, {suburb} <br />
            {state} {postcode}
          </p>
        </div>
      </div>

      <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
        <i className="bi bi-telephone flex-shrink-0"></i>
        <div>
          <h3>Call Us</h3>
          <p>
            (QLD) 07 2802 4100
            <br />
            (SA): 08 7094 3113
          </p>
        </div>
      </div>

      <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="500">
        <i className="bi bi-envelope flex-shrink-0"></i>
        <div>
          <h3>Email Us</h3>
          <p>
            <a href="mailto:info@wecaresupport.net">info@wecaresupport.net</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AddressSection;
