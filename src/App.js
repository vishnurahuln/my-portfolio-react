import Spline from '@splinetool/react-spline';
import { useState } from 'react';
import { IoMenu, IoLogoGithub } from 'react-icons/io5'
import VishnuProfile from '/Users/vishnurahul/Desktop/CodeMics/Portfolio-Website/my-portfolio/src/images/Profile_Picture.jpg';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Experience, Projects, SocialMediaLinks } from './data';
import { motion, AnimatePresence } from "framer-motion"


function App() {
  const [isActive, setIsActive] = useState(false);
  return (
    <AnimatePresence initial={false}>
    <div className="flex w-screen min-h-screen flex-col items-center justify-center relative bg-primary pb-20">
        <nav className="w-full px-6 z-50  fixed inset-x-0 top-2 flex justify-center items-center ">
          <div className=" w-full md:w-880 bg-navBar p-4 rounded-2xl flex items-center">
          <p className='text-lg text-slate-200 font-medium'> Vishnu Rahul</p>
          <div className='hidden md:flex items-center gap-6 ml-6 flex-1'>
          <motion.a
                whileTap={{ scale: 0.85 }}
                 href='#home' className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out'
                onClick={() => setIsActive(false)}>
                Home
                </motion.a>
                <motion.a
                whileTap={{ scale: 0.85 }}
                 href='#about' className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out'
                onClick={() => setIsActive(false)}>
                  About
                </motion.a>
                <motion.a
                whileTap={{ scale: 0.85 }}
                 href='#projects' className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out'
                onClick={() => setIsActive(false)}>
                  Projects
                </motion.a>
                <motion.a
                whileTap={{ scale: 0.85 }}
                 href='#contact' className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out'
                onClick={() => setIsActive(false)}>
                  Contact
                </motion.a>
                <motion.a
                whileTap={{ scale: 0.85 }}
                 href='https://drive.google.com/file/d/1Bd8g1sxVZ6AKHnb82OVu9Pvv6y45vpjA/view?usp=sharing' className="ml-auto text-base text-textBase font-medium hover:text-slate-100 cursor-pointer border border-textBase px-2 py-1 rounded-xl hover:border-gray-100 duration-100 ease-in"
                onClick={() => setIsActive(false)}>
                  Download
                </motion.a>
          </div>
          <motion.div 
          whileTap={{ scale: 0.5 }}
          className='block md:hidden ml-auto cursor-pointer'
          onClick={() => setIsActive(!isActive)}>
            <IoMenu className='text-2xl text-textBase'/>
          </motion.div>
          {
            isActive && (
              <motion.div 
              initial ={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1.1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ delay: 0.5, type: 'spring' }}
              className='p-4 w-275 bg-navBar rounded-1g fixed top-24 right-16 flex flex-col items-center justify-evenly gap-6'>
                <motion.a
                whileTap={{ scale: 0.85 }}
                 href='#home' className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out'
                onClick={() => setIsActive(false)}>
                Home
                </motion.a>
                <motion.a
                whileTap={{ scale: 0.85 }}
                 href='#about' className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out'
                onClick={() => setIsActive(false)}>
                  About
                </motion.a>
                <motion.a
                whileTap={{ scale: 0.85 }}
                 href='#projects' className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out'
                onClick={() => setIsActive(false)}>
                  Projects
                </motion.a>
                <motion.a
                whileTap={{ scale: 0.85 }}
                 href='#contact' className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out'
                onClick={() => setIsActive(false)}>
                  Contact
                </motion.a>
                <motion.a
                whileTap={{ scale: 0.85 }}
                 href='https://drive.google.com/file/d/1Bd8g1sxVZ6AKHnb82OVu9Pvv6y45vpjA/view?usp=sharing' className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer border border-textBase px-2 py-1 rounded-xl hover:border-gray-100 ease-in-out'
                onClick={() => setIsActive(false)}>
                  Download
                </motion.a>
              </motion.div>
            )
          }
        </div>
      </nav>
      
      <div className="relative" id="home"> 
      <Spline scene="https://draft.spline.design/arEcN6S-mQeZyrHO/scene.spline"/>
      <div className='absolute bottom-10 w-full justify-center items-center flex'>
        <div className='shadow-md p-4 flex items-center justify-center bg-zinc-900 rounded-3xl'>
          <p className='text-textBase'> Press and drag to orbit!! <br/>Scroll down to view the portfolio</p>
        </div>
      </div>
      </div>
      <main className='w-[80%] mt-5'>
        <section
            className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 my-24"
            id="about"
          >
            <div className="w-full h-420 flex items-center justify-center">
              <div className="w-275 h-340 relative bg-gradient-to-r from-vishnuPortfolioPurple via-purple-500 to-vishnuPortfolioRed rounded-md">
                <img
                  src={VishnuProfile}
                  alt=""
                  className="w-full h-full absolute -right-4 top-4 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
            <div className="w-full h-420 flex flex-col items-center justify-center ">
              <p className="text-lg text-textBase text-center">
                Hello, I'm Vishnu Rahul. I'm a Graduate Student at the University of Illinois at Chicago pursuing a Masters in Management Information Systems. 
              </p>

              <motion.button 
              whileTap={{ scale: 0.855 }}
              type="button"
              class="w-full md:w-auto relative mt-6 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-vishnuPortfolioRed to-vishnuPortfolioPurple group-hover:from-vishnuPortfolioRed group-hover:to-vishnuPortfolioPurple hover:text-white dark:text-white focus:ring-4 focus:ring-vishnuPortfolioRed dark:focus:ring-vishnuPortfolioRed hover:shadow-lg hover:shadow-red-700 hover:dark:shadow-lg hover:dark:shadow-purple-900">
                <span class="w-full md:w-auto relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  <a href='https://drive.google.com/file/d/1Bd8g1sxVZ6AKHnb82OVu9Pvv6y45vpjA/view?usp=sharing'>Download</a>
                </span>
              </motion.button>
            </div>
          </section>

          {/* TimeLine */}
          <section className="w-full flex items-center justify-center">
            <VerticalTimeline>
              {
                Experience && Experience.map(n => (
                  <VerticalTimelineElement key ={n.id}
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgba(21,24,31)', color: '#888' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgba(21,24,31)' }}
                    date={n.date}
                    iconStyle={{ background: 'rgba(21,24,31)', color: '#888' }}
                    icon={n.iconSrc}
                  >
                    <h3 className="vertical-timeline-element-title">{n.company}</h3>
                    <h3 className="vertical-timeline-element-title">{n.title}</h3>
                    <h4 className="vertical-timeline-element-subtitle">{n.location}</h4>
                    <p>
                      {n.grade}
                    </p>
                    <p>
                      {n.description}
                    </p>
                  </VerticalTimelineElement>
                )
              )
              }              
            </VerticalTimeline>
          </section>
          {/* Project Section */}
          <section
            className="flex flex-wrap items-center justify-evenly my-24 gap-4"
            id="projects"
          >
            {Projects && Projects.map(n => (
              <div key ={n.id} 
              className="border border-zinc-800 rounded-md p-2 min-w-[275px] md:max-w-[275px] hover:border-zinc-600 duration-100 ease-in-out"
              >
                <p className="text-lg text-textBase font-medium uppercase">
                    {n.name.length > 25 ? `${n.name.slice(0, 25)}...` : n.name}
                  </p>
              <img
                    src={n.imageSrc}
                    className="w-full h-full object-cover rounded-md my-4"
                    alt=""
                  />
                <div className='flex flex-1 items-center justify-between'>
                  <p className='text-lg text-gray-300'> Technologies Used
                  <span className='block text-sm to-gray-500'> {n.techs} </span>
                  </p>
                  <a href={n.github}>
                    <motion.div
                    whileTap={{scale: 0.855}}>
                      <IoLogoGithub className="text-textBase text-3xl cursor-pointer" />
                    </motion.div>
                  </a>
                </div>
            </div>
            )
            )}
          </section>
          {/* Contact Section */}
          <section className='flex flex-wrap items-center justify-evenly my-24 gap-4' id="contact">
            <p className='text-2xl text-gray-400 capitalize'> Follow me on</p>
            <div className='flex flex-wrap items-center justify-center w-full my-4 gap-4'>
              {
                SocialMediaLinks && SocialMediaLinks.map(n => (
                <motion.a 
                whileTap={{scale: 0.8}}
                key={n.id} href={n.link} className='w-full md:w-auto px-3 md:px-8 py-5 border border-zinc-800 rounded-2xl hover:border-zinc-600 duration-100 ease-in-out cursor-pointer flex item-center justify-center gap-3'>
                {n.iconSrc}
                <p className='text-lg text-textBase'>{n.name}</p>
              </motion.a>
                ))
              }
            </div>
          </section>

      </main>
    </div>
    </AnimatePresence>
  );
}

export default App;
