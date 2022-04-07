import { IoCodeWorking, IoLogoGithub, IoLogoLinkedin, IoLogoWhatsapp } from "react-icons/io5";

import HackerRankLogo from '/Users/vishnurahul/Desktop/CodeMics/Portfolio-Website/my-portfolio/src/images/HackerRank_logo.png';
import LeetCodeLogo from '/Users/vishnurahul/Desktop/CodeMics/Portfolio-Website/my-portfolio/src/images/LeetCode_logo_black.png';
import personalPortfolioImg from '/Users/vishnurahul/Desktop/CodeMics/Portfolio-Website/my-portfolio/src/images/PersonPortfolio.png'
import mapReduceImg from '/Users/vishnurahul/Desktop/CodeMics/Portfolio-Website/my-portfolio/src/images/MapReduce.png'
import phishingDetectionImg from '/Users/vishnurahul/Desktop/CodeMics/Portfolio-Website/my-portfolio/src/images/phishing-detection.jpeg'
import spiralMatrixImg from '/Users/vishnurahul/Desktop/CodeMics/Portfolio-Website/my-portfolio/src/images/spiralMatrix.jpeg'
import wordSearchImg from '/Users/vishnurahul/Desktop/CodeMics/Portfolio-Website/my-portfolio/src/images/wordSearcg.png'
import kMeansImg from '/Users/vishnurahul/Desktop/CodeMics/Portfolio-Website/my-portfolio/src/images/kmeans.png'


export const Experience = [
    {
        id: 1,
        date: '2021 - Present',
        iconSrc: <IoCodeWorking/>,
        company: 'University of Illinois at Chicago',
        title: 'Graduate Student - MS in Management Information Systems',
        location: 'Chicago, IL',
        grade: 'Grade: 4.0 GPA',
        description: `Coursework: Advanced Database Management, Business Data Mining, Information System Strategy and Policy, Statistics for Management, Introduction to Marketing, Statistical Software for Business Applications, Analytics for Big Data, Enterprise Application Development, Enterprise Information Infrastructure Planning and Security, Introduction to Operations Management.`
    },
    {
        id: 1,
        date: '2020 - 2021',
        iconSrc: <IoCodeWorking/>,
        company: 'FICO - Fair Isaac Corporation',
        title: 'Solution Integration Consultant II',
        location: 'Bengaluru, India',
        description: `- Built credit application portals using FICO origination manager application & decision module for multiple international banks, Calculates the loan/credit card offers based on the profile, local bureau details and pre-configured parameters by the decision module and blaze advisor.
        - I was assigned the role of a Lead Solution Integration Consultant by leveraging my ability to grasp new concepts, responsibilities, and roles quickly. Delivered a custom Frontline Application POC with UI and workflow for Bank of New Zealand in four months, thereby generated FICO a revenue of six figures.
        - Refined each bank’s credit processing time by 45-70% using customized FICO origination manager decision modules.
        - Created object model based on bank requirements and integrated data analytics dashboards onto bank application using
        JavaScript’s Highcharts for branch managers and other admin users.
        - Integrated multiple client SOAP API into the FICO hosted application. This increased their operation efficiency by 30%.
        - Identified operational inefficiency during team meeting and proposed an automated slack meeting application. This saved 30
        minutes daily on standup meetings. It mailed the meeting overview to the scrum master.
        `
    },
    {
        id: 2,
        date: '2019 - 2020',
        iconSrc: <IoCodeWorking/>,
        company: 'FICO - Fair Isaac Corporation',
        title: 'Solution Integration Consultant I',
        location: 'Bengaluru, India',
        description: `- Built credit application portals using FICO origination manager application & decision module for multiple international banks, Calculates the loan/credit card offers based on the profile, local bureau details and pre-configured parameters by the decision module and blaze advisor.
        - Identified and restructured multiple code blocks to make them reusable, which reduced the application size by 5% and reduced
the new employee training duration by 25%.
- Developed timers to frequently execute ad-hoc tasks. It reduced daily opex work from 1 hour to 10 minutes.`
    },
    {
        id: 3,
        date: '2018 - 2019',
        iconSrc: <IoCodeWorking/>,
        company: 'Betsol',
        title: 'Software Engineer',
        location: 'Bengaluru, India',
        description: `
        - Engaged in the development of business processes and ETL solutions for eBay and Intuit to streamline their electronic workforce
        management. Improved operational efficiency of their virtual call center by >50%.
        - Automated deployment of .NET applications using PowerShell. Reduced deployment time from 3 hours to 30 minutes.
        - Utilized Python Slack API to communicate with Slack Bots to trigger test/automation scripts on the application server. The Slack
        Bots were triggered based on magic words. This reduced opex revenue by 10%.
        - Integrated JIRA card movements to communicate with Slack Bots using webhooks, reduce effort on ad-hoc testing by 50%.
        - Participated in conducting a T-SQL and Python bootcamp for 20 associate software engineers. I received the best mentor
        award for that year’s bootcamp series.`
    },
    {
        id: 4,
        date: '2016 - 2018',
        iconSrc: <IoCodeWorking/>,
        company: 'Betsol',
        title: 'Associate Software Engineer',
        location: 'Bengaluru, India',
        description: `
        - Built SQL framework to automate data retention in Microsoft SQL Server 2008 R2 for multiple servers and databases. It reduced
        the development effort by 75% and the manual deployment effort by 90%. Therefore, saved Arise 7% of capex revenue.
        - Lowered the onboarding time of 15 new clients from 8 days to 1 day by generalizing multiple business logic stored procedures.
        - Create and maintained multiple data flow tasks for multiple client’s call center information. Improved data flow tasks execution
        time by utilizing parallel data extraction and modifying core stored procedures to utilize only business required columns.`
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