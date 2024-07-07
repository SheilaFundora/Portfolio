import React from 'react';

const ListDescription = ({info, dataDescription=[]}) => {
    return (
        <div>
            <ul>
                {dataDescription.map((item, index) => (
                    <li key={index} className="test-resume-style my-1">{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default ListDescription;
