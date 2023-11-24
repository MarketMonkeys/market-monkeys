import CloseIcon from '../Icons/CloseIcon';
import LinkButton from '../LinkButton/LinkButton';
import styles from './Modal.module.css';
import Image from 'next/image';

interface ModalProps {
  title: string;
  description: string;
  buttonTitle?: string;
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({
  onClose,
  title,
  description,
  buttonTitle,
  isOpen,
}: ModalProps) => {
  const handleCloseClick = () => {
    onClose();
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalWrapper}>
        <div className={`${styles.modal} ${!isOpen && styles.modalInactive}`}>
          <button onClick={handleCloseClick} className={styles.closeBtn}>
            <CloseIcon />
          </button>
          <div className={styles.modalHeader}>
            {title && <span>{title}</span>}
          </div>
          <div className={styles.modalBody}>
            <p className={styles.description}>{description}</p>
            <Image
              src="/images/success_modal_img.png"
              alt="Success submitted image"
              width={224}
              height={80}
              style={{ marginBottom: '40px' }}
            />
            {buttonTitle && (
              <LinkButton
                href="/"
                size="l"
                style={{
                  width: '100%',
                  textTransform: 'uppercase',
                  textAlign: 'center',
                }}
                onClick={handleCloseClick}
              >
                {buttonTitle}
              </LinkButton>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
