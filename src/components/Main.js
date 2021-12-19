const Main = () => {
  return (
    <div className="mainContainer">
      <img src="cat_image1_mobile.png" alt="cuteCat" className="catPic" />

      <div className="contentContainer">
        <h3 className="treatYourself">Treat your pet (and you). It's on us!</h3>

        <div className="trialMembership">
          Treat your pet to a healthy treat for{" "}
          <span className="free">free</span> to kick off your Public Goods trial
          membership.
        </div>

        <div className="trialMembership2">
          See what it's like to be a Public Goods member.
        </div>

        <ul className="bullets">
          <li>
            Included in your bundle is a free 2-week membership that gives you
            unlimited access to our entire collection of sustainable essentials.
          </li>
          <li>
            Take a load off. We make it easy for you to make better choices.
            Always included: eco-friendly products you can trust.
          </li>
        </ul>

        <button className="freeOfferButton">Claim your free offer</button>
      </div>
    </div>
  );
};

export default Main;
