import { statusColor } from '../constants'
import './Project.css'

export const PlatformStatus = ({ icon, status }) => {
  var statusObject = statusColor.find(obj => obj.status === status);

  return (
    <div className="rounded-circle border border-4 border-white platformIcon position-relative text-center">
      <img src={icon} className="img-fluid" alt="Icono de la consola" />
      <div className={`p-0 m-0 platform-status rounded-circle border border-3 border-white text-white bg-${statusObject.color} platformStatus`}>
        <b className="p-0 m-0">{statusObject.icon}</b>
      </div>
    </div>
  )
}

export const ProjectRandom = ({ icon, status }) => {
  return (
    <div className="col-12 text-white background-cover-center" style={{ backgroundImage: "url('images/CorpsePartyBookOfShadows.webp')" }}>
      <div className="w-100 h-100 p-4 bg-dark bg-opacity-50 glassmorphing text-center">
        <h3>Corpse Party: Book of Shadow</h3>
        <p>Traducido por: <b>Jose Kenshin</b></p>
        <div className="d-flex justify-content-center">
          <PlatformStatus icon={icon} status={status} />
          <PlatformStatus icon={icon} status={status} />
          <PlatformStatus icon={icon} status={status} />
        </div>
      </div>
    </div>
  )
}