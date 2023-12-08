import React from "react";
import img1 from "../assets/images/img1.png";
import img2 from "../assets/images/img2.png";
import img3 from "../assets/images/img3.png";
import img4 from "../assets/images/img4.png";
import img5 from "../assets/images/img5.png";
import img6 from "../assets/images/img6.png";
const cardinfo = [
  {
    img: img1,
    heading: "ART COLLECTION",
    para: (
      <>
        Complete the art collection in full with +70 unique traits, and publish
        our rarity chart on our webpage.
      </>
    ),
  },
  {
    img: img2,
    heading: "SPECIAL BULLIES",
    para: (
      <>
        <span className="fw-medium">20 Buddybullies</span> &#123;out of 10k
        &#125; will have a very{" "}
        <span className="fw-medium">special and personalized</span> resembling
        of <span className="fw-medium">famous people</span> who are into{" "}
        <span className="fw-medium">NFTs</span> &#123;those will be available
        after the minting &#125;.
      </>
    ),
  },
  {
    img: img3,
    heading: "BREEDING",
    para: (
      <>
        Our <span className="fw-medium">BuddyBullies</span> will not come alone,
        as we will announce the{" "}
        <span className="fw-medium">breeding function</span> after the minting
        and you will be able to get{" "}
        <span className="fw-medium">a PuppyBully</span> &#123;for free &#125;.
      </>
    ),
  },
  {
    img: img4,
    heading: "DIGITALMARKETS",
    para: (
      <>
        <span className="fw-medium">
          Communicate with all the digital markets
        </span>{" "}
        available in the Solana NFT world for getting our collection{" "}
        <span className="fw-medium">successfully listed.</span>
      </>
    ),
  },
  {
    img: img5,
    heading: "MERCH",
    para: (
      <>
        The team is{" "}
        <span className="fw-medium">working on the future merch</span> thet will
        be available for the community members directly on our webpage.
      </>
    ),
  },
  {
    img: img6,
    heading: "CHARITY",
    para: (
      <>
        We will be giving <span className="fw-bold">30%</span> of the royalties
        to charity permanently and we will keep spending on marketing,
        promotions and partnership.
        <span className="fw-medium">50% of the riyalties</span> will go back to
        the <span className="fw-medium">community</span> as{" "}
        <span className="fw-medium">rewards.</span>
      </>
    ),
  },
];
const Carddata = () => {
  const card = cardinfo.map((cardinfo) => (
    <div className="col-lg-4 col-md-6  mt-4">
      <div class="buddy-card ">
        <img src={cardinfo.img} alt="img4" />
        <p className="ff-poppins fw-semibold fs-30 lh-100 text-white pt-4">
          {cardinfo.heading}
        </p>
        <p className="ff-poppins fw-normal fs-16 lh-150 opacity-70 text-white pt-2 max-w-347">
          {" "}
          {cardinfo.para}
        </p>
      </div>
    </div>
  ));
  return (
    <div className="bg2-blue py-5 overflow-x-clip">
      <div className="container">
        <div className="row">{card}</div>
      </div>
    </div>
  );
};

export default Carddata;
