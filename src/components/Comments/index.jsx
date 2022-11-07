import './Comment.css'

export const CommentInList = ({ pfp, comment, date, classes }) => (
  <div class={`d-flex p-2 ${classes} align-items-center rounded comment-box`}>
    <div class="flex-shrink-1 me-3">
      <img src={pfp} class="img-fluid rounded-circle"></img>
    </div>
    <div class="w-100 text-break text-truncate">
      <p class="p-0 m-0">
        <b><a href="#" class="stretched-link">Persona en título de la noticia</a></b>
      </p>
      {comment}
      <div>
        <small class="text-muted">
          <i className="bi bi-clock me-2"></i>{date}
        </small>
      </div>
    </div>
  </div>
)