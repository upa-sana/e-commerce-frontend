import { useState } from "react";
import DialogModalComponent from "./ui-components/DialogModal";

const ConfirmModalComponent = (props) => {
  const [errorMessage, setErrorMessage] = useState();

  return (
    <DialogModalComponent
      open={props.openModal}
      close={props.closeModal}
      title={props.title}
      width={"350px"}
      height={"180px"}
    >
      <>
        <div className="my-6">{props.message}</div>
        <div className="flex gap-4 justify-end mt-4">
          <button className="btn-default" onClick={props.closeModal}>
            Cancel
          </button>
          <button className="btn-yellow" onClick={props.click}>
            Ok
          </button>
        </div>
      </>
    </DialogModalComponent>
  );
};

export default ConfirmModalComponent;
