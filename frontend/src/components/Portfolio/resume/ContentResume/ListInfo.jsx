import React from 'react';

const ListInfo = ({info}) => {
    return (
        <div>
            <ul>
                {info.map((item, index) => (
                    <li key={index} className="test-resume-style my-1">{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default ListInfo;