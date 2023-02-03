import { useRef } from "react";

export default function EditModal(props) {
  const {
    field_1,
    field_2,
    field_3,
    field_4,
    field_5,
    field_6,
    field_7,
    field_8,
    field_9,
    field_10,
  } = props;

  const field1Ref = useRef(field_1);
  const field2Ref = useRef(field_2);
  const field3Ref = useRef(field_3);
  const field4Ref = useRef(field_4);
  const field5Ref = useRef(field_5);
  const field6Ref = useRef(field_6);
  const field7Ref = useRef(field_7);
  const field8Ref = useRef(field_8);
  const field9Ref = useRef(field_9);
  const field10Ref = useRef(field_10);
  return (
    <div className="modal">
      <div className="modal-box">
        <div className="card-body ">
          <h1 className="font-bold">Edit Form</h1>
          <div className="flex flex-row space-x-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Field 1</span>
              </label>
              <input
                type="text"
                ref={field1Ref}
                placeholder={field_1}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Field 2</span>
              </label>
              <input
                type="text"
                ref={field2Ref}
                placeholder={field_2}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Field 3</span>
              </label>
              <input
                type="text"
                ref={field3Ref}
                placeholder={field_3}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Field 4</span>
              </label>
              <input
                type="text"
                ref={field4Ref}
                placeholder={field_4}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Field 5</span>
              </label>
              <input
                type="text"
                ref={field5Ref}
                placeholder={field_5}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Field 6</span>
              </label>
              <input
                type="text"
                ref={field6Ref}
                placeholder={field_6}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Field 7</span>
              </label>
              <input
                type="text"
                ref={field7Ref}
                placeholder={field_7}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Field 8</span>
              </label>
              <input
                type="text"
                ref={field8Ref}
                placeholder={field_8}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Field 9</span>
              </label>
              <input
                type="text"
                ref={field9Ref}
                placeholder={field_9}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Field 10</span>
              </label>
              <input
                type="text"
                ref={field10Ref}
                placeholder={field_10}
                className="input input-bordered"
              />
            </div>
          </div>

          <div className="form-control mt-6">
            <label className="btn btn-primary " htmlFor="my-modal">
              Confirm
            </label>

            {/* <label htmlFor="my-modal" className="btn">
         Yay!
       </label> */}
          </div>
        </div>
      </div>
    </div>
  );
}
