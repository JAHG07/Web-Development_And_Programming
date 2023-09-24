import './InstaCard.css'

export const InstaCard = ({ username, ago, update }) => {

  const userImage = `https://unavatar.io/${username}`

  return (
    <article className="ig-card">
      <header className="ig-card-header">
        <div className="ig-card-info">
          <div className="ig-card-info__img">
            <img src={userImage} alt="User image" />
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
          <img src="" alt="" />
        </div>
      </main>
      <footer>

      </footer>
    </article>
  )
}