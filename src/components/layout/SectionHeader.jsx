/* eslint-disable react/prop-types */
const SectionHeader = ({ title, desc }) => {
  return (
    <div className="page-header">
      <span className="brand fs-6">TekMarX</span>
      <h5 className="title fs-2">{title}</h5>
      <p className="desc text-center">{desc}</p>
    </div>
  );
};

export default SectionHeader;
