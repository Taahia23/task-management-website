


const Footer = () => {
  return (
    <footer className="footer h-full md:h-80 px-10 py-20 bg-black text-white mt-20">
      <aside>
        <h1>TaskM</h1>
        <p className=''>THE PLATFORM WAY TO MANAGE YOUR TASKS </p>
      </aside>
      <nav>
        <header className="footer-title">Our address</header>
        <a className="link link-hover">TaskM</a>
        <a className="link link-hover">40 Park Ave, Brooklyn, New York 70250</a>
        <a className="link link-hover font-extrabold text-white">View On Map</a>
      
       

      </nav>
      <nav>
        <header className="footer-title">Contact us</header>
        <a className="link link-hover">Main Email: 7oroof@7oroof.com</a>
        <a className="link link-hover">Phone: 02 01065370701</a>
        <a className="link link-hover font-extrabold text-white">Send Us Message</a>
        <a href="https://github.com/Taahia23">Github</a>

      </nav>
     
    </footer>
  );
};

export default Footer;