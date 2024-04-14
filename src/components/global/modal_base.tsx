import { Modal } from "react-bootstrap";

interface ModalBaseProps {
  showModal: boolean;
  handleCloseModal: () => void;
  children: React.ReactNode;
}

export function ModalBase({
  showModal,
  handleCloseModal,
  children,
}: ModalBaseProps) {
  return (
    <Modal show={showModal} onHide={handleCloseModal} size="lg" centered>
      <Modal.Body>
        <div className="w-full lg:w-1/2 h-full mx-auto min-h-[30vh] flex flex-col p-4 gap-10 items-center justify-between text-black">
          {children}
        </div>
      </Modal.Body>
    </Modal>
  );
}
