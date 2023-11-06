export default function userModal() {
    return(
<>
  <title>Bootstrap Example</title>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link
    rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
  />
  <div className="container">
    <h2>Modal Example</h2>
    {/* Trigger the modal with a button */}
    <button
      type="button"
      className="btn btn-info btn-lg"
      data-toggle="modal"
      data-target="#myModal"
    >
      userName
    </button>
    {/* Modal */}
    <div className="modal fade" id="myModal" role="dialog">
      <div className="modal-dialog">
        {/* Modal content*/}
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal">
              ×
            </button>
            <h4 className="modal-title">Modal Header</h4>
          </div>
          <div className="modal-body">
            <p>Some text in the modal.</p>
          </div>
          <div className="modal-footer">
            
          </div>
        </div>
      </div>
    </div>
  </div>
</>
    )
}
