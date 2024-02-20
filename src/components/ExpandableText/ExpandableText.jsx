/* eslint-disable react/prop-types */

import { useState } from 'react';

const ExpandableText = ({ children2, maxChars = 100 }) => {
    const [isExpanded, setExpanded] = useState(false);

    const handleExpanding = () => {
        setExpanded(!isExpanded);
    };

    if (children2.length <= maxChars) return <p>{children2}</p>;

    return (
        <div>
            {isExpanded ? <p>{children2}</p> : <p>{children2.substring(0, maxChars)} ...</p>}
            <button onClick={handleExpanding}>{isExpanded ? 'Show Less' : 'Show More'}</button>
        </div>
    );
};

export default ExpandableText;
