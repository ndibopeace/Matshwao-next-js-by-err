"use client"

export default function Modal({ confirmSubmit, cancelSubmit }) {
  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h3 style={styles.heading}>Submit Quiz!</h3>
        <p>
          Are you sure you want to submit? You will not be able to change
          answers afterwards
        </p>

        <div style={styles.buttons}>
          <button onClick={cancelSubmit}  style={styles.btnModal} >Cancel</button>
          <button onClick={confirmSubmit} style={styles.btnModal} >Yes</button>
        </div>
      </div>
    </div>
  );
}



const styles = {

  heading: {
    margin: "12px 0"
  },
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.71)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    
  },
  modal: {
    background: "#fff",
    padding: "20px",
    borderRadius: "8px",
    width: "370px",
    textAlign: "center",
    marginInline: "var(--phone-padding-sides)"
  },
  buttons: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "15px",
    padding: "5px"
  },

  btnModal: {
    padding: "7px 10px",
    fontSize: "1.02rem"
  }
};