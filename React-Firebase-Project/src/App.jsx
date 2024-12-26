import AdmissionForm from "./components/AdmissionForm"
import { SignUp } from "./components/SignUp"

function App() {

  return (
    <div className="flex justify-center items-center w-full bg-black text-white h-screen">
      <div className="">
        <div className=" flex w-full justify-between gap-8 items-center">
        <h1 className="text-3xl font-bold underline">
          React & Firebase Tutorial
        </h1>
        <SignUp/>
        </div>
        <AdmissionForm/>
      </div>
    </div>
  )
}

export default App
