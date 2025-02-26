import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";

function AddCabins() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add New Cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

// function AddCabins() {
//   const [isModelOpen, setIsModelOpen] = useState(false);
//   return (
//     <div>
//       <Button onClick={() => setIsModelOpen((show) => !show)}>
//         Add new cabin
//       </Button>
//       {isModelOpen && (
//         <Modal onClose={() => setIsModelOpen(false)}>
//           <CreateCabinForm onCloseModal={() => setIsModelOpen(false)} />
//         </Modal>
//       )}
//     </div>
//   );
// }

export default AddCabins;
