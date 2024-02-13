import { useState } from 'react';

const UpdatingNestedObjects = () => {
    const [user, setUser] = useState({
        name: 'John',
        lastName: 'Doe',
        address: {
            city: 'San Francisco',
            zipCode: 94111,
        },
    });

    console.log(user);

    const handleCLick = () => {
        setUser({ ...user, address: { ...user.address, zipCode: 94112 } });
    };

    return (
        <div>
            <button onClick={handleCLick}>Click</button>
        </div>
    );
};

export default UpdatingNestedObjects;
