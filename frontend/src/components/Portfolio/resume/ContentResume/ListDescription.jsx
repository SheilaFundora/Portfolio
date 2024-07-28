import React from 'react';

const ListDescription = ({ dataDescription}) => {
  const dataLink = dataDescription.split('\n')

  return (
        <div>
            <ul>
                {dataLink.map((item, index) => (
                    <li key={index} className="test-resume-style my-1">{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default ListDescription;
