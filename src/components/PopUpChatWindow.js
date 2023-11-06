export default function PopUpChatWindow() {
  return (
    <>
      <button className="open-button" onclick="openForm()">
        Chat
      </button>
      <div className="chat-popup" id="myForm">
        <form action="/action_page.php" className="form-container">
          <h1>Chat</h1>
          <label htmlFor="msg">
            <b>Message</b>
          </label>
          <textarea
            placeholder="Type message.."
            name="msg"
            required=""
            defaultValue={""}
          />
          <button type="submit" className="btn">
            Send
          </button>
          <button type="button" className="btn cancel" onclick="closeForm()">
            Close
          </button>
        </form>
      </div>
    </>
  );
}
