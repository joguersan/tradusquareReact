import { mediaIcons } from "../constants";
import './Sidebar.css'
const FollowUs = () => (
  <div id="sidebar-social">
    <h2 className="text-primary">
      <i className="bi bi-hand-thumbs-up-fill me-2"></i>¡Síguenos!
    </h2>
    <div id="social-icons" className="d-flex justify-content-center gradient-primary glassmorphing rounded p-3">
      <RenderSocialIcons />
    </div>
    <h2 className="text-primary mt-4">
      <i className="bi bi-star-fill me-2"></i>¿Conoces esta traducción?
    </h2>
  </div>
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

const RenderSidebar = () => (
  <FollowUs />
)

export default RenderSidebar