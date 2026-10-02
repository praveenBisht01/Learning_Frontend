import React from 'react'
import "./App.css";
import Card from './components/Card'

const App = () => {
   
    const jobs = [
  {
    id: 1,
    company: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    posted: "5 days ago",
    title: "Senior UI/UX Designer",
    type: "Part-time",
    level: "Senior level",
    salary: "$120/hr",
    location: "San Francisco, CA",
    saved: false,
  },

  {
    id: 2,
    company: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    posted: "2 days ago",
    title: "Frontend Developer",
    type: "Full-time",
    level: "Mid level",
    salary: "$95/hr",
    location: "California, USA",
    saved: true,
  },

  {
    id: 3,
    company: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    posted: "1 week ago",
    title: "React Developer",
    type: "Remote",
    level: "Junior",
    salary: "$80/hr",
    location: "Seattle, USA",
    saved: false,
  },

  {
    id: 4,
    company: "Meta",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Meta-Logo.png",
    posted: "Today",
    title: "Product Designer",
    type: "Hybrid",
    level: "Senior",
    salary: "$140/hr",
    location: "New York, USA",
    saved: false,
  },

  {
    id: 5,
    company: "Netflix",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    posted: "3 days ago",
    title: "UI Designer",
    type: "Full-time",
    level: "Senior",
    salary: "$110/hr",
    location: "Los Angeles, USA",
    saved: true,
  },

  {
    id: 6,
    company: "Adobe",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_logo.svg",
    posted: "Yesterday",
    title: "UX Researcher",
    type: "Remote",
    level: "Mid level",
    salary: "$105/hr",
    location: "Remote",
    saved: false,
        },
{
  id: 7,
  company: "Apple",
  logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  posted: "4 days ago",
  title: "iOS Developer",
  type: "Full-time",
  level: "Senior level",
  salary: "$130/hr",
  location: "Cupertino, USA",
  saved: false,
},

{
  id: 8,
  company: "Spotify",
  logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
  posted: "Today",
  title: "Backend Engineer",
  type: "Remote",
  level: "Mid level",
  salary: "$100/hr",
  location: "Stockholm, Sweden",
  saved: true,
},

{
  id: 9,
  company: "Tesla",
  logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
  posted: "6 days ago",
  title: "Software Engineer",
  type: "Full-time",
  level: "Senior level",
  salary: "$125/hr",
  location: "Austin, USA",
  saved: false,
},

{
  id: 10,
  company: "Airbnb",
  logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg",
  posted: "1 day ago",
  title: "Frontend React Developer",
  type: "Hybrid",
  level: "Mid level",
  salary: "$98/hr",
  location: "San Francisco, USA",
  saved: true,
}
  
    ];
    
    console.log(jobs);


    

  return (
    <div className='job-container'>
          {jobs.map(function (elem) {
              return <Card company={elem.company} posted={elem.posted} salary={elem.salary} logo={elem.logo} title={elem.title} type={elem.type} location={elem.location} level={elem.level} />
          })}
    </div>
  )
}

export default App
