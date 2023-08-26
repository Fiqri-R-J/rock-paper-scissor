import { useState } from "react";
import { BsFillPersonFill, BsRobot } from "react-icons/bs";

function App() {
  return (
    <>
      <div className="flex mt-10">
        <div className="m-auto">
          <button
            className="grid content-center mb-10 btn bg-neutral w-96 h-96 text-primary"
            onClick={() => window.my_modal_4.showModal()}
          >
            <div className="flex">
              <div className="text-center text-9xl ">
                <BsFillPersonFill />
              </div>
              <h3 className="mt-5 text-5xl text-center ms-5 ">VS</h3>
              <div className="text-center ms-10 text-9xl ">
                <BsRobot />
              </div>
            </div>
          </button>
          <dialog id="my_modal_4" className="modal">
            <form method="dialog" className="w-11/12 max-w-5xl modal-box">
              <button className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2">
                ✕
              </button>
              <h3 className="text-lg font-bold">Hello!</h3>
              <p className="py-4">Click the button below to close</p>
            </form>
          </dialog>
          <h1 className="my-10 text-5xl font-bold text-center text-primary">
            OR
          </h1>
          <button
            className="grid content-center mb-10 btn bg-neutral w-96 h-96 text-primary"
            onClick={() => window.my_modal_3.showModal()}
          >
            <div className="flex">
              <div className="text-center text-9xl ">
                <BsFillPersonFill />
              </div>
              <h3 className="mt-5 text-5xl text-center ms-5 ">VS</h3>
              <div className="text-center ms-10 text-9xl ">
                <BsFillPersonFill />
              </div>
            </div>
          </button>
          <dialog id="my_modal_3" className="modal">
            <form method="dialog" className="modal-box">
              <button className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2">
                ✕
              </button>
              <h3 className="text-lg font-bold">Hello!</h3>
              <p className="py-4">
                Press ESC key or click on ✕ button to close
              </p>
            </form>
          </dialog>
        </div>
      </div>
    </>
  );
}

export default App;
