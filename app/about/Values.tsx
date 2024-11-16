import { FaHandsHelping, FaFlag, FaPeopleCarry, FaUsers, FaCogs, FaLaptop, FaBuilding, FaGlobe } from 'react-icons/fa';

const Values = () => {
  const values = [
    {
      id: 1,
      icon: <FaHandsHelping className="text-pink-500 text-4xl" />,
      title: 'Integrity',
      description: 'Displaying the highest level of integrity in the way we conduct and give report',
    },
    {
      id: 2,
      icon: <FaFlag className="text-pink-500 text-4xl" />,
      title: 'Demonstrate',
      description: 'Demonstrating a strong Will to Win and keep the masses inform',
    },
    {
      id: 3,
      icon: <FaPeopleCarry className="text-pink-500 text-4xl" />,
      title: 'Diversity',
      description: 'Promoting Diversity in the community making sure every community is touched for good governance',
    },
    {
      id: 4,
      icon: <FaUsers className="text-pink-500 text-4xl" />,
      title: 'Teamwork',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. A semper aenean id pen',
    },
    {
      id: 5,
      icon: <FaCogs className="text-pink-500 text-4xl" />,
      title: 'Collaboration',
      description: 'Stay up-to-date on ongoing and completed projects in your community, with features like milestone tracking, budget allocation, and progress updates',
    },
    {
      id: 6,
      icon: <FaLaptop className="text-pink-500 text-4xl" />,
      title: 'Technology',
      description: 'Harnessing the power of Technology to deliver better customer experience',
    },
    {
      id: 7,
      icon: <FaBuilding className="text-pink-500 text-4xl" />,
      title: 'Corporate',
      description: 'Quickly find specific information about politicians, projects, or regions using our intuitive search bar and filter options.',
    },
    {
      id: 8,
      icon: <FaGlobe className="text-pink-500 text-4xl" />,
      title: 'Digital',
      description: 'Stay up-to-date on ongoing and completed projects in your community, with features like milestone tracking, budget allocation, and progress updates',
    },
  ];

  return (
    <section className="text-center py-16 bg-white">
      <h2 className="text-3xl font-semibold mb-4">Accountability per Excellence</h2>
      <p className="text-gray-500 mb-12 max-w-2xl mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam bibendum eget morbi dignissim eu pharetra consequat montes, sagittis.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8">
        {values.map((value) => (
          <div key={value.id} className="bg-white shadow-lg p-6 rounded-lg text-center">
            {value.icon}
            <h3 className="text-xl font-bold mt-4">{value.title}</h3>
            <p className="text-gray-600 mt-2">{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Values;
