import React from 'react';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';

const teamMembers = [
  {
    name: 'John Powell',
    position: 'Service Support',
    imageUrl: img1,
  },
  {
    name: 'Thomas Powell',
    position: 'Marketing',
    imageUrl: img2,
  },
  {
    name: 'Tom Wilson',
    position: 'Designer',
    imageUrl: img3,
  },
  {
    name: 'Samuel Palmer',
    position: 'Marketing',
    imageUrl: img4,
  },
];

const Team = () => {
  return (
    <section className="py-12 h-screen">
      <div className="text-center mb-12 mt-20">
        <h2 className="text-3xl font-semibold">Meet Our Team Of Experts</h2>
        <p className="text-gray-600 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="flex justify-center space-x-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="text-center">
            <img
              src={member.imageUrl}
              alt={member.name}
              className="rounded-lg w-60 h-auto object-cover object-center mx-auto"
            />
            <h3 className="mt-4 text-lg font-medium">{member.name}</h3>
            <p className="text-gray-500">{member.position}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
