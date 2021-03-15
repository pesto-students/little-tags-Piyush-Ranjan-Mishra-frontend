import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  modal: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.6)",
  },
  modalMain: {
    position: "fixed",
    background: "white",
    width: "80%",
    height: "auto",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
  },
}));

const Modal = ({ children, handleClose, showModal = false }) => {
  const classes = useStyles();
  if (!showModal) return <></>;
  return (
    <div className={classes.modal}>
      <section className={classes.modalMain}>
        {children}
        <button type="button" onClick={handleClose}>
          Close
        </button>
      </section>
    </div>
  );
};
export default Modal;
