import React from 'react';

const NameSections = ({name}) => {
    return (
        <div className={'mt-4 mb-3'}>
            <h2 className={'name-sections'}>{name}</h2>
            <div className={'border-name'}></div>
        </div>
    );
};

export default NameSections;