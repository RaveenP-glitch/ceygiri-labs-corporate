import Link from "next/link";

const services = [
  {
    icon: "images/icon/icon_161.svg",
    title: "Web Development Services",
    delayAnim: 0,
  },
  {
    icon: "images/icon/icon_163.svg",
    title: "Graphic Designing & Content Writing",
    delayAnim: 100,
  },
  {
    icon: "images/icon/icon_162.svg",
    title: "Search Engine Optimization",
    delayAnim: 200,
  },
  {
    icon: "images/icon/icon_164.svg",
    title: "Social Media Marketing",
    delayAnim: 300,
  },
];

const Service = () => {
  return (
    <>
      {services.map((service, index) => (
        <div
          className="col-xl-3 col-sm-6"
          key={index}
          data-aos="fade-up"
          data-aos-delay={service.delayAnim}
        >
          <div className="card-style-sixteen tran3s text-center position-relative mt-30">
            <div className="icon">
              <img src={service.icon} alt="" className="lazy-img m-auto" width={65} height={65}/>
            </div>
            <p className="fs-20 m0 pt-20 text-warning">I want</p>
            <h4 className="tx-dark">{service.title}</h4>
            <Link
              href="/pages-menu/service-details"
              className="read-more rounded-circle text-start tran3s"
            >
              <i className="bi bi-arrow-right" />
            </Link>
          </div>{" "}
          {/* /.card-style-sixteen */}
        </div>
      ))}
    </>
  );
};

export default Service;
