// import Link from 'next/link';
// import React, { useState } from 'react';
// import { Modal } from 'react-bootstrap'; 

// const Modal360 = (props) => {
//   return (
//     <Modal className='aboutModal'
//     {...props}
//     size="lg"
//     aria-labelledby="contained-modal-title-vcenter"
//     centered
// >
//     <Modal.Header closeButton>
//         <Modal.Title id="contained-modal-title-vcenter">
//             <i className="fa fa-angle-left" aria-hidden="true"></i>
//         </Modal.Title>
//     </Modal.Header>
//       <Modal.Body>
//       <Link href="/contact">
//           <a className='image-box'>
//             <img src='images/fff.png' alt='Popup Image'style={{ width: "100%" }} />
//           </a>
//           </Link>

//       </Modal.Body>
//     </Modal>
//   );
// };

// export default Modal360;





// import React, { useEffect, useState, Suspense } from 'react';
// import { Modal } from 'react-bootstrap';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei';
// import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'; 
// import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader'; 

// const Loader = () => {
//   return (
//     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
//       <p>Loading 3D Model...</p>
//     </div>
//   );
// };

// const Model = () => {
//   const [model, setModel] = useState(null); 

//   useEffect(() => {
//     const mtlLoader = new MTLLoader(); 
//     mtlLoader.load('/modal/OBJMTL.mtl', (materials) => {
//       materials.preload(); 

//       const objLoader = new OBJLoader(); 
//       objLoader.setMaterials(materials); 
//       objLoader.load('/modal/OBJ.obj', (object) => {
//         console.log('Model with materials loaded', object);
//         object.scale.set(0.01, 0.01, 0.01); 
//         setModel(object); 
//       });
//     }, undefined, (error) => {
//       console.error('Error loading materials', error);
//     });
//   }, []);

//   return model ? <primitive object={model} /> : null; 
// };

// const Modal360 = (props) => {
//   return (
//     <Modal className='aboutModal'
//       {...props}
//       size="lg"
//       aria-labelledby="contained-modal-title-vcenter"
//       centered
//     >
//       <Modal.Header closeButton>
//         <Modal.Title id="contained-modal-title-vcenter">
//           <i className="fa fa-angle-left" aria-hidden="true"></i>
//         </Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <div style={{ width: '100%', height: '500px' }}>
//           <Canvas>
//             <ambientLight intensity={0.5} />
//             <directionalLight position={[2, 2, 2]} />
           
//             <directionalLight
//               position={[0, -2, 2]} 
//               intensity={1}
//               castShadow
//             />
            
//             <pointLight 
//               position={[0, 0.5, 0.5]} 
//               intensity={3} 
//               color={'#ffffff'}
//               distance={5} 
//               decay={2} 
//             />
//             <Suspense fallback={<Loader />}>
//               <Model />
//             </Suspense>
//             <OrbitControls enableZoom={true} />
//           </Canvas>
//         </div>
//       </Modal.Body>
//     </Modal>
//   );
// };

// export default Modal360;

import React, { useEffect, useState, Suspense } from 'react';
import { Modal } from 'react-bootstrap';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'; 
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader'; 
import { PuffLoader } from 'react-spinners';

const Loader = () => {
  return (
    <div style={{
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100%', 
      width: '100%', 
      position: 'absolute', 
      top: 0,
      left: 0,
      backgroundColor: 'rgba(255, 255, 255, 0.8)', 
      zIndex: 1
    }}>
      <PuffLoader size={60} color="#753403"  />
    </div>
  );
};

const Model = ({ onLoading }) => {
  const [model, setModel] = useState(null); 

  useEffect(() => {
    onLoading(true); 
    const mtlLoader = new MTLLoader(); 
    mtlLoader.load('/modal/OBJMTL.mtl', (materials) => {
      materials.preload(); 

      const objLoader = new OBJLoader(); 
      objLoader.setMaterials(materials); 
      objLoader.load('/modal/OBJ.obj', (object) => {
        console.log('Model with materials loaded', object);
        object.scale.set(0.01, 0.01, 0.01); 
        setModel(object); 
        onLoading(false); 
      });
    }, undefined, (error) => {
      console.error('Error loading materials', error);
      onLoading(false); 
    });
  }, [onLoading]);

  return model ? <primitive object={model} /> : null; 
};

const Modal360 = (props) => {
  const [loading, setLoading] = useState(true); 

  return (
    <Modal className='aboutModal'
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <i className="fa fa-angle-left" aria-hidden="true"></i>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div style={{ width: '100%', height: '500px', position: 'relative' }}>
          {loading && <Loader />} 
          <Canvas>
            <ambientLight intensity={0.5} />
            <directionalLight position={[2, 2, 2]} />
            <directionalLight
              position={[0, -2, 2]} 
              intensity={1}
              castShadow
            />
            <pointLight 
              position={[0, 0.5, 0.5]} 
              intensity={3} 
              color={'#ffffff'}
              distance={5} 
              decay={2} 
            />
            <Suspense fallback={null}>
              <Model onLoading={setLoading} /> 
            </Suspense>
            <OrbitControls enableZoom={true} />
          </Canvas>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default Modal360;





