import image from '../imgs/Profile.webp';
const AboutMe = ():JSX.Element => {
  return (
    <div className="aboutme-info">
        <section id="info-general">
            <h1>Álvaro Suárez</h1>
            <p>Hi! I`m Alvaro and I`m a junior full stack developer, specialized in front-end, more specifically in <span>ReactJS</span> and  <span>NextJS</span>. I am in constant search of learning and personal improvement to know my best version.</p>
            <a href="#">Curriculum Vitae</a>
        </section>
        <img src={image} alt='Image Profile' className="profile" />
    </div>
  )
}

export default AboutMe