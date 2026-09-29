import Button from "../shared/ui/Button/Button"
import Tag from "../shared/ui/Tag/Tag"
import SectionHeader from "../shared/ui/SectionHeader/SectionHeader"
import DimensionRow from "../shared/ui/DimensionRow/DimensionRow"


function App() {
 

  return (
   <div className="flex mt-20 items-center justify-center w-full max-w-[1312px] space-x-6 space-y-2  p-tc-64">

    <div className="w-full">
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

      <SectionHeader
        title="People may also like"
        action={<p>Hi</p>}
        description="Hi how are we doing"
      />

      <DimensionRow rightLabel="Geeky" leftLabel="Flexx" value={90}/>


    </div>
    
   </div>
    
   
  )
}

export default App
