import { Accordion } from "./components/Accordion";

function App() {
  return (
    <div className="app">
      <Accordion
        title="FAQ"
        content="Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet"
      />
      <Accordion
        title="What is your return policy ?"
        content="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
      />
      <Accordion
        title="Check our insurance policy "
        content=" Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus"
      />
    </div>
  );
}

export default App;
