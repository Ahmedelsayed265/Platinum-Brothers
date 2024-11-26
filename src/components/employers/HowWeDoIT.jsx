export default function HowWeDoIT() {
  return (
    <section className="how_we_do">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12 p-2 ">
            <div className="about_img">
              <img src="/images/how.jpg" alt="how" />
            </div>
          </div>
          <div className="col-lg-6 col-12 p-2 ps-lg-5 ps-2">
            <div className="content">
              <h2>Recruitment Services</h2>
              <p>
                Platinum Brothers International Manpower Agency Inc. recruits
                staff primarily from the Philippines and also other parts of
                Asia for a variety of occupational categories and industries. We
                are able to supply clients with professionals, skilled, and
                non-skilled workers.
              </p>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12 p-2">
            <h2 className="title">How We Do It</h2>
            <p className="subtitle">
              We have an in-depth knowledge of the latest industry trends, which
              helps us locate and attract the most suitable candidates. As part
              of our recruitment services, we handle various stages in the
              process, including:
            </p>
          </div>
          <div className="col-12 p-2 mt-5">
            <div className="setps">
              <div className="step">
                <div className="icon">
                  <img src="/images/s1.svg" alt="" />
                </div>
                <h4>Sourcing</h4>
              </div>
              <div className="step">
                <div className="icon">
                  <img src="/images/s2.svg" alt="" />
                </div>
                <h4>Screening & Shorlisting</h4>
              </div>
              <div className="step">
                <div className="icon">
                  <img src="/images/s3.svg" alt="" />
                </div>
                <h4>Selection</h4>
              </div>
              <div className="step">
                <div className="icon">
                  <img src="/images/s4.svg" alt="" />
                </div>
                <h4>Training</h4>
              </div>
              <div className="step">
                <div className="icon">
                  <img src="/images/s5.svg" alt="" />
                </div>
                <h4>Processing & Deployment</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
