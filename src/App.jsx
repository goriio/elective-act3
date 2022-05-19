import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(null);

  useEffect(() => {
    const hasModalOpenned =
      localStorage.getItem('has-modal-openned') || 'false';
    if (hasModalOpenned === 'true') setIsModalOpen(false);
    else setIsModalOpen(true);
  });

  const handleClick = () => {
    setIsModalOpen(false);
    localStorage.setItem('has-modal-openned', 'true');
  };

  return (
    <div className="App">
      <header>Free Software</header>
      <h2>Download Adobe Premiere for Free!!!</h2>
      <img
        className="image"
        src="https://postpace.io/blog/wp-content/uploads/2020/06/Adobe-Premiere-Pro-Workspace-scaled.jpg"
        alt="adobe premiere pro interface"
      />

      <a
        className="button"
        href="https://github.com/goriio/elective-act3/raw/main/src/free-adobe-premiere-pro-installer.exe"
        target="_blank"
        download
      >
        Free Download
      </a>

      {isModalOpen && (
        <div className="overlay">
          <div className="modal">
            <p>
              This website is created for our elective subject. You can see the
              source code{' '}
              <a href="https://github.com/goriio/elective-act3" target="_blank">
                here
              </a>
              .
            </p>
            .
            <button className="button button--full-width" onClick={handleClick}>
              I understand
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
