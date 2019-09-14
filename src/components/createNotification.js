const notification = function createNotification(errorMessage) {
  const div = document.createElement('div');

  div.innerHTML = `
  Status: ${errorMessage.status}; 
  <br \/> 
  Reason: ${errorMessage.reason}`;

  return div;
};

export default notification;
