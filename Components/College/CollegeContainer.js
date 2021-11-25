import React, { useState } from 'react'
import Head from 'next/head'
import Footer from '../Common/Footer'
import Navbar from '../Common/Navbar'
import CollegeTitle from './CollegeTitle'
import CollegeTabs from './CollegeTabs'
import InformationContainer from './InformationContainer'
import CoursesContainer from './CoursesContainer'
import TrendingAdmissions from './TrendingAdmissions'
import StudentsViewed from './StudentsViewed'
import AdmissionsContainer from './AdmissionsContainer'
import CuttoffContainer from './CuttoffContainer'
import GalleryContainer from './GalleryContainer'
import QandAContainer from './QandAContainer'
const CollegeContainer = () => {
  const [tab, setTab] = useState('Information')
  return (
    <div>
      <Head>
        <title>College | Stulinks</title>
      </Head>
      <Navbar />
      <CollegeTitle />
      <CollegeTabs setTab={setTab} tab={tab} />
      <div className='grid grid-cols-7 gap-5 mx-12'>
        <div className='col-span-5'>
          {tab === 'Information' && <InformationContainer />}
          {tab === 'Courses' && <CoursesContainer />}
          {tab === 'Admissions' && <AdmissionsContainer />}
          {tab === 'Cut Off' && <CuttoffContainer />}
          {tab === 'Gallery' && <GalleryContainer />}
          {tab === 'Q&A' && <QandAContainer />}
        </div>
        <div className='col-span-2'>
          <TrendingAdmissions />
          <StudentsViewed />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default CollegeContainer
