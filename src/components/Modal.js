import reactDom from 'react-dom'
import styles from '../styles/Modal.module.css'

const Backdrop = props => {
  return <div className={styles.Backdrop} onClick={props.onClose} />
}

const ModalOverlay = ({ children }) => {
  return (
    <div className={styles.ModalOverlay}>
      <div>{children}</div>
    </div>
  )
}

const portalElement = document.getElementById('overlays')

export default function Modal({ children, onClose }) {
  return (
    <>
      {reactDom.createPortal(<Backdrop onClose={onClose} />, portalElement)}
      {reactDom.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )}
      {}
    </>
  )
}
