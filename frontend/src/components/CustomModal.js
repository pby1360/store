import React from 'react';
import { Modal, Fade, IconButton } from '@mui/material';
import "styles/components/modal.scss";
import CancelIcon from '@mui/icons-material/Cancel';

const Header = () => null

const Body = () => null

const Footer = () => null

const CustomModal = ({children, title, open, close}) => {
  console.log(children)
  const header = children.find(el => el.type === Header);
  const body = children.find(el => el.type === Body);
  const footer = children.find(el => el.type === Footer);

  const onClose = () => close();

  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
      >
        <Fade in={open}>
          <section className="modal-container">
            <section className="modal-title">
              <p className="modal-title-phrase">{title}</p>
              <IconButton onClick={onClose} className="modal-button-close">
                <CancelIcon />
              </IconButton>
            </section>
            <section className="modal-header">
              {header ? header.props.children : null}
            </section>
            <section className="modal-body">
              {body ? body.props.children : null}
            </section>
            <section className="modal-footer">
              {footer ? footer.props.children : null}
            </section>
          </section>
        </Fade>
      </Modal>
    </div>
  );
};

CustomModal.Header = Header
CustomModal.Body = Body
CustomModal.Footer = Footer

export default CustomModal;