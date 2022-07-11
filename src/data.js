import { IoCodeWorking, IoLogoGithub, IoLogoLinkedin, IoLogoWhatsapp } from "react-icons/io5";

import HackerRankLogo from '/Users/vishnurahul/Desktop/CodeMics/Portfolio-Website/my-portfolio/src/images/HackerRank_logo.png';
import LeetCodeLogo from '/Users/vishnurahul/Desktop/CodeMics/Portfolio-Website/my-portfolio/src/images/LeetCode_logo_black.png';
import personalPortfolioImg from '/Users/vishnurahul/Desktop/CodeMics/Portfolio-Website/my-portfolio/src/images/PersonPortfolio.png'
import mapReduceImg from '/Users/vishnurahul/Desktop/CodeMics/Portfolio-Website/my-portfolio/src/images/MapReduce.png'
import phishingDetectionImg from '/Users/vishnurahul/Desktop/CodeMics/Portfolio-Website/my-portfolio/src/images/phishing-detection.jpeg'
import spiralMatrixImg from '/Users/vishnurahul/Desktop/CodeMics/Portfolio-Website/my-portfolio/src/images/spiralMatrix.jpeg'
import wordSearchImg from '/Users/vishnurahul/Desktop/CodeMics/Portfolio-Website/my-portfolio/src/images/wordSearcg.png'
import kMeansImg from '/Users/vishnurahul/Desktop/CodeMics/Portfolio-Website/my-portfolio/src/images/kmeans.png'


export const Experience = [ // Experience Section Data
    {
        id: 1,  // Unique ID
        date: '2021 - Present', // Date
        iconSrc: <IoCodeWorking/>, // Icon Source
        company: 'University of Illinois at Chicago', // Company
        title: 'Graduate Student - MS in Management Information Systems', // Title
        location: 'Chicago, IL', // Location
        grade: 'Grade: 4.0 GPA', // Grade
        description: ``
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
        description: ''
    },
];

export const Projects = [
    {
        id: 1,
        name: 'Mimic MapReduce Using Python',
        imageSrc: mapReduceImg,
        techs: "All tech names",
        github: 'https://github.com/vishnurahuln/Mimic-MapReduce-Using-Python',
    },
    {
        id: 2,
        name: 'Vishnu Portfolio',
        imageSrc: personalPortfolioImg,
        techs: "ReactJS, TailWindCSS, NextJS, Spline3D",
        github: 'https://github.com/vishnurahuln/my-portfolio-react',
    },
    {
        id: 3,
        name: 'Phishing Attacks Detecting Using Random Forest, Naive Bayes, and Decision Tree',
        imageSrc: phishingDetectionImg,
        techs: "All tech names",
        github: 'https://github.com/vishnurahuln/RandomForest_DecisionTree_NaiveBayes',
    },
    {
      id: 4,
      name: 'Spiral-Matrix',
      imageSrc: spiralMatrixImg,
      techs: "Python, Data Structures, Algorithms",
      github: 'https://github.com/vishnurahuln/Spiral-Matrix',
  },
  {
    id: 5,
    name: 'Word-Search',
    imageSrc: wordSearchImg,
    techs: "Python, Data Structures, Algorithms",
    github: 'https://github.com/vishnurahuln/Word-Search',
},
  {
    id: 6,
    name: 'K Means Clustering - Prospect',
    imageSrc: kMeansImg,
    techs: "RStudio, dplyr, tidyr, ggplot2, RMarkdown, R",
    github: 'https://github.com/vishnurahuln/K-Means-Clustering',
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