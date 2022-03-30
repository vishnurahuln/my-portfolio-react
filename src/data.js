import { IoCodeWorking, IoLogoGithub, IoLogoLinkedin, IoLogoWhatsapp } from "react-icons/io5";

import HackerRankLogo from '/Users/vishnurahul/Desktop/CodeMics/Portfolio-Website/my-portfolio/src/images/HackerRank_logo.png';
import LeetCodeLogo from '/Users/vishnurahul/Desktop/CodeMics/Portfolio-Website/my-portfolio/src/images/LeetCode_logo_black.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export const Experience = [
    {
        id: 1,
        date: '2021 - Present',
        iconSrc: <IoCodeWorking/>,
        company: 'University of Illinois at Chicago',
        title: 'Graduate Student - MS in Management Information Systems',
        location: 'Chicago, IL',
        description: `Grade: 4.0 GPA
        Coursework: Advanced Database Management, Business Data Mining, Information System Strategy and Policy, Statistics for Management, Introduction to Marketing, Statistical Software for Business Applications, Analytics for Big Data, Enterprise Application Development, Enterprise Information Infrastructure Planning and Security, Introduction to Operations Management.`
    },
    {
        id: 1,
        date: '2020 - 2021',
        iconSrc: <IoCodeWorking/>,
        company: 'FICO - Fair Isaac Corporation',
        title: 'Solution Integration Consultant II',
        location: 'Bengaluru, India',
        description: ``
    },
    {
        id: 2,
        date: '2019 - 2020',
        iconSrc: <IoCodeWorking/>,
        company: 'FICO - Fair Isaac Corporation',
        title: 'Solution Integration Consultant I',
        location: 'Bengaluru, India',
        description: ``
    },
    {
        id: 3,
        date: '2018 - 2019',
        iconSrc: <IoCodeWorking/>,
        company: 'Betsol',
        title: 'Software Engineer',
        location: 'Bengaluru, India',
        description: ``
    },
    {
        id: 4,
        date: '2016 - 2018',
        iconSrc: <IoCodeWorking/>,
        company: 'Betsol',
        title: 'Associate Software Engineer',
        location: 'Bengaluru, India',
        description: ``
    },
    {
        id: 5,
        date: '2012 - 2016',
        iconSrc: <IoCodeWorking/>,
        company: 'Bangalore Institute of Technology ',
        title: 'Undergraduate Student - Information Science and Engineering', 
        location: 'Bengaluru, India',
        description: 'Coursework: Database Management Systems, Data Structures & Algorithm, C/C++ programming, Software Architecture, Data Warehousing and Data Mining, etc.'
    },
];

export const Projects = [
    {
        id: 1,
        name: 'Vishnu Portfolio',
        imageSrc: '#', // Work on the images
        techs: "All tech names",
        github: '#',
    },
    {
        id: 2,
        name: 'Vishnu Portfolio',
        imageSrc: '#',
        techs: "All tech names",
        github: '#',
    },
    {
        id: 3,
        name: 'Vishnu Portfolio',
        imageSrc: '#',
        techs: "All tech names",
        github: '#',
    },
]

export const SocialMediaLinks = [
    {
      id: 1,
      iconSrc: <IoLogoGithub className="text-textBase text-3xl cursor-pointer" />,
      name: "GitHub",
      link: "http://github.com/vishnurahuln",
    },
    {
      id: 2,
      iconSrc: (
        <IoLogoLinkedin className="text-blue-800 text-3xl cursor-pointer" />
      ),
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/vishnurahul/",
    },
    {
      id: 3,
      iconSrc: (
        <IoLogoWhatsapp className="text-green-500 text-3xl cursor-pointer customLogo" />
      ),
      name: "Whatsapp",
      link: "https://chatwith.io/s/vishnu-rahul",
    },
    {
        id: 4,
        iconSrc: (
            <img
            src={HackerRankLogo}
            alt=""
            className="text-green-500 text-3xl cursor-pointer h-8 w-8 align-middle"
          />
        ),
        name: "HackerRank",
        link: "https://www.hackerrank.com/vishnurahuln",
      },
      {
        id: 5,
        iconSrc: (
            <img
            src={LeetCodeLogo}
            alt=""
            className="text-green-500 text-3xl cursor-pointer h-8 w-8 align-middle"
          />
        ),
        name: "LeetCode",
        link: "https://leetcode.com/vishnurahul/",
      },
  ];