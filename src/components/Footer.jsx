import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import { FaCirclePlay } from 'react-icons/fa6'

const FooterColumn = ({ title, values }) => {

  const list = values.map((item, index) => (
    <li
      key={index}
      className={`text-xs capitalize text-gray-500 ${index == 0 ? 'mt-5' : ''} leading-5`}>
      {item}
    </li>
  ))

  return (
    <div className="p-5">
      <h4 className="uppercase text-sm font-bold">{title}</h4>
      <ul className="list-none">
        {list}
      </ul>
    </div>
  );
};

const SocialNetwork = ({ logo }) => {
  return (
    <>
      <ul className="list-none flex  gap-2 ">
        {logo.map((Icon, index) => (<li key={index} className={`text-2xl  capitalize text-gray-600`}>{<Icon />}</li>))}
      </ul>
    </>
  )
}

const Footer = () => {
  return (
    <>

      <div className="bg-gray-300 mt-10 p-2 grid grid-flow-col">
        <FooterColumn title={'Popular Locations'} values={['Kolkata', 'Pune', 'Chennai', 'Mumbai']} />
        <FooterColumn title={'Trending Locations'} values={['New York', 'Los Angeles', 'Chicago', 'Houston']} />
        <FooterColumn title={'About Us'} values={['contact us']} />
        <FooterColumn title={'OLX'} values={['blog', 'help', 'sitemap', 'HelpLegal & Privacy information', 'Vulnerability Disclosure Program']} />

        <div className="p-5">
          <h4 className="uppercase text-sm font-bold mb-2">follow us</h4>
          <SocialNetwork logo={[FaFacebookF, FaInstagram, FaTwitter, FaCirclePlay]} />
        </div>

      </div>
        
      <div className="bg-teal-950 h-10 md:px-24 flex justify-between">
        <span className="text-white text-xs mt-2">Help - Sitemap</span>
        <span className="text-white text-xs mt-2">All rights reserved © 2006-2024 OLX</span>
      </div>
    </>
  );
}

export default Footer