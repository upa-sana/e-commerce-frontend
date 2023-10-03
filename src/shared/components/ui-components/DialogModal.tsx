import { AiFillCloseCircle } from "react-icons/ai";
// import { FiEdit } from "react-icons/fi";
const DialogModalComponent = (props) => {
  if (!props.open) {
    return <></>;
  } else {
    return (
      <section className="dialog-modal" onClick={props.close}>
        <div
          style={
            (props.width ? { width: props.width } : { width: "300px" },
            props.height ? { height: props.height } : {})
          }
          className="dialog-modal__iner-wraper shadow-xl rounded-md"
          onClick={(e) => {
            // e.preventDefault();
            e.stopPropagation();
          }}
        >
          <div className="dialog-modal__iner-wraper__header flex justify-between">
            <div className="dialog-modal__iner-wraper__header__title font-bold text-xl">
              {props.title}
            </div>
            <div
              className="dialog-modal__iner-wraper__header__close cursor-pointer text-xl"
              onClick={props.close}
            >
              <AiFillCloseCircle />
            </div>
          </div>
          <div className="dialog-modal__iner-wraper__content mt-4 min-h-10 ">
            {props.children}
          </div>
        </div>
      </section>
    );
  }
};

export default DialogModalComponent;
