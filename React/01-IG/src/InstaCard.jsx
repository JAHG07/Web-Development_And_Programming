import './InstaCard.css'

export const InstaCard = ({ username, ago, isUpdate }) => {
  const update = isUpdate ? `ig-card-info__img update` : `ig-card-info__img`
  console.log(update);
  const USER_IMG = `https://unavatar.io/${username}`
  const PUBLICATION_IMG = `https://c4.wallpaperflare.com/wallpaper/946/632/921/espacio-estrellas-naturaleza-planetas-wallpaper-preview.jpg`
  return (
    <article className="ig-card">
      <header className="ig-card-header">
        <div className="ig-card-info">
          <div className={update}>
            <img src={USER_IMG} alt="User image" />
          </div>
          <div className="ig-card-info__user">
            <div>
              <strong className="user">{username}</strong><time className="time">{ago}</time>
            </div>
            <span className="description">Description</span>
          </div>
        </div>
        <div className="ig-card-3dots">
          ...
        </div>
      </header>
      <main className="publication">
        <div className="publication-img">
          <div className='publication-img-im'>
            <img src="https://images.hola.com/imagenes/mascotas/20201104178485/consejos-gatos-para-principiantes/0-884-859/gatito-m.jpg?tx=w_680" alt="" />
          </div>
        </div>
        <div className="publication-footer">
          <div className="left">
            like
          </div>
          <div className="rigth">
            guardar
          </div>
        </div>
      </main>
      <footer>

      </footer>
    </article>
  )
}