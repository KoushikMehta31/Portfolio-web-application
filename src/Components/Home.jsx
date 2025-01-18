import './Home.css';
import Degree from './Degree';
import Footer from './Footer';
const Home = () =>{
  return (
    <>
    <center className='main-website'>
      
      <img src="/Images/Me.avif" className="img-fluid about-image" alt="images"></img>
      <div className="home-container">
      <h1>
        I'm a <span className="Highlight">Software Engineer</span>.
      </h1>
      <p className="home-description">
        Web Developer | Designer | Programmer
      </p>
      <button className="home-button">Resume</button>
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/koushik-mehta-7a4975285/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/KoushikMehta31" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </div>
    <Degree></Degree>
    
      <div className='about-par'>
        <center className='intro-icon'>🙋‍♂️</center>
        <center className='intro'>Introduction </center>
    <p>My name is <strong>Koushik Mehta</strong>, and I am from <strong>Jamshedpur</strong>.</p>
    <p>
      I have completed my Diploma degree in Computer Science Engineering 
      from <strong>Al-Kabir Polytechnic</strong>.
    </p>
    <p>
      I am currently pursuing a bachelor's degree in Computer Science Engineering 
      and I am a 3rd-year student at <strong>Birla Institute of Technology, Mesra</strong>.
    </p>
    <p>
      I have a strong foundation in programming languages like 
       <strong> Java</strong>, <strong>Python</strong>, and <strong>JavaScript</strong>,
      along with a good understanding of <strong>data structures</strong> and <strong>algorithms</strong>.
    </p>
    <p>
      I enjoy solving problems and challenges on platforms like 
      <strong> LeetCode</strong>. I also have hands-on experience in web development using 
      <strong> HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, <strong>ReactJS</strong>, <strong>Bootstrap</strong>, and <strong>Tailwind css</strong>,
      and I am skilled in databases like <strong>MySQL</strong> and <strong>MongoDB</strong>.
    </p>
    <p> Additionally, I have explored Knowledge <strong>DevOps</strong>, including <strong>Docker</strong>, <strong>Kubernetes</strong>, and <strong>CI/CD pipelines.</strong>
    </p>
    </div>
    <Footer/>
    </center>
  
    </>
  );
};

export default Home;
