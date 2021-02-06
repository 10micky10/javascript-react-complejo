import requestManager from "./../../../api/RequestManager"
import messageManager from "./../MessageManager";
import i18n from "./../../../i18n/i18n";

const handleDelete = (endpoint, id) => {
  const url = endpoint.concat(id);
  const message = i18n.messages.confirmModal;
  let result = window.confirm(message);
  if(result){
    requestManager.remove(url, (response) => {
      messageManager.deleteMessages(response);
      window.location.reload();
    });
  }
};

export default handleDelete;
