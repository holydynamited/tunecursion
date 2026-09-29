import Button from "../shared/ui/Button/Button"
import Tag from "../shared/ui/Tag/Tag"


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

    <Tag variant='visual'>
      atmospheric
    </Tag>

      <Tag variant='button'>
      atmospheric
    </Tag>

    <Tag variant='button' selected>
      atmospheric
    </Tag>

     <Tag variant='button' disabled>
      atmospheric
    </Tag>
    </div>
    
   </div>
    
   
  )
}

export default App
