import reactDom from 'react-dom'
import styles from '../styles/Modal.module.css'

const Backdrop = props => {
  return <div className={styles.Backdrop}> </div>
}

const ModalOverlay = ({ children }) => {
  return (
    <div className={styles.ModalOverlay}>
      <div>{children}</div>
    </div>
  )
}

const portalElement = document.getElementById('overlays')

export default function Modal({ children }) {
  return (
    <>
      {reactDom.createPortal(<Backdrop />, portalElement)}
      {reactDom.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )}
      {}
    </>
  )
}
