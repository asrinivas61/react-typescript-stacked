import { FC, ReactElement } from 'react';
import './App.css';
import Person from './Components/Person';
import moment from 'moment';

interface IPerson {
  name: string;
  age: string;
  dateOfBirth: string;
}

const persons: IPerson[] = [
  { 
    name: 'Pascal',
    age: '35',
    dateOfBirth: '19771001'
  },
  { 
    name: 'Alex',
    age: '37',
    dateOfBirth: '19771002'
  },
  { 
    name: 'Matthew',
    age: '37',
    dateOfBirth: '19771003'
  }
];

const App: FC = (): ReactElement => (
  <div className="columns">
    <div className="column">
      {
        persons.map((person: IPerson, key: number) => (
          <Person
            key={key}
            name={person.name}
            age={person.age}
            dateOfBirth={moment(person.dateOfBirth, 'YYYYMMDD').format('DD/MM/yyyy')}
          />
        ))
      }
    </div>
  </div>
)

export default App;
