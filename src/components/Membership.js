const Membership = () => {
    return (
        <div className="membershipContainer">
            <img className="catMembershipPic" src="cat_image2_mobile.png" alt='kitty'/>
            
            <div className="membershipContent">
                <h3>PET-APPROVED</h3>

                <div className="feelsGood">It feels good to be a member.</div>
                <div className="afterFreeTrial">After your free trial, become a full-time member with benefits for $59 a year.</div>

                <div className="checkpoints">✔️ Cancel anytime during your free trial.</div>
                <div className="checkpoints">✔️ Free shipping on orders over $45.</div>
                <div className="checkpoints">✔️ Direct-to-consumer prices on hundreds of premium products.</div>
            </div>
        </div>
    )
}

export default Membership;