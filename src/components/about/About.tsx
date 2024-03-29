import * as React from 'react'
import '../../styles/about.scss'
import img1 from '/about_images/img1.jpg'
import img2 from '/about_images/img2.jpg'
import img3 from '/about_images/img3.jpg'
import our_officers from '/our_officers.jpg'
export default function About(): JSX.Element {
  return (
    <div className='w-full min-h-screen bg-about'>
      <div className='h-20 w-full'></div>
      <div className='my-4 about-text text-7xl flex justify-center px-4 flex-row w-full'>
        What we are about
      </div>
      <div className='px-4 sm:px-16 md:px-32 flex flex-col lg:flex-row h-full w-full'>
        <div className='flex flex-col w-full lg:w-1/2'>
          <div className='content-text text-xl md:text-3xl text-start flex justify-start px-4 flex-col'>
            <p>
              Gaucho Racing is the continuation of a long history of motorsports
              in Santa Barbara. Though teams have come and gone, it is our goal
              to create something that is lasting and will persevere through the
              years to highlight the engineering and business prowess of UC
              Santa Barbara Students. We put a strong focus on educating new
              members, providing them with the tools they need to succeed, both
              in school and outside.
            </p>
            <br></br>
            <p>
              Gaucho Racing strives to build a diverse and multidisciplinary
              team, able to challenge each other&apos;s ideas and assumptions,
              as we believe this leads to the best work, innovation and growth.
            </p>
          </div>
        </div>
        <div className='order-first flex flex-row flex-wrap w-full lg:w-1/2'>
          <div className='p-2 space-y-2 justify-center flex flex-1 flex-col'>
            <img src={img2} />
          </div>
          <div className='p-2 space-y-2 justify-center flex flex-1 flex-col'>
            <img src={img1} />
            <img src={img2} />
          </div>
          <div className='p-2 space-y-2 justify-center flex flex-1 flex-col'>
            <img src={img1} />
            <img src={img3} />
          </div>
        </div>
      </div>
      <div className='mt-4 about-text text-7xl flex justify-center px-4 flex-row w-full'>
        Mission
      </div>
      <div className='py-8 flex flex-col sm:flex-row h-full w-full'>
        <div className='mx-4 sm:mx-12 md:mx-32 content-text text-xl md:text-3xl text-start flex justify-start px-4 flex-col'>
          <p>
            Gaucho Racing aims to enable students to gain hands-on experience in
            all phases of the engineering process and propel them forward into
            their careers. As part of UCSB’s official SAE International Student
            Chapter, our main focus is to participate each year in the Formula
            SAE Electric Competition. This involves students working together as
            a team to research, design, and manufacture a single seater electric
            race car from the ground up. Our team is also responsible for
            funding this project each year which will connect our students with
            industry sponsors and build crucial relationships for our success.
            Through this project, students will gain essential engineering and
            networking skills in demand in this industry and be prepared to
            launch their futures in engineering.
          </p>

          {/* <p>While we will be reviving a UCSB Engineering tradition after a five-year hiatus, we wish to make it clear that participation in our team is not limited to engineering students.</p> */}
        </div>
      </div>
      <div className='bg-officers h-screen w-full'>
        <div className='flex flex-col w-full h-full'>
          <div className='mx-4 my-8 text-officers text-7xl flex flex-row justify-center'>
            Our Officers
          </div>
          <div className='text-officers-info text-xl md:text-3xl mx-4 md:mx-16 my-8 flex flex-row justify-center'>
            From Left to Right: Andrew Peng (Treasurer), Torin Schlunk (Secretary), Cesar Castillo (Chief Engineer), Nicholas Rivelle (President), Tien Nguyen (Controls Co-Lead), Raaghav Thirumaligai (Event Coordinator) 
          </div>
					<img className='object-scale-down h-2/3 w-full' src={our_officers}/>
        </div>
      </div>
    </div>
  )
}
