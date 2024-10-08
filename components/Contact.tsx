import React from 'react'
import { PinContainer } from './ui/ContactCards'
import { contactItems } from '@/data'
import Image from 'next/image';

const Contact = () => {
  return (
    <section id='contact'>
    <div className="flex flex-wrap justify-center">
      {contactItems.map((item, index) => (
        <PinContainer
          key={index}
          title={item.title}
          href={item.href}
          className={item.className}
          containerClassName={item.containerClassName}
          download={item.title === "Download my Resume"}
        >
          <div className="flex items-center space-x-4">
            <Image
              src={item.image}
              alt="Contact Icon"
              width={48}
              height={48}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h3 className="text-lg font-semibold text-white">
                {item.name}
              </h3>
              <p className="text-sm text-gray-400">{item.description}</p>
            </div>
          </div>
        </PinContainer>
      ))}
    </div>
    </section>
  );
};

export default Contact