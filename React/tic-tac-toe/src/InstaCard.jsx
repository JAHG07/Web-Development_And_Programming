import './InstaCard.css'

export const InstaCard = ({ username, ago, update }) => {

  const USER_IMG = `https://unavatar.io/${username}`
  const PUBLICATION_IMG = `https://c4.wallpaperflare.com/wallpaper/946/632/921/espacio-estrellas-naturaleza-planetas-wallpaper-preview.jpg`
  return (
    <article className="ig-card">
      <header className="ig-card-header">
        <div className="ig-card-info">
          <div className="ig-card-info__img">
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
      <main className="">
        <div className="publication-img">
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