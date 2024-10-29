import React from 'react';

const DangerHtml = ({ data }) => {
    return (
        <div dangerouslySetInnerHTML={{ __html: data }}>

        </div>
    );
};

export default DangerHtml;