export default function Modal({close}){
    return (
        <div>
            <div className="modal">
                <p className="modal__title">Are you sure?</p>
                <div className="modal__buttons">
                <button onClick={close} className="btn btn__cancel">Cancel</button>
                <button className="btn">Confirm</button>
                </div>
            </div>
            <div className="backdrop" />
        </div>
    )
}