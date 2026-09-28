import Button from "../shared/ui/Button/Button"



function App() {
 

  return (
   <div className="flex mt-20 items-center justify-center ">

    <div className="flex flex-col gap-5">
    <Button variant="primary">
      View all
    </Button>

    <Button variant="secondary">
      View all
    </Button>

     <Button variant="primary" disabled={true}>
      View all
    </Button>
    <Button variant="secondary" disabled={true}>
      View all
    </Button>
    </div>
    
   </div>
    
   
  )
}

export default App
