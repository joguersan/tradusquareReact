import './Comment.css'

export const CommentInList = ({ pfp, comment, date, classes }) => (
  <div className={`d-flex p-2 ${classes} align-items-center comment-box position-relative`}>
    <div className="flex-shrink-1 me-3">
      <img src={pfp} className="img-fluid rounded-circle" alt="Foto de perfil del usuario"></img>
    </div>
    <div className="w-100 text-break text-truncate">
      <p className="p-0 m-0">
        <b><a href="./#" className="link-primary text-decoration-none stretched-link">Persona en título de la noticia</a></b>
      </p>
      {comment}
      <div>
        <small className="text-muted">
          <i className="bi bi-calendar-event me-1"></i>{date}
        </small>
      </div>
    </div>
  </div>
)