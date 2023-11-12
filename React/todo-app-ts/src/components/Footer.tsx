export const Footer: React.FC<Props> = ({
  activeCount,
  todos,
  onCompleted
}) => {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{}</strong>
      </span>
      <Filters 
        filterSelected={}
        onFilterSelected={()=>{}}
      />
    </footer>
  )
}
