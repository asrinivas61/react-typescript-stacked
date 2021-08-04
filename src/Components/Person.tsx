import { ReactElement } from 'react';

interface IPersonProps {
    name: string;
    age: string;
    dateOfBirth: string;
}

const Person = ({name, age, dateOfBirth}: IPersonProps): ReactElement => {

    return (
        <div className="person">
            <h1>{name}</h1>
            <p>Your age: {age}</p>
            <p>Date of Birth: {dateOfBirth}</p>
        </div>
    );
};

export default Person;