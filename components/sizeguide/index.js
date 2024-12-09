// import Link from 'next/link';
// import React, { useState } from 'react';
// import { Modal, Table, Form, InputGroup, Button } from 'react-bootstrap';

// const sizeGuideData = [
//   { cm: 23.4, uk: 5, us: 6, eu: 39, jp: 23.5 },
//   { cm: 23.8, uk: 5.5, us: 6.5, eu: 39.5, jp: 24 },
//   { cm: 24.2, uk: 6, us: 7, eu: 40, jp: 24.5 },
//   { cm: 24.6, uk: 6.5, us: 7.5, eu: 40.5, jp: 25 },
//   { cm: 25, uk: 7, us: 8, eu: 41, jp: 25.5 },
//   { cm: 25.5, uk: 7.5, us: 8.5, eu: 41.5, jp: 26 },
//   { cm: 25.9, uk: 8, us: 9, eu: 42, jp: 26.5 },
//   { cm: 26.4, uk: 8.5, us: 9.5, eu: 42.5, jp: 27 },
//   { cm: 26.8, uk: 9, us: 10, eu: 43, jp: 27.5 },
//   { cm: 27.2, uk: 9.5, us: 10.5, eu: 43.5, jp: 28 },
//   { cm: 27.6, uk: 10, us: 11, eu: 44, jp: 28.5 },
//   { cm: 28, uk: 10.5, us: 11.5, eu: 44.5, jp: 29 },
// ];

// const SizeGuide = (props) => {
//   const [filterValue, setFilterValue] = useState('');
//   const filteredData = sizeGuideData.filter((item) =>
//     item.cm.toString().includes(filterValue)
//   );

//   return (
//     <Modal
//       className="sizeGuide"
//       {...props}
//       size="lg"
//       aria-labelledby="contained-modal-title-vcenter"
//       centered
//     >
//       <Modal.Header closeButton>
//         <Modal.Title id="contained-modal-title-vcenter">Size Guide</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <InputGroup className="mb-3">
//           <Form.Control
//             placeholder="Enter length of your feet (cm)"
//             value={filterValue}
//             onChange={(e) => setFilterValue(e.target.value)}
//           />
//           <Button  onClick={() => setFilterValue('')}>
//             Enter
//           </Button>
//         </InputGroup>
//         <p>MENS FOOTWEAR SIZE GUIDE</p>
//         <Table  bordered hover className="text-center size-guide-table">
//           <thead>
//             <tr>
//               <th>CM</th>
//               <th>🇬🇧 UK</th>
//               <th>🇺🇸 US</th>
//               <th>🇪🇺 EU</th>
//               <th>🇯🇵 Japanese</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredData.map((item, index) => (
//               <tr key={index}>
//                 <td>{item.cm}</td>
//                 <td>{item.uk}</td>
//                 <td>{item.us}</td>
//                 <td>{item.eu}</td>
//                 <td>{item.jp}</td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       </Modal.Body>
//     </Modal>
//   );
// };

// export default SizeGuide;

import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';

const SizeGuide = (props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(null);
  const [resultFound, setResultFound] = useState(true); 

  const sizeData = [
    { cm: 23.4, uk: 5, us: 6, eu: 39, jp: 23.5 },
    { cm: 23.8, uk: 5.5, us: 6.5, eu: 39.5, jp: 24 },
    { cm: 24.2, uk: 6, us: 7, eu: 40, jp: 24.5 },
    { cm: 24.6, uk: 6.5, us: 7.5, eu: 40.5, jp: 25 },
    { cm: 25, uk: 7, us: 8, eu: 41, jp: 25.5 },
    { cm: 25.5, uk: 7.5, us: 8.5, eu: 41.5, jp: 26 },
    { cm: 25.9, uk: 8, us: 9, eu: 42, jp: 26.5 },
    { cm: 26.4, uk: 8.5, us: 9.5, eu: 42.5, jp: 27 },
    { cm: 26.8, uk: 9, us: 10, eu: 43, jp: 27.5 },
    { cm: 27.2, uk: 9.5, us: 10.5, eu: 43.5, jp: 28 },
    { cm: 27.6, uk: 10, us: 11, eu: 44, jp: 28.5 },
    { cm: 28, uk: 10.5, us: 11.5, eu: 44.5, jp: 29 },
  ];

  const handleSubmit = () => {
    if (isSubmitted) {
      setSearchTerm('');
      setHighlightedIndex(null);
      setIsSubmitted(false);
      setResultFound(true); // Reset result found on clear
    } else {
      const index = sizeData.findIndex((row) =>
        row.cm.toString().includes(searchTerm)
      );

      if (index !== -1) {
        setHighlightedIndex(index);
        setResultFound(true); 
      } else {
        setHighlightedIndex(null);
        setResultFound(false); // No results found
      }
      setIsSubmitted(true);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <Modal className="sizeGuide" {...props} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Size Guide</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="input-group mb-3 gap-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter length of your feet (cm)"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button
            className="btn btn-primary"
            type="button"
            onClick={handleSubmit}
          >
            {isSubmitted ? 'Clear' : 'Enter'}
          </button>
        </div>
        <p>Mens Footwear Size Guide</p>
        <div className="size-guide-table-wrapper">
          <table className="size-guide-table">
            <thead>
              <tr>
                <th>CM</th>
                <th>
                  <img src="/images/UK.png" alt="UK" width="20" height="12" /> UK
                </th>
                <th>
                  <img src="/images/US.png" alt="US" width="20" height="12" /> US
                </th>
                <th>
                  <img src="/images/EU.png" alt="EU" width="20" height="12" /> EU
                </th>
                <th>
                  <img src="/images/jap.png" alt="JP" width="20" height="12" /> Japanese
                </th>
              </tr>
            </thead>
            <tbody>
              {isSubmitted && !resultFound ? (
                <tr>
                  <td colSpan="5" style={{ textAlign: 'center' }}>
                    Result not found
                  </td>
                </tr>
              ) : (
                sizeData.map((row, index) => (
                  <tr
                    key={index}
                    className={index === highlightedIndex ? 'highlight' : ''}
                  >
                    <td>{row.cm}</td>
                    <td>{row.uk}</td>
                    <td>{row.us}</td>
                    <td>{row.eu}</td>
                    <td>{row.jp}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default SizeGuide;




