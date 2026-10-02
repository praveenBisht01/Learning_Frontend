import React from 'react'
import Navbar from './components/navbar'
import Card from './components/Card'

const App = () => {

  const arr = [{
    id: 1,
    company: "Samsung",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
    posted: "Today",
    title: "Android Developer",
    type: "Full-time",
    level: "Senior level",
    salary: "$115/hr",
    location: "Seoul, South Korea",
    saved: false,
  },

  {
    id: 2,
    company: "IBM",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    posted: "1 day ago",
    title: "Cloud Engineer",
    type: "Hybrid",
    level: "Mid level",
    salary: "$95/hr",
    location: "New York, USA",
    saved: true,
  },

  {
    id: 3,
    company: "Intel",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Intel-logo.svg",
    posted: "3 days ago",
    title: "Software Engineer",
    type: "Full-time",
    level: "Junior",
    salary: "$85/hr",
    location: "California, USA",
    saved: false,
  },

  {
    id: 4,
    company: "Cisco",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg",
    posted: "2 days ago",
    title: "Network Engineer",
    type: "Full-time",
    level: "Mid level",
    salary: "$88/hr",
    location: "San Jose, USA",
    saved: false,
  },

  {
    id: 5,
    company: "Uber",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png",
    posted: "Yesterday",
    title: "Backend Developer",
    type: "Remote",
    level: "Senior level",
    salary: "$120/hr",
    location: "Remote",
    saved: true,
  },

  {
    id: 6,
    company: "PayPal",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg",
    posted: "5 days ago",
    title: "React Developer",
    type: "Hybrid",
    level: "Mid level",
    salary: "$92/hr",
    location: "California, USA",
    saved: false,
  },

  {
    id: 7,
    company: "Salesforce",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg",
    posted: "Today",
    title: "UI/UX Designer",
    type: "Full-time",
    level: "Senior level",
    salary: "$108/hr",
    location: "San Francisco, USA",
    saved: true,
  },

  {
    id: 8,
    company: "Adobe",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_logo.svg",
    posted: "4 days ago",
    title: "Graphic Designer",
    type: "Remote",
    level: "Mid level",
    salary: "$90/hr",
    location: "Remote",
    saved: false,
  },

  {
    id:9,
    company: "GitHub",
    logo: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    posted: "Today",
    title: "DevOps Engineer",
    type: "Remote",
    level: "Senior level",
    salary: "$125/hr",
    location: "Remote",
    saved: true,
  },

  {
    id: 10,
    company: "Atlassian",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Atlassian-horizontal-blue-rgb.svg",
    posted: "2 days ago",
    title: "Frontend Engineer",
    type: "Hybrid",
    level: "Mid level",
    salary: "$102/hr",
    location: "Sydney, Australia",
    saved: false,
  }
  ]


  return (
    <>
      <Navbar />
      <div className="job-container">
        {arr.map((elem) => (
          <Card key={elem.id} company={elem.company} logo={elem.logo} posted={elem.posted} title={elem.title} type={elem.type} level={elem.level} salary={elem.salary} location={elem.location}  />
        ))}
      </div>
    </>
    
  )
}

export default App
