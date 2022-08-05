import {SocialIcon} from 'react-social-icons';
function Footer() {
  return (
    <footer>
      <div className="footer-text">
        <h2>Kawah <strong>Edukasi</strong></h2>
        <h6>Learn New and Fun Skills...</h6>
      </div>
      <div className="footer-social">
        <ul>
          <li className="footer-social-item">
            <a
              href="#ig">
              <SocialIcon url="https://instagram.com/akhmal7_" className='reactIcons'  target="_blank" />
            </a>
          </li>
          <li className="footer-social-item">
            <a
              href="#fb">
              <SocialIcon url='https://facebook.com/GansGils' className='reactIcons'  target="_blank" />
            </a>
          </li>
          <li className="footer-social-item">
            <a
              href="#tw">
              <SocialIcon url='https://twitter.com/mnaufalhelmi' className='reactIcons'  target="_blank" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
export default Footer;
