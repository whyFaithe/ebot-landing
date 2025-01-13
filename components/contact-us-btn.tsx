'use client';

export function ContactUsBtn() {
  const handleOpenModal = () => {
    // Access the globally initialized JotformFeedback instance
    if (window.jotformFeedbackInstance) {
      window.jotformFeedbackInstance.open();
    } else {
      console.error('JotformFeedback instance is not initialized.');
    }
  };

  return (
    <button
      className="bg-green-500 text-white hover:bg-green-600 shadow-lg shadow-green-500/20 px-4 py-2 rounded"
      onClick={handleOpenModal}
    >
      Contact Us
    </button>
  );
}
