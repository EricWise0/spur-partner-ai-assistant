import './App.css'
import React, { useState } from 'react'
import Modal from 'react-modal'

function App() {

  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <Modal
        isOpen={isOpen}
        centered
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        style={{
          content: {
            width: '800px', // or any desired width
            height: '500px', // or any desired height
          }
        }}
      >
        <iframe src="https://web.powerva.microsoft.com/environments/Default-b00367e2-193a-4f48-94de-7245d45c0947/bots/cr75d_partnerAi/webchat?__version__=2" frameBorder="0" style={{ width: "800px", height: "500px" }}></iframe>
        <button onClick={closeModal}>Close Modal</button>
      </Modal>
      <div className='container'>

        <iframe style={{ width: "100%", height: "100%" }} src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FvFpGreQeOMqJpyB5U5v9VK%2FPartner-Basecamp%3Fpage-id%3D1659%253A207085%26node-id%3D1659-207124%26viewport%3D1629%252C603%252C0.12%26t%3DpHGeGGAzK5x0QEUw-1%26scaling%3Dcontain%26starting-point-node-id%3D1659%253A207086"></iframe>
        <button className='copilot-button' onClick={openModal}><img src="/copilot-icon-small.png" /></button>
      </div>

    </>
  )
}

export default App
