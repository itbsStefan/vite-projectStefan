/* eslint-disable react/prop-types */

import { useState } from 'react';

const ExpandableText = ({ children, maxChars = 100 }) => {
    const [isExpanded, setExpanded] = useState(false);

    const handleExpanding = () => {
        setExpanded(!isExpanded);
    };

    if (children.length <= maxChars) return <p>{children}</p>;

    return (
        <div>
            {isExpanded ? <p>{children}</p> : <p>{children.substring(0, maxChars)} ...</p>}
            <button onClick={handleExpanding}>{isExpanded ? 'Show Less' : 'Show More'}</button>
        </div>
    );
};

export default ExpandableText;
