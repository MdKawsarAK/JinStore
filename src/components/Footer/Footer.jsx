import playStoreImg from '../../assets/icons/502.png';
import appleStoreImg from '../../assets/icons/503.png';
const Footer = () => {
    return (
        <div className="bg-[#F3F4F6]">
            <div className="footer sm:footer-horizontal max-w-[1360px] justify-between text-base-content p-10">
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>

                <form>
                    <h6 className="footer-title">Newsletter</h6>
                    <fieldset className="w-80">
                        <label>Enter your email address</label>
                        <div className="join">
                            <input
                                type="text"
                                placeholder="username@site.com"
                                className="input input-bordered join-item" />
                            <button className="btn btn-primary join-item">Subscribe</button>
                        </div>
                    </fieldset>
                </form>
            </div>
            <footer className="max-w-[1360px] footer sm:footer-horizontal   text-dark-content p-10">
                <nav>
                    <h6 className="footer-title">Do You Need Help ?</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Social</h6>
                    <a className="link link-hover">Twitter</a>
                    <a className="link link-hover">Instagram</a>
                    <a className="link link-hover">Facebook</a>
                    <a className="link link-hover">GitHub</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Explore</h6>
                    <a className="link link-hover flex items-center gap-4">
                        <img className='w-30' src={appleStoreImg} alt="apple store" />
                        <p>Download App Get <br />-10% Discount</p>
                    </a>
                    <a className="link link-hover flex items-center gap-4">
                        <img className='w-30' src={playStoreImg} alt="apple store" />
                        <p>Download App Get <br />-10% Discount</p>
                    </a>
                    <a className="link link-hover">Security</a>
                    <a className="link link-hover">Pricing</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;