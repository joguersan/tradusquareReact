import { Row, Col } from 'react-bootstrap'
import { mediaIcons } from "../constants";
import { CommentInList } from '../Comments';
import './Sidebar.css'
import { ProjectRandom } from '../Project';
import TSCarousel from '../Bootstrap/Carousel';
const FollowUs = () => (
  <Col xs='12' id="sidebar-social">
    <h2 className="text-primary">
      <i className="bi bi-hand-thumbs-up-fill me-2"></i>¡Síguenos!
    </h2>
    <div id="social-icons" className="d-flex justify-content-center gradient-primary glassmorphing rounded p-3">
      <RenderSocialIcons />
    </div>
  </Col>
);

const RandomTranslation = () => (
  <Col xs='12' id="random-translation">
    <h2 className="text-primary">
      <i className="bi bi-star-fill me-2"></i>¿Conoces esta traducción?
    </h2>
    <ProjectRandom icon='images/psx.webp' status='in-progress' />
  </Col>
);

const LastComments = () => (
  <Col xs='12' id="last-comments">
    <h2 className="text-primary">
      <i className="bi bi-chat-dots me-2"></i>Últimos comentarios
    </h2>
    <Row className="gy-2">
      <CommentInList
        classes="col-6 col-md-12"
        pfp="images/user_pfp.jpeg"
        comment="askd askjd asjkd asjkd askjd askdj asqjwd qwod qjd qwknd qwn ds aksd aksd qwkmd qs,ad
      awdjnqwkjd qwdjq wdkjas dqokwl dwqjqd qjwkd qwjd q"
        date="28 de junio, 22:00"
      />
      <CommentInList
        classes="col-6 col-md-12"
        pfp="images/user_pfp.jpeg"
        comment="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAa"
        date="Ahora"
      />
      <CommentInList
        classes="col-6 col-md-12"
        pfp="images/user_pfp.jpeg"
        comment="REEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE"
        date="Mañana"
      />
    </Row>
  </Col>
);

const RenderSocialIcons = () => (
  mediaIcons.map(button =>
    <SocialIcon icon={button.icon} href={button.href} key={button.text} />
  )
)

const SocialIcon = ({ icon, href, text }) => (
  <a className="text-white px-3" href={href} target="_blank" rel="noreferrer" key={text}>
    <h3 className="p-0 m-0"><i className={`bi bi-${icon}`}></i></h3>
  </a>
)

const HelpWanted = () => (
  <Col xs="12">
    <h2 className="text-primary">
      <i className="bi bi-exclamation-circle-fill me-2"></i>¡Necesita tu ayuda!
    </h2>
    <TSCarousel />
  </Col>
)

const RenderSidebar = () => (
  <Row className="gy-3">
    <FollowUs />
    <RandomTranslation />
    <HelpWanted />
    <LastComments />    
  </Row>
)

export default RenderSidebar