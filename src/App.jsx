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
            width: '800px',
            height: '500px',
            inset: '20% 28%',
            overflow: 'hidden',
            border: '2px solid rgb(11, 85, 106)',
          }
        }}
      >
        <iframe src="https://web.powerva.microsoft.com/environments/Default-b00367e2-193a-4f48-94de-7245d45c0947/bots/cr75d_partnerAi/webchat?__version__=2" frameBorder="0" style={{ width: "800px", height: "500px" }}></iframe>
      </Modal>
      <div className='container'>
        <iframe style={{ position: "fixed", left: "0", top: "0", width: "100%", height: "100%", margin: "0px", padding: "0px", border: "none" }} width="100%" height="100%" src="
https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FvFpGreQeOMqJpyB5U5v9VK%2FPartner-Basecamp%3Fpage-id%3D1659%253A207085%26node-id%3D1659-207086%26viewport%3D1629%252C603%252C0.12%26t%3DkjtjyjuJDP9HD16S-1%26scaling%3Dscale-down-width%26starting-point-node-id%3D1659%253A207086%26content-scaling%3Dfixed%26hide-ui%3D1"
          allowfullscreen></iframe>
        <button className='copilot-button' onClick={openModal}><img src="/copilot-icon-small.png" /></button>
      </div>

    </>
  )
}

export default App
