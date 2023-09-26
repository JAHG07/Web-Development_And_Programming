export const Modal = ({ children, winner }) => {
    return (
        <>
            <div className="modal">
                <div className="modal-content">
                    <h2>
                        {
                            winner ? 'Wins' :
                                '¡Tie!'
                        }
                    </h2>
                    {children}
                </div>
            </div>
        </>
    )
}



