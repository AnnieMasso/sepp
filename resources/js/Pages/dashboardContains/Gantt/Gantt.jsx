import React, {Component} from 'react';
import Gantt from './GanttComposant';
import { FaAlignLeft, FaAngleLeft, FaArrowLeft, FaCaretLeft, FaChevronLeft, FaHandPointLeft, FaQuoteLeft } from 'react-icons/fa';
// import { DefaultScales } from '@dhtmlx/trial-react-gantt';

// import { text } from 'stream/consumers';
// import { type } from 'os';


const donnees = {
  data: [
    {
      id:1,
      text: 'Tache 0',
      start_date: '2022-12-21',
      duration: '11',
      progress: 0.6,
      open: true,
      users: ["john", 'mike', 'anne'],
      priority: '2'
    },
    {
      id: 2,
      text: "Task 1",
      start_date: "2022-12-21",
      duration: "5",
      parent: "1",
      progress: 1,
      open: true,
      users: ["John", "Mike"],
      priority: "1"
    },
    {
      id: 3,
      text: "Task 2",
      start_date: "2022-12-21",
      duration: "7",
      parent: "1",
      progress: 0.5,
      open: true,
      users: ["Anna"],
      priority: "1"
    },
    {
      id: 4,
      text: "Task 3",
      start_date: "2022-12-21",
      duration: "6",
      parent: "1",
      progress: 0.8,
      open: true,
      users: ["Mike", "Anna"],
      priority: "2"
    },
    {
      id: 5,
      text: "Task 4",
      start_date: "2022-12-21",
      duration: "5",
      parent: "1",
      progress: 0.2,
      open: true,
      users: ["John"],
      priority: "3"
    },
    {
      id: 6,
      text: "Task 5",
      start_date: "2022-12-21",
      duration: "7",
      parent: "1",
      progress: 0,
      open: true,
      users: ["John"],
      priority: "2"
    },
    {
      id: 7,
      text: "Task 2.1",
      start_date: "2022-12-21",
      duration: "2",
      parent: "3",
      progress: 0.5,
      open: true,
      users: ["Mike", "Anna"],
      priority: "2"
    },
    {
      id: 8,
      text: "Task 2.2",
      start_date: "2022-12-21",
      duration: "3",
      parent: "3",
      progress: 0.8,
      open: true,
      users: ["Anna"],
      priority: "3"
    },
    {
      id: 9,
      text: "Task 2.3",
      start_date: "2022-12-21",
      duration: "4",
      parent: "3",
      progress: 0.2,
      open: true,
      users: ["Mike", "Anna"],
      priority: "1"
    },
    {
      id: 10,
      text: "Task 2.4",
      start_date: "2022-12-21",
      duration: "4",
      parent: "3",
      progress: 0,
      open: true,
      users: ["John", "Mike"],
      priority: "1"
    },
    {
      id: 11,
      text: "Task 4.1",
      start_date: "2022-12-21",
      duration: "4",
      parent: "5",
      progress: 0.5,
      open: true,
      users: ["John", "Anna"],
      priority: "3"
    },
    {
      id: 12,
      text: "Task 4.2",
      start_date: "2022-12-21",
      duration: "4",
      parent: "5",
      progress: 0.1,
      open: true,
      users: ["John"],
      priority: "3"
    },
    {
      id: 13,
      text: "Task 4.3",
      start_date: "2022-12-21",
      duration: "5",
      parent: "5",
      progress: 0,
      open: true,
      users: ["Anna"],
      priority: "3"
    }
  ],
  links: [
    {id: 1, source: 2, target: 4, type: "1"},
    {id: 1, source: 1, target: 5, type: "1"}
  ]
};

class App extends Component{
  render(){
    return(
      <div>
        <div className=''>
          <div className='p-4 bg-white shadow sticky left-0 right-0 top-0 z-10 flex'>
            <a className='flex text-gray-600 mt-2 mr-20 text-xs ' href={route('dashboard')}> <FaArrowLeft className='mt-0.5' /> Retour</a>
            <span className='bg-green-500 text-sm w-fit text-white mx-2 rounded py-1 px-3'>Nom du projet Nom du projet</span>
            <span className='bg-green-400 text-sm text-white mx-2 rounded py-1 px-3'>Progression</span>
            <span className='bg-green-500 text-sm text-white mx-2 py-1 px-3 rounded'>Date de début</span>
            <span className='bg-red-500 text-sm text-white mx-2 py-1 px-3 rounded'>3 jours de retard</span>
          </div>
          <Gantt taches={donnees} />
        </div>
      </div>
    );
  }
}

export default App;