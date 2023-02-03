import React, { useRef } from "react";
import createRecord from "../services/record/createRecord";
export default function AddRecord() {
  // for all fields
  const field_1 = useRef();
  const field_2 = useRef();
  const field_3 = useRef();
  const field_4 = useRef();
  const field_5 = useRef();
  const field_6 = useRef();
  const field_7 = useRef();
  const field_8 = useRef();
  const field_9 = useRef();
  const field_10 = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    createRecord({
      field_1: field_1.current.value,
      field_2: field_2.current.value,
      field_3: field_3.current.value,
      field_4: field_4.current.value,
      field_5: field_5.current.value,
      field_6: field_6.current.value,
      field_7: field_7.current.value,
      field_8: field_8.current.value,
      field_9: field_9.current.value,
      field_10: field_10.current.value,
    });
  };
  return (
    <div>
      <label htmlFor="my-modal" className="btn btn-outline btn-accent">
        Add
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Add a new record</h3>
          {/* form using tailwind for all the variables */}
          <form onSubmit={handleSubmit} className="mt-4">
            <div className="flex flex-col">
              <label htmlFor="field_1" className="mb-2">
                field 1
              </label>
              <input
                type="text"
                id="field_1"
                className="border border-gray-400 p-2 rounded"
                ref={field_1}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="field_2" className="mb-2">
                Field 2
              </label>
              <input
                type="text"
                id="field_2"
                className="border border-gray-400 p-2 rounded"
                ref={field_2}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="field_3" className="mb-2">
                field 3
              </label>
              <input
                type="text"
                id="field_3"
                className="border border-gray-400 p-2 rounded"
                ref={field_3}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="field_4" className="mb-2">
                field 4
              </label>
              <input
                type="text"
                id="field_4"
                className="border border-gray-400 p-2 rounded"
                ref={field_4}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="field_5" className="mb-2">
                field 5
              </label>
              <input
                type="text"
                id="field_5"
                className="border border-gray-400 p-2 rounded"
                ref={field_5}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="field_6" className="mb-2">
                field 6
              </label>
              <input
                type="text"
                id="field_6"
                className="border border-gray-400 p-2 rounded"
                ref={field_6}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="field_7" className="mb-2">
                field 7
              </label>
              <input
                type="text"
                id="field_7"
                className="border border-gray-400 p-2 rounded"
                ref={field_7}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="field_8" className="mb-2">
                field 8
              </label>
              <input
                type="text"
                id="field_8"
                className="border border-gray-400 p-2 rounded"
                ref={field_8}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="field_9" className="mb-2">
                field 9
              </label>
              <input
                type="text"
                id="field_9"
                className="border border-gray-400 p-2 rounded"
                ref={field_9}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="field_10" className="mb-2">
                field 10
              </label>
              <input
                type="text"
                id="field_10"
                className="border border-gray-400 p-2 rounded"
                ref={field_10}
              />
            </div>
            <div className="flex justify-end mt-4 modal-action">
              <button
                type="submit"
                className="btn btn-outline btn-accent"
                htmlFor="my-modal"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
