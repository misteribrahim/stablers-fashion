import React, { useRef } from "react";
import { Modal, Button, Form } from "react-bootstrap";


const AllModel = ({ wish, title, children, ...props }) => {
  const inputRef = useRef();

  const handleCopy = () => {
    const input = inputRef.current;
    if (input) {

      navigator.clipboard.writeText(input.value);

      input.select();
    }
  };
  return (
    <Modal className="allModel" {...props} size="md" centered>
      <Modal.Header closeButton>
        {title && <Modal.Title>{title}</Modal.Title>}
      </Modal.Header>
      <Modal.Body>
        {wish ? 
         <div>
         <p>Family and Friends will be able to see your wishlist with this link.</p>
         <p className="text-dark">Copy wishlist link to share</p>
         <Form>
           <Form.Group className="form-group">
             <Form.Control
               placeholder="https://example.com/your-wishlist"
               type="text"
               defaultValue="https://example.com/your-wishlist"
               ref={inputRef}
             />
           </Form.Group>
         </Form>
         <div className="d-flex gap-3 justify-content-center mb-3 mt-3">
           <Button className="btn w-100" onClick={handleCopy}>
             Copy Link
           </Button>
         </div>
       </div> :
          <div className="text-center">
            <img src="/images/del.png" alt="logo" />
            <p>Are you sure you want to delete this address?</p>
            <div className="d-flex gap-3 justify-content-center mb-3 mt-3">
              <Button className="btn">Delete</Button>
              <Button className="btn">Cancel</Button>
            </div>
          </div>}
        {children}
      </Modal.Body>
    </Modal>
  );
};

export default AllModel;
